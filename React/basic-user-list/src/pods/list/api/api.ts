import { characterApi, memberApi } from "./api.model";

export const getMembers = (org: string = 'lemoncode'):Promise<memberApi[]> => {
    return (
        fetch(`https://api.github.com/orgs/${org}/members`)
        .then((response) => response.json())
    )
}

export const getCharacters = ():Promise<characterApi> => {
    return (
        fetch(`https://rickandmortyapi.com/api/character`)
        .then((response) => response.json())
    )
}