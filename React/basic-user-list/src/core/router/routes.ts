import { generatePath } from "react-router-dom";

interface SwitchRoutes {
    root: string;
    list: string;
    detail: string;
}

export const switchRoutes: SwitchRoutes = {
    root: "/",
    list: "/list",
    detail: "/detail/:id",
};

// al tener la ruta de detail un id, vamos a encapsularlo para usarlo de forma mas sencilla en la app
interface Routes extends Omit<SwitchRoutes, "detail"> {
    detail: (id: string) => string;
}

// el generatePath se usa para que nos cree una url segura sin espacios ni caracteres raros, concatenando elementos
export const routes: Routes = {
    ...switchRoutes,
    detail: (id: string) => generatePath(switchRoutes.detail, {id}),
}