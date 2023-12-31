import { CreateRepresentante } from "@/app/_types/representante/CreateRepresentante";
import { Representate } from "@/app/_types/representante/Representante";

const BFF_URL = process.env.NEXT_PUBLIC_BFF_URL;

export const createRepresentante = async (
  clienteId: string,
  data: CreateRepresentante
) => {
  const res = await fetch(`${BFF_URL}/clientes/${clienteId}/representantes`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 0,
    },
  });

  const json: Representate = await res.json();

  return json;
};
