import React from "react";
import { Card, CardContent, Typography, Button, Grid, TextField, Slider, Box } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { orderApiInfo } from "@/core/api/api.model";
import dayjs from "dayjs";

interface Props {
    orderInfo: orderApiInfo;
    totalAmount: number;
    progressValue: number;
    sendOrder: () => void;
}

export const OrderHeader: React.FC<Props> = (props) => {
    const today = dayjs();

    return (
        <>
        <Card sx={{marginBottom: '10px'}} className="order-header">
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item>
                        <TextField label="Número" variant="outlined" type="number" size="small" defaultValue={props.orderInfo.number} />
                    </Grid>
                    <Grid item>
                        <TextField label="Proveedor" variant="outlined" size="small" defaultValue={props.orderInfo.provider}/>
                    </Grid>
                    <Grid item className="order-header__date">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker defaultValue={today}/>
                        </LocalizationProvider>
                    </Grid>
                    <Grid item className="order-header__amount">
                        <TextField label="Importe total" variant="outlined" size="small" value={`${props.totalAmount} €`} aria-readonly/>
                    </Grid>
                    <Grid item className="order-header__status">
                        <Typography><span>Estado</span><span>{`${props.progressValue}%`}</span></Typography>
                        <Slider value={props.progressValue} />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
        <Box sx={{marginBottom: '20px', textAlign: 'right'}}>
            <Button 
                variant="contained" 
                disabled={!!(props.progressValue < 100)}
                onClick={props.sendOrder}
            >
                Enviar
            </Button>
        </Box>
        </>
    );
}