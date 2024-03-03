import { TextField } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import debounce from 'lodash.debounce';

interface Props {
    setSearchBy: React.Dispatch<React.SetStateAction<string>>;
}

export const ListInputSearch: React.FC<Props> = (props) => {
    const { setSearchBy } = props;

    const handleSearch = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSearchBy((event.target as HTMLInputElement).value);
    }

    const debouncedResults = useMemo(() => {
        return debounce(handleSearch, 300);
    }, []);
    
    useEffect(() => {
        return () => {
          debouncedResults.cancel();
        };
    });

    return (
        <form className="list-search">
            <TextField
                placeholder="Buscar"
                onChange={debouncedResults}
                size="small"
                margin="none"
            />
        </form>
    );
};