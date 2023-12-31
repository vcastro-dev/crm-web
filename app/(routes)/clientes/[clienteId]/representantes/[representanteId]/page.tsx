import { UpdateRepresentanteForm } from "@/app/_components/forms/representante/UpdateRepresentanteForm";
import { RepresentanteQueryProvider } from "@/app/_components/queryProviders/RepresentanteQueryProvider";
import { Container } from "@mui/material";

type PageParams = {
  clienteId: string;
  representanteId: string;
};

export default function Page({ params }: { params: PageParams }) {
  const { clienteId, representanteId } = params;
  return (
    <RepresentanteQueryProvider>
      <Container
        sx={{
          marginTop: 2,
        }}
      >
        <UpdateRepresentanteForm
          clienteId={params.clienteId}
          representanteId={representanteId}
        />
      </Container>
    </RepresentanteQueryProvider>
  );
}
