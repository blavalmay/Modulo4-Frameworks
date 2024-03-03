import React from "react";
import { Link, useParams } from "react-router-dom";
import { CharacterDetailEntity, characterDetails, createDefaultCharacterDetail } from "./detail.vm";
import { Detail } from "./detail.component";
import { routes } from "@/core";

export const DetailCharacterContainer: React.FC = () => {
    // para traerte los parámetros de la url
    const { id } = useParams<{ id: string }>();
    const [character, setCharacter] = React.useState<CharacterDetailEntity>(
        createDefaultCharacterDetail()
    );
    const handleDetails = characterDetails;

    React.useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
          .then((response) => response.json())
          .then((json) => setCharacter(json))
    }, []);

    return (
        <>
            <Detail item={character} details={handleDetails}/>
            <Link to={routes.listCharacters}>Lista de personajes</Link>
        </>
    );
};