import React from "react";
import { FormData, createEmptyFormData } from "./login.vm";
import { Button, Card, CardActions, CardContent, TextField, Typography } from "@mui/material";

interface Props {
  onSubmit: (user: string, password: string) => void;
}

export const Login: React.FC<Props> = (props) => {
  const { onSubmit } = props;
  
  const [formData, setFormData] = React.useState<FormData>(createEmptyFormData());

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData.username, formData.password);
  };

  const handleChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    })
  };

  return (
    <Card sx={{ maxWidth: 275, m: '50px auto 0' }}>
      <form onSubmit={handleSubmit}>
        <CardContent>
            <Typography variant="h5" sx={{ mb: 1.5 }}>
              Iniciar sesión
            </Typography>
            <TextField
              placeholder="Usuario"
              value={formData.username}
              onChange={handleChange("username")}
              size="small"
              margin="dense"
            />
            <TextField
              placeholder="Password"
              type="password"
              value={formData.password}
              onChange={handleChange("password")}
              size="small"
            />
        </CardContent>
        <CardActions>
          <Button type="submit">Login</Button>
        </CardActions>
      </form>
    </Card>
  );
};
