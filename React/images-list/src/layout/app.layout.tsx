import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Container, Grid, Toolbar, Typography } from "@mui/material";
import { routes } from "@/core";
import { Cart } from "@/pods";
import { SelectedContext } from "@/core/providers";

interface Props extends React.PropsWithChildren {}

export const AppLayout: React.FC<Props> = (props) => {
    const {children} = props;
    const { selectedList } = React.useContext(SelectedContext);
    
    return (
        <Container>
            <AppBar position="sticky" className="app-bar">
                <Toolbar>
                    <Link to={routes.listHumanCharacters}>Human</Link>
                    <Link to={routes.listAlienCharacters}>Alien</Link>
                    <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'right' }}>Rick & Morty</Typography>
                </Toolbar>
            </AppBar>
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    {children}
                </Grid>
                <Grid item xs={3}>
                    <Cart selected={selectedList}/>
                </Grid>
            </Grid>
        </Container>
    );
}