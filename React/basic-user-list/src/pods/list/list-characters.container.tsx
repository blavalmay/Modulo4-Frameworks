import React, { useState } from "react";
import { Column, characterEntity } from "./list.vm";
import { List } from "./list.component";
import { getCharacters } from "./api/api";
import { mapCharactersToVM } from "./list.mappers";
import { Alert } from "@mui/material";
import { ListInputSearch } from "./components";
import { routes } from "@/core";

export const ListCharactersContainer: React.FC = () => {
    const [list, setList] = React.useState<characterEntity[]>([]);
    const [searchItem, setSearchItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const detailRoute = routes.detailCharacters;

    const columns: Column[] = [
        { id: 'id', label: 'ID', minWidth: 100 },
        { id: 'name', label: 'Name', minWidth: 150 },
        { id: 'action', label: 'Acción', minWidth: 100, linkId: 'id' },
    ]

    const setSearchBy = (data: string) => {
        setSearchItem(data)
    }

    React.useEffect(() => {
        getCharacters()
        .then(data => {
            mapCharactersToVM(data.results);
            setList(searchItem ? data.results.filter((result) => result.name.toLowerCase().includes(searchItem.toLowerCase())) : data.results);
            setLoading(false);
        })
        .catch(error => {
            console.log(error);
            setError(error);
            setLoading(false);
        })
    }, [searchItem]);

    if (loading) return  <Alert severity="info">Loading...</Alert>;
    if (error) return <Alert severity="error">Character not found!</Alert>;

    return (
        <>
            <ListInputSearch setSearchBy={setSearchBy} />
            <List columns={columns} list={list} detailRoute={detailRoute}/>
        </>
    );
};