import React from "react";
import { AppRouter, ProfileProvider } from '@/core';

export const App = () => {
    return (
        <ProfileProvider>
            <AppRouter />
        </ProfileProvider>
    );
};