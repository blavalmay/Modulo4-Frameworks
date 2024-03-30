import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Container, Grid, Toolbar, Typography } from "@mui/material";
import { routes } from "@/core";
import { Cart } from "@/pods";
import { SelectedContext } from "@/core/providers";

interface Props extends React.PropsWithChildren {}

export const ListLayout: React.FC<Props> = (props) => {
    const { children } = props;
    const { selectedList } = React.useContext(SelectedContext);

    const currentHuman = location.pathname.includes('human') ? true : false;
    
    return (
        <Container>
            <AppBar position="sticky" className="app-bar">
                <Toolbar>
                    <Link className={currentHuman ? 'active' : null} to={routes.listHumanCharacters}>Human</Link>
                    <Link className={!currentHuman ? 'active' : null} to={routes.listAlienCharacters}>Alien</Link>
                    <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'right' }}>Rick & Morty</Typography>
                </Toolbar>
            </AppBar>
            <Typography variant="h4" sx={{ marginBottom: '20px'}}>{currentHuman ? 'Human images' : 'Alien images'}</Typography>
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