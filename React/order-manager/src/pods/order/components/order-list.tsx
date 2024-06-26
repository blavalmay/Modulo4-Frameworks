import React, { useEffect, useMemo } from "react"
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Checkbox, ButtonGroup, Button, TextField } from "@mui/material"
import { orderApi } from "@/core/api/api.model";

interface Props {
    list: orderApi[];
    state: boolean[];
    onStatusChange: (selectedItems: readonly number[], status: boolean) => void;
    onAmountChange: (newValue: string, id: number) => void;
}

const headCells: string[] = ['Estado', 'Descripción', 'Importe'];

export const OrderList: React.FC<Props> = (props) => {
    const [selected, setSelected] = React.useState<readonly number[]>([]);
    const [inputValue, setInputValue] = React.useState('');

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
          const newSelected = props.list.map((n) => n.id);
          setSelected(newSelected);
          return;
        }
        setSelected([]);
    };

    const handleClick = (id: number) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected: readonly number[] = [];
    
        if (selectedIndex === -1) {
          newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
          newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
          newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
          newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1),
          );
        }
        setSelected(newSelected);
    };

    const isSelected = (id: number) => selected.indexOf(id) !== -1;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    return (
        <>
        <ButtonGroup variant="outlined" sx={{marginBottom: '20px'}}>
            <Button onClick={() => {
                props.onStatusChange(selected, true)
                setSelected([])
            }}>Validar</Button>
            <Button onClick={() => {
                props.onStatusChange(selected, false)
                setSelected([])
            }}>Invalidar</Button>
        </ButtonGroup>
        <TableContainer component={Paper}>
            <Table className="order-table">
                <TableHead>
                    <TableRow>
                        <TableCell padding="checkbox">
                            <Checkbox
                                color="primary"
                                indeterminate={selected.length > 0 && selected.length < props.list.length}
                                checked={props.list.length > 0 && selected.length === props.list.length}
                                onChange={handleSelectAllClick}
                            />
                        </TableCell>
                        {headCells.map((cell) => <TableCell>{cell}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.list.map((row, index) => {
                        const isItemSelected = isSelected(row.id);
                        return (
                            <TableRow
                                key={`producto-${row.id}`}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                onClick={() => handleClick(row.id)}
                            >
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        color="primary"
                                        checked={isItemSelected}
                                    />
                                </TableCell>
                                <TableCell>{props.state[index] ? 'Válido' : 'Pendiente'}</TableCell>
                                <TableCell>{row.description}</TableCell>
                                <TableCell onClick={e => e.stopPropagation()}>
                                        <TextField
                                            type="number"
                                            variant="standard"
                                            size="small"
                                            defaultValue={row.amount}
                                            sx={{ width: '120px' }}
                                            onChange={handleChange}
                                        />
                                        €
                                        <Button
                                            size="small"
                                            sx={{marginLeft: '10px'}}
                                            onClick={() => props.onAmountChange(inputValue, row.id)}
                                        >
                                            Actualizar
                                        </Button>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    )
}