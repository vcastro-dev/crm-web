import { CreateContratoForm } from "@/src/components/forms/contrato/CreateContratoForm";
import { Container } from "@mui/material";

type PageParams = {
  clienteId: string;
};

type PageSearchParams = {
  oportunidadeId: string;
};

type PageProps = {
  params: PageParams;
  searchParams: PageSearchParams;
};

export default function Page({ params, searchParams }: PageProps) {
  const { clienteId } = params;
  const { oportunidadeId } = searchParams;

  return (
    <Container
      sx={{
        marginTop: 2,
      }}
    >
      <CreateContratoForm
        clienteId={clienteId}
        oportunidadeId={oportunidadeId}
      />
    </Container>
  );
}
