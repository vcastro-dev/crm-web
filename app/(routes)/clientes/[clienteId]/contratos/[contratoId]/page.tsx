import { UpdateContratoForm } from "@/app/_components/forms/contrato/UpdateContratoForm";
import { ContratoQueryProvider } from "@/app/_components/queryProviders/ContratoQueryProvider";
import { Container } from "@mui/material";

type PageParams = {
  clienteId: string;
  contratoId: string;
};

export default function Page({ params }: { params: PageParams }) {
  const { clienteId, contratoId } = params;
  return (
    <ContratoQueryProvider>
      <Container
        sx={{
          marginTop: 2,
        }}
      >
        <UpdateContratoForm contratoId={contratoId} clienteId={clienteId} />
      </Container>
    </ContratoQueryProvider>
  );
}
