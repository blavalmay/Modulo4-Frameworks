import { memberApi } from "./api.model";

export const getMembers = (org: string = 'lemoncode'):Promise<memberApi[]> => {
    return (
        fetch(`https://api.github.com/orgs/${org}/members`)
        .then((response) => response.json())
    )
}