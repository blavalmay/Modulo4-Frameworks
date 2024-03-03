import React, { useState } from "react";
import { Column, memberEntity } from "./list.vm";
import { List } from "./list.component";
import { getMembers } from "./api/api";
import { mapMembersToVM } from "./list.mappers";
import { Alert } from "@mui/material";
import { ListSubmitSearch } from "./components";
import { useLocalStorage } from "@uidotdev/usehooks";
import { routes } from "@/core";

export const ListMembersContainer: React.FC = () => {
    const [list, setList] = React.useState<memberEntity[]>([]);
    const [searchItem, setSearchItem] = useLocalStorage('org', 'lemoncode');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const detailRoute = routes.detailMembers;

    const columns: Column[] = [
        { id: 'id', label: 'ID', minWidth: 100 },
        { id: 'login', label: 'Name', minWidth: 150 },
        { id: 'action', label: 'Acción', minWidth: 100, linkId: 'login' },
    ]

    const setSearchBy = (data: string) => {
        setSearchItem(data)
    }

    React.useEffect(() => {
        getMembers(searchItem)
        .then(data => {
            mapMembersToVM(data);
            setList(data);
            setLoading(false);
        })
        .catch(error => {
            setError(error);
            setLoading(false);
        })
    }, [searchItem, location]);

    if (loading) return  <Alert severity="info">Loading...</Alert>;
    if (error) return <Alert severity="error">User not found!</Alert>;

    return (
        <>
            <ListSubmitSearch searchBy={searchItem} setSearchBy={setSearchBy} />
            <List columns={columns} list={list} detailRoute={detailRoute}/>
        </>
    );
};