import React from "react";
import { Link } from "react-router-dom";
import { routes } from "@/core";
import { Column, memberEntity } from "./list.vm";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TablePagination, Button } from "@mui/material";

interface Props {
    list: memberEntity[];
}

const columns: Column[] = [
    { id: 'id', label: 'ID', minWidth: 100 },
    { id: 'login', label: 'Name', minWidth: 150 },
    { id: 'action', label: 'Acción', minWidth: 100 },
]

export const List: React.FC<Props> = (props) => {
    const { list } = props;

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
        <TableContainer sx={{ maxHeight: 440 }}>
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
                                        ? <Link to={routes.detail(row['login'])}>Ver más</Link>
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