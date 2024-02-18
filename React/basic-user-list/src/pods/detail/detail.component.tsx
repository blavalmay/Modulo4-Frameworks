import React from "react";
import { MemberDetailEntity } from "./detail.vm";
import { Card, CardContent, CardMedia, List, ListItem, Typography } from "@mui/material";

interface Props {
    member: MemberDetailEntity;
}

export const Detail: React.FC<Props> = (props) => {
    const {member} = props;
    console.log(member);
    return (
        <Card sx={{ maxWidth: 345, mb: 3 }}>
            <CardMedia
                sx={{ height: 300 }}
                image={member.avatar_url}
                title={member.login}
            />
            <CardContent>
                <Typography gutterBottom variant="h3">
                {member.login}
                </Typography>
                <List>
                    <ListItem>id: {member.id}</ListItem>
                    <ListItem>name: {member.name}</ListItem>
                    <ListItem>company: {member.company}</ListItem>
                    <ListItem>bio: {member.bio}</ListItem>
                </List>
            </CardContent>
        </Card>
    );
};