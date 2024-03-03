import React from "react";
import { Link } from "react-router-dom";
import { routes } from "@/core";
import { Column, characterEntity, memberEntity } from "./list.vm";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TablePagination, Button } from "@mui/material";
import { SwitchRoutes } from "@/core/router/routes";

interface Props {
    list: memberEntity[] | characterEntity[];
    columns: Column[];
    detailRoute: Function;
}

export const List: React.FC<Props> = (props) => {
    const { list, columns, detailRoute } = props;

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    
    return (
    <>
        <TableContainer>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                    {columns.map((column) => (
                        <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                        >
                        {column.label}
                        </TableCell>
                    ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                        return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                            {columns.map((column) => {
                                const value = row[column.id];
                                return (
                                    <TableCell key={column.id} align={column.align}>
                                    {column.id === 'action'
                                        ? <Link to={column.linkId ? detailRoute(row[column.linkId]) : ''}>Ver más</Link>
                                        : value}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={list.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    </>
    );
};