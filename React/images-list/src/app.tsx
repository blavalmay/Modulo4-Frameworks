import React from "react";
import { AppRouter } from "./core";
import { SelectedProvider } from "./core/providers";

export const App = () => {
  return (
    <SelectedProvider>
      <AppRouter />
    </SelectedProvider>
  );
};