import { Card, CardContent, Divider, Grid, Typography } from "@mui/material";

import { ListOrderIdentifier } from "@/src/components/lists/ListOrderIdentifier/ListOrderIdentifier";
import { OportunidadesListActions } from "./OportunidadesListActions";
import { Oportunidade } from "@/src/types/Oportunidade";

type Props = {
  oportunidades: Oportunidade[];
  handleModalOpen: () => void;
};

export function OportunidadesCardList(props: Props) {
  const { oportunidades, handleModalOpen } = props;
  return (
    <Grid container spacing={2}>
      {oportunidades.map((oportunidade, index) => {
        const { id, titulo, createdAt, updatedAt, etapa } = oportunidade;
        return (
          <Grid item key={id} xs={12}>
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
                      <Typography variant="caption">Título</Typography>
                      <Typography variant="body1" fontWeight={"bold"}>
                        {titulo}
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
                      <Grid container item direction={"row"} spacing={1} xs={4}>
                        <Grid item>
                          <Typography variant="caption">Etapa</Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="body1" fontWeight={"bold"}>
                            {etapa}
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

                  <Grid item xs>
                    <OportunidadesListActions
                      oportunidade={oportunidade}
                      onClickAttachment={handleModalOpen}
                    />
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
