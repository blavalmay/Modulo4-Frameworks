import React from "react";
import { ListHumanCharactersContainer } from '@/pods';
import { ListLayout } from "@/layout";

export const ListHumanCharactersScene: React.FC = () => {
    
    return (
        <ListLayout>
            <ListHumanCharactersContainer />
        </ListLayout>
    );
};