import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import {routes} from "./routes";
import { ListAlienCharactersScene, ListHumanCharactersScene } from "@/scenes";

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path={routes.root} element={<Navigate to={routes.listHumanCharacters}/>} />
                <Route path={routes.listHumanCharacters} element={<ListHumanCharactersScene />} />
                <Route path={routes.listAlienCharacters} element={<ListAlienCharactersScene />} />
            </Routes>
        </Router>
    );
};