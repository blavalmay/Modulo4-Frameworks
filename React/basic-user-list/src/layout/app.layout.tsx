import React from "react";
import { Link } from "react-router-dom";
import { ProfileContext } from "@/core";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { routes } from "@/core";

interface Props extends React.PropsWithChildren {}

export const AppLayout: React.FC<Props> = (props) => {
    const {children} = props;
    const { userProfile } = React.useContext(ProfileContext);
    return (
        <Container>
            <AppBar position="static" className="app-bar">
                <Toolbar>
                    <Link to={routes.listMembers}>Organizaciones</Link>
                    <Link to={routes.listCharacters}>Personajes</Link>
                    <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'right' }}>{userProfile.username}</Typography>
                </Toolbar>
            </AppBar>
            {children}
        </Container>
    );
}