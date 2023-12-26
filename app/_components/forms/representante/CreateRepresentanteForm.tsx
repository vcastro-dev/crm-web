"use client";
import { useRouter } from "next/navigation";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { RepresentanteFormBase } from "./RepresentanteFormBase";
import { Representate } from "@/app/_types/representante/Representante";
import { createRepresentante } from "@/app/_lib/representante/createRepresentante";

type CreateRepresentanteFormProps = {
  clienteId: string;
};

export const CreateRepresentanteForm = (
  props: CreateRepresentanteFormProps
) => {
  const { clienteId } = props;
  const router = useRouter();

  const onSubmit = async (data: Representate) => {
    const { id, endereco, ...representante } = data;
    try {
      await createRepresentante(clienteId, {
        ...representante,
        clienteId,
      });

      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid container spacing={2} direction={"column"}>
      <Grid item>
        <Typography variant="h6">Novo contrato</Typography>
      </Grid>
      <Grid item>
        <Card>
          <CardContent>
            <Grid container spacing={2} direction={"column"}>
              <Grid item>
                <RepresentanteFormBase onSubmit={onSubmit} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
