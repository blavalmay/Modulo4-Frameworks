import React from "react";
import { Container, Typography } from "@mui/material";

interface Props extends React.PropsWithChildren {}

export const AppLayout: React.FC<Props> = (props) => {
    const { children } = props;
    
    return (
        <Container sx={{ padding: '20px 0'}}>
            <Typography variant="h4" sx={{ marginBottom: '20px'}}>Pedido a proveedor</Typography>
            {children}
        </Container>
    );
}