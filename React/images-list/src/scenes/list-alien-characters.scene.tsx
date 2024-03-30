import React from "react";
import { ListAlienCharactersContainer } from '@/pods';
import { ListLayout } from "@/layout";

export const ListAlienCharactersScene: React.FC = () => {
    
    return (
        <ListLayout>
            <ListAlienCharactersContainer />
        </ListLayout>
    );
};