import React from "react";
import { orderApiInfo } from "@/core/api/api.model";
import CheckIcon from '@mui/icons-material/Check';
import { Alert, List, ListItem, ListItemText, Modal, Paper, Typography } from "@mui/material";

interface Props {
    orderInfo: orderApiInfo;
    totalAmount: number;
    openModal: boolean;
}

export const OrderSummary: React.FC<Props> = (props) => {

    return (
        <Modal open={props.openModal}>
            <Paper className="order-modal">
                <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                    ¡Pedido enviado con éxito!
                </Alert>
                <Typography variant="h5">Resumen:</Typography>
                <List dense>
                    <ListItem>
                        <ListItemText
                            primary="NÚMERO"
                            secondary={props.orderInfo.number}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="PROVEEDOR"
                            secondary={props.orderInfo.provider}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="IMPORTE TOTAL"
                            secondary={props.totalAmount}
                        />
                    </ListItem>
                </List>
            </Paper>
        </Modal>
    );
}