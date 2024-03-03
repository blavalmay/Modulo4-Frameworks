import { generatePath } from "react-router-dom";

export interface SwitchRoutes {
    root: string;
    listMembers: string;
    detailMembers: string;
    listCharacters: string;
    detailCharacters: string;
}

export const switchRoutes: SwitchRoutes = {
    root: "/",
    listMembers: "/list-orgs",
    detailMembers: "/detail-orgs/:id",
    listCharacters: "/list-rick-morty",
    detailCharacters: "/list-rick-morty/:id",
};

// al tener la ruta de detail un id, vamos a encapsularlo para usarlo de forma mas sencilla en la app
interface Routes extends Omit<SwitchRoutes, "detailMembers" | "detailCharacters"> {
    detailMembers: (id: string) => string;
    detailCharacters: (id: string) => string;
}

// el generatePath se usa para que nos cree una url segura sin espacios ni caracteres raros, concatenando elementos
export const routes: Routes = {
    ...switchRoutes,
    detailMembers: (id: string) => generatePath(switchRoutes.detailMembers, {id}),
    detailCharacters: (id: string) => generatePath(switchRoutes.detailCharacters, {id}),
}