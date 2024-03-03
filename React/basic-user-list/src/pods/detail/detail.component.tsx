import React from "react";
import { CharacterDetailEntity, MemberDetailEntity } from "./detail.vm";
import { Card, CardContent, CardMedia, List, ListItem, Typography } from "@mui/material";

interface Props {
    item: MemberDetailEntity | CharacterDetailEntity;
    details: string[];
}

export const Detail: React.FC<Props> = (props) => {
    const {item, details} = props;
    return (
        <Card sx={{ maxWidth: 345, mb: 3 }}>
            <CardMedia
                sx={{ height: 300 }}
                image={item[details[0]]}
                title={item.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h3">
                {item.name}
                </Typography>
                <List>
                    {details.slice(1).map((detail: string) => <ListItem>{detail}: {item[detail]}</ListItem>)}
                </List>
            </CardContent>
        </Card>
    );
};