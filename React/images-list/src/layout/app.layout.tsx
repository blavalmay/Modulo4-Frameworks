import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { routes } from "@/core";

interface Props extends React.PropsWithChildren {}

export const AppLayout: React.FC<Props> = (props) => {
    const {children} = props;
    return (
        <Container>
            <AppBar position="static" className="app-bar">
                <Toolbar>
                    <Link to={routes.listHumanCharacters}>Human</Link>
                    <Link to={routes.listAlienCharacters}>Alien</Link>
                    <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'right' }}>Rick & Morty</Typography>
                </Toolbar>
            </AppBar>
            {children}
        </Container>
    );
}