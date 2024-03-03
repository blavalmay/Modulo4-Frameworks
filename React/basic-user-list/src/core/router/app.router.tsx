import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { DetailMemberScene, ListCharactersScene, ListMembersScene } from "@/scenes";
import {switchRoutes} from "./routes";
import { DetailCharacterScene } from "@/scenes/detail-character.scene";

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path={switchRoutes.root} element={<Navigate to={switchRoutes.listMembers}/>} />
                <Route path={switchRoutes.listMembers} element={<ListMembersScene />} />
                <Route path={switchRoutes.detailMembers} element={<DetailMemberScene />} />
                <Route path={switchRoutes.listCharacters} element={<ListCharactersScene />} />
                <Route path={switchRoutes.detailCharacters} element={<DetailCharacterScene />} />
            </Routes>
        </Router>
    );
};