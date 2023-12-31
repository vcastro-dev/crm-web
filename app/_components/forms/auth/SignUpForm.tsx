"use client";

import {
  Grid,
  Card,
  TextField,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

import { useForm, Controller, SubmitHandler } from "react-hook-form";

type SignUpFormData = {
  email: string;
  password: string;
};

export function SignUpForm() {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<SignUpFormData> = (data) => {
    console.log(data);
  };

  return (
    <Card>
      <CardContent>
        <Grid container textAlign={"center"} spacing={2}>
          <Grid item>
            <Typography variant="h6">Sign up</Typography>
          </Grid>

          <Grid container item>
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{
                width: "100%",
              }}
            >
              <Grid container spacing={2} direction={"column"}>
                <Grid item>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Email"
                        variant="outlined"
                        type="email"
                        fullWidth
                        required
                      />
                    )}
                  />
                </Grid>
                <Grid item>
                  <Button type="submit" variant="contained" fullWidth>
                    Sign In
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
