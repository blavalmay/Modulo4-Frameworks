import React from "react";
import { characterEntity } from "./list.vm";
import { Button, Card, CardActions, CardContent, CardMedia, Checkbox, Grid, Typography } from "@mui/material";

interface Props {
    list: characterEntity[];
}

interface PictureInfo {
    id: string;
    picUrl: string;
    title: string;
}

export const List: React.FC<Props> = (props) => {
    const { list } = props;
    
    return (
    <Grid container spacing={3}>
        {list.map((item) => {
            return (
                <Grid item xs={6} sm={4} md={3} key={item.name}>
                    <Card>
                        <CardMedia
                            sx={{ height: 250 }}
                            image={item.image}
                            title={item.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="body2">{item.id}</Typography>
                            <Typography gutterBottom variant="h5">{item.name}</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" ><Checkbox />Buy</Button>
                        </CardActions>
                    </Card>
                </Grid>
            );
        })}
    </Grid>
    );
};