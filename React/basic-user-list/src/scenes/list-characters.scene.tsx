import React from "react";
import { AppLayout } from "@/layout";
import { ListCharactersContainer } from "@/pods";
import { Typography } from "@mui/material";

export const ListCharactersScene: React.FC = () => {
    
    return (
        <AppLayout>
            <Typography variant="h4">Personajes de Rick y Morty</Typography>
            <Typography variant="subtitle1" sx={{ mb: 2 }}>Utiliza el buscador para introducir el nombre del personaje que deseas buscar:</Typography>
            <ListCharactersContainer />
        </AppLayout>
    );
};