import { Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import { Cliente } from "@/src/types/cliente/Cliente";
import { ClientesListActions } from "./ClientesListActions";
import { ListOrderIdentifier } from "@/src/components/lists/ListOrderIdentifier/ListOrderIdentifier";

type ClientesCardListProps = {
  clientes: Cliente[];
};

export function ClientesCardList({ clientes }: ClientesCardListProps) {
  return (
    <Grid container spacing={2}>
      {clientes.map((cliente, index) => {
        const { nomeFantasia, createdAt, updatedAt, ativo } = cliente;
        return (
          <Grid item key={cliente.id} xs={12}>
            <Card
              sx={{
                width: "100%",
                borderLeft: "4px solid",
                borderColor: "primary.main",
              }}
            >
              <CardContent>
                <Grid
                  container
                  direction={"row"}
                  spacing={2}
                  justifyContent={"space-around"}
                >
                  <Grid item>
                    <ListOrderIdentifier index={index} />
                  </Grid>
                  <Grid container item spacing={1} direction={"column"} xs={10}>
                    <Grid item>
                      <Typography variant="caption">Nome Fantasia</Typography>
                      <Typography variant="body1" fontWeight={"bold"}>
                        {nomeFantasia}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Divider />
                    </Grid>
                    <Grid
                      item
                      container
                      direction={"row"}
                      justifyContent={"space-between"}
                    >
                      <Grid item container direction={"row"} spacing={1} xs>
                        <Grid item>
                          <Typography variant="caption">Status</Typography>
                        </Grid>
                        <Grid item>
                          <Typography
                            variant="body2"
                            color={
                              cliente?.ativo ? "success.main" : "error.main"
                            }
                            fontWeight={"bold"}
                          >
                            {ativo ? "ATIVO" : "INATIVO"}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid container item direction={"row"} spacing={1} xs={4}>
                        <Grid item>
                          <Typography variant="caption">
                            Data de criação
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="body1" fontWeight={"bold"}>
                            {createdAt.toLocaleDateString()}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid container item direction={"row"} spacing={1} xs>
                        <Grid item>
                          <Typography variant="caption">
                            Data de atualização
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="body1" fontWeight={"bold"}>
                            {updatedAt.toLocaleDateString()}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item>
                    <ClientesListActions cliente={cliente} />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
