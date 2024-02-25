import { TextField, Button } from "@mui/material";
import React, { useState } from "react";

interface Props {
    searchBy: string;
    setSearchBy: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchList: React.FC<Props> = (props) => {
    const { searchBy, setSearchBy } = props;

    const [inputValue, setInputValue] = useState('Lemoncode');

    React.useEffect(() => {
        setInputValue(searchBy);
    }, [searchBy])

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearchBy(inputValue.toLowerCase());
    }

    return (
        <form onSubmit={handleSearch}>
            <TextField
                placeholder="Organización"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                size="small"
                margin="none"
            />
            <Button 
                type="submit" 
                variant="contained" 
            >
                Buscar
            </Button>
        </form>
    );
};