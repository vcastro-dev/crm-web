"use client";

import { Container } from "@mui/material";
import PromoverLeadForm from "@/(routes)/leads/components/PromoverLeadForm";
import { LeadQueryProvider } from "@/src/components/queryProviders/LeadQueryProvider";

type PageParams = {
  leadId: string;
};

export default function Page({ params }: { params: PageParams }) {
  const { leadId } = params;

  return (
    <Container>
      <LeadQueryProvider>
        <PromoverLeadForm leadId={leadId} />
      </LeadQueryProvider>
    </Container>
  );
}