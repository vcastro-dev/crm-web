import { Button, Container, Grid, Typography } from "@mui/material";
import { RepresentantesList } from "@/src/components/lists/RepresentantesList/RepresentantesList";
import Link from "next/link";
import { Representate } from "@/src/types/Representante";

type Params = {
  clienteId: string;
};

const BFF_URL = process.env.BFF_URL;

const getRepresentantes = async (clienteId: string) => {
  const response = await fetch(
    `${BFF_URL}/clientes/${clienteId}/representantes`,
    {
      cache: "no-store",
    }
  );
  const data: Representate[] = await response.json();
  return data;
};

export default async function Page({ params }: { params: Params }) {
  const { clienteId } = params;

  const representantes = await getRepresentantes(clienteId);

  representantes.forEach((representante) => {
    representante.createdAt = new Date(representante.createdAt);
    representante.updatedAt = new Date(representante.updatedAt);
  });

  const content = representantes.length ? (
    <RepresentantesList representantes={representantes} />
  ) : (
    <Typography variant="body1">
      Não há representantes cadastrados para este cliente.
    </Typography>
  );

  return (
    <Container
      sx={{
        marginTop: 2,
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
      >
        <Grid item>
          <Link href={"representantes/novo"} passHref>
            <Button variant={"contained"}>Novo Representante</Button>
          </Link>
        </Grid>
        <Grid
          item
          container
          sx={{
            width: "100%",
          }}
          spacing={2}
          direction={"column"}
        >
          {content}
        </Grid>
      </Grid>
    </Container>
  );
}
