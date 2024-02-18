import React from "react";
import { ProfileContext } from "@/core";
import { Avatar, CardHeader, Container } from "@mui/material";
import { blue, red } from "@mui/material/colors";

interface Props extends React.PropsWithChildren {}

export const AppLayout: React.FC<Props> = (props) => {
    const {children} = props;
    const { userProfile } = React.useContext(ProfileContext);
    return (
        <Container>
            <CardHeader 
                title={userProfile.username}
                sx={{ bgcolor: blue[500], color: 'white', mb: 3, textAlign: 'right' }}
            />
            {children}
        </Container>
    );
}