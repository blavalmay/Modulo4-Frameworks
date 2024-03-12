import React, { useState } from "react";
import { PictureInfo } from "./list.vm";
import { List } from "./list.component";
import { getCharacters } from "./api/api";
import { mapCharactersToVM } from "./list.mappers";
import { Alert } from "@mui/material";

export const ListHumanCharactersContainer: React.FC = () => {
    const [list, setList] = React.useState<PictureInfo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    React.useEffect(() => {
        getCharacters()
        .then(data => {
            console.log(data.results);
            mapCharactersToVM(data.results);
            setList(data.results.filter((result) => result.species === 'Human'));
            setLoading(false);
        })
        .catch(error => {
            console.log(error);
            setError(error);
            setLoading(false);
        })
    }, []);

    if (loading) return  <Alert severity="info">Loading...</Alert>;
    if (error) return <Alert severity="error">Human not found!</Alert>;

    return (
        <List list={list} />
    );
};