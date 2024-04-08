import React from "react";
import { Card, CardContent, Typography, Button, Grid, TextField, Slider, Box } from "@mui/material";

export const OrderHeader = () => {
    return (
        <>
        <Card sx={{marginBottom: '10px'}} className="order-header">
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item>
                        <TextField label="Número" variant="outlined" type="number" size="small" />
                    </Grid>
                    <Grid item>
                        <TextField label="Proveedor" variant="outlined" size="small" />
                    </Grid>
                    <Grid item>
                        <TextField label="Fecha" variant="outlined" size="small" />
                    </Grid>
                    <Grid item sx={{pointerEvents: 'none'}}>
                        <TextField label="Importe total" variant="outlined" size="small" value="8658" aria-readonly/>
                    </Grid>
                    <Grid item className="order-header__status">
                        <Typography><span>Estado</span><span>30%</span></Typography>
                        <Slider value={30} />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
        <Box sx={{marginBottom: '20px', textAlign: 'right'}}>
            <Button variant="contained">Enviar</Button>
        </Box>
        </>
    );
}