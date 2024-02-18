import { memberApi } from "./api.model";

export const getMembers = ():Promise<memberApi[]> => {
    return (
        fetch("https://api.github.com/orgs/lemoncode/members")
        .then((response) => response.json())
    )
}