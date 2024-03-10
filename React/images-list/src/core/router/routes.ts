import { generatePath } from "react-router-dom";

export interface Routes {
    root: string;
    listHumanCharacters: string;
    listAlienCharacters: string;
}

export const routes: Routes = {
    root: "/",
    listHumanCharacters: "/list-human",
    listAlienCharacters: "/list-alien",
};