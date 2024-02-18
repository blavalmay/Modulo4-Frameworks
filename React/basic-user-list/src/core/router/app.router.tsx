import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// en este caso hemos configurado que la @ es src, en el webpack config y en el ts config. Buscar "@"
import { ListScene, DetailScene } from "@/scenes";
import {switchRoutes} from "./routes";

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path={switchRoutes.root} element={<Navigate to={switchRoutes.list}/>} />
                <Route path={switchRoutes.list} element={<ListScene />} />
                <Route path={switchRoutes.detail} element={<DetailScene />} />
            </Routes>
        </Router>
    );
};