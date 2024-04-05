import React from "react"
import { orderList } from "@/core"
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"

export const OrderList = () => {
    return (
        <TableContainer component={Paper}>
            <Table className="order-table" aria-label="order table">
                <TableHead>
                    <TableRow>
                        <TableCell>Estado</TableCell>
                        <TableCell>Descripción</TableCell>
                        <TableCell>Importe</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orderList.map((row) => (
                        <TableRow
                            key={`producto-${row.id}`}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{row.validated ? 'Válido' : 'Pendiente'}</TableCell>
                            <TableCell>{row.description}</TableCell>
                            <TableCell>{`${row.amount} €`}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}