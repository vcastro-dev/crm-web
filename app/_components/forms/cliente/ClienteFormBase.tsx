"use client";

import { Grid, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { LoadingButton } from "../../loadingButton/LoadingButton";
import { CreateCliente } from "@/app/_types/cliente/CreateCliente";
import { formatCnpj } from "@/app/_lib/utils/data/formatCnpj";
import { isCnpjValid } from "@/app/_lib/utils/data/isCnpjValid";
import { useEffect } from "react";

type ClienteFormProps = {
  onSubmit: (formData: CreateCliente) => void;
  defaultValues?: CreateCliente;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
};

export function ClienteFormBase(props: ClienteFormProps) {
  const { onSubmit, defaultValues, isLoading } = props;

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<CreateCliente>({
    defaultValues: {
      ativo: true,
      ...defaultValues,
    },
  });

  const rules = {
    required: "Campo obrigatório",
  };

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} direction={"column"}>
        <Grid item>
          <Controller
            name="nomeFantasia"
            control={control}
            rules={rules}
            render={({ field }) => (
              <TextField
                {...field}
                label="Nome fantasia"
                variant="outlined"
                type="text"
                fullWidth
                helperText={errors.nomeFantasia?.message}
                error={!!errors.nomeFantasia}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
          />
        </Grid>
        <Grid item>
          <Controller
            name="cnpj"
            control={control}
            rules={{
              ...rules,
              validate: (value) => isCnpjValid(value) || "CNPJ inválido",
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="CNPJ"
                variant="outlined"
                type="text"
                fullWidth
                helperText={errors.cnpj?.message}
                error={!!errors.cnpj}
                InputLabelProps={{
                  shrink: true,
                }}
                value={formatCnpj(String(field.value))}
              />
            )}
          />
        </Grid>
        <Grid item>
          <LoadingButton
            type="submit"
            variant="contained"
            color="primary"
            loading={isLoading}
            fullWidth
          >
            Salvar
          </LoadingButton>
        </Grid>
      </Grid>
    </form>
  );
}
