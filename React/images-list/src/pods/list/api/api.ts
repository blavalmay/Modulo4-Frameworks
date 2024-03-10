import { characterApi } from "./api.model";

export const getCharacters = ():Promise<characterApi> => {
    return (
        fetch(`https://rickandmortyapi.com/api/character`)
        .then((response) => response.json())
    )
}