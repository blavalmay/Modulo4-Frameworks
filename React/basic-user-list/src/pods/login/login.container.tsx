import React from "react";
import { Login } from "./login.component";

interface Props {
  onLogin: (username: string) => void;
}

export const LoginContainer: React.FC<Props> = (props) => {
  const { onLogin } = props;

  const handleSubmit = (username: string, password: string) => {
    if (username === "admin" && password === "admin") {
      onLogin(username);
    } else {
      alert("Wrong credentials... tsss admin / admin");
    }
  };

  return (
    <Login onSubmit={handleSubmit} />
  );
};
