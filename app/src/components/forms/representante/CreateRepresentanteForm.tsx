"use client";
import { useRouter } from "next/navigation";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { RepresentanteFormBase } from "./RepresentanteFormBase";
import { createRepresentante } from "@/src/lib/utils/representantes/createRepresentante";
import { CreateRepresentante } from "@/src/types/CreateRepresentante";

type CreateRepresentanteFormProps = {
  clienteId: string;
};

export const CreateRepresentanteForm = (
  props: CreateRepresentanteFormProps
) => {
  const { clienteId } = props;
  const router = useRouter();

  const onSubmit = async (data: CreateRepresentante) => {
    try {
      await createRepresentante(clienteId, data);

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
                <RepresentanteFormBase
                  onSubmit={onSubmit}
                  isLoading={false}
                  isError={false}
                  isSuccess={false}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
