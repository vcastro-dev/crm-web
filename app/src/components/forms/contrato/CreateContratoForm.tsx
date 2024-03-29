"use client";
import { Contrato } from "@/src/types/contrato/Contrato";
import { useRouter } from "next/navigation";

import { Card, CardContent, Grid, Typography } from "@mui/material";
import { ContratoFormBase } from "./ContratoFormBase";

const BFF_URL = process.env.NEXT_PUBLIC_BFF_URL;

type CreateContratoFormProps = {
  clienteId: string;
  oportunidadeId: string;
};

export const CreateContratoForm = (props: CreateContratoFormProps) => {
  const { clienteId, oportunidadeId } = props;
  const router = useRouter();

  const onSubmit = async (data: Contrato) => {
    console.log(data);
    const res = await fetch(`${BFF_URL}/clientes/${clienteId}/contratos`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 0,
      },
    });

    if (res.ok) {
      router.push(`/clientes/${clienteId}/contratos`);
    }
  };

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2} direction={"column"}>
          <Grid item>
            <Typography variant="h6">Novo contrato</Typography>
          </Grid>
          <Grid item>
            <ContratoFormBase
              onSubmit={onSubmit}
              clienteId={clienteId}
              defaultValues={{
                oportunidadeId,
              }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
