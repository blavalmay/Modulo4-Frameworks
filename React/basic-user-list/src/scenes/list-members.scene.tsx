import React from "react";
import { AppLayout } from "@/layout";
import { ListMembersContainer } from "@/pods";
import { Typography } from "@mui/material";

export const ListMembersScene: React.FC = () => {
    
    return (
        <AppLayout>
            <Typography variant="h4">Miembros de organizaciones</Typography>
            <Typography variant="subtitle1" sx={{ mb: 2 }}>Utiliza el buscador para introducir la organización y obtener el listado de miembros que la componen.</Typography>
            <ListMembersContainer />
        </AppLayout>
    );
};