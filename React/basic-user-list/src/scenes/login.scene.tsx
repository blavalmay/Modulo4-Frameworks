import React from "react";
import { LoginContainer } from "@/pods";
import { Container } from "@mui/material";

interface Props {
  onLogin: (username: string) => void;
}

export const LoginScene: React.FC<Props> = (props) => {
  const { onLogin } = props;

  return (
    <Container>
      <LoginContainer onLogin={onLogin} />
    </Container>
  );
};