import React, { useState } from "react";
import { memberEntity } from "./list.vm";
import { List } from "./list.component";
import { getMembers } from "./api/api";
import { mapMembersToVM } from "./list.mappers";
import { Alert } from "@mui/material";
import { SearchList } from "./component";
import { useLocalStorage } from "@uidotdev/usehooks";

export const ListContainer: React.FC = () => {
    const [list, setList] = React.useState<memberEntity[]>([]);
    const [searchItem, setSearchItem] = useLocalStorage('org', 'lemoncode');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
    if (error) return <Alert severity="error">User not found! Please, reload the page.</Alert>;

    return (
        <>
            <SearchList searchBy={searchItem} setSearchBy={setSearchBy} />
            <List list={list}/>
        </>
    );
};