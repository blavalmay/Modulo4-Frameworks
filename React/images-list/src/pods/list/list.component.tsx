import React, { useCallback, useEffect, useState } from "react";
import { PictureInfo } from "./list.vm";
import { Button, Card, CardActions, CardContent, CardMedia, Checkbox, Grid, Typography } from "@mui/material";
import { SelectedContext, SelectedProvider } from "@/core/providers";

interface Props {
    list: PictureInfo[];
}

export const List: React.FC<Props> = (props) => {
    const { list } = props;
    const { selectedList, addSelectedItem, removeSelectedItem } = React.useContext(SelectedContext);
    
    const handleSelectedCheckbox = useCallback((item: PictureInfo) => {
        const selectedItem = selectedList.filter((selectedItem) => selectedItem.id === item.id);
        return selectedItem[0]?.selected ?? false;
    }, [selectedList]);

    return (
        <SelectedProvider>
            <Grid container spacing={3}>
                {list.map((item) => {
                    const selected = handleSelectedCheckbox(item);
                    return (
                        <Grid item xs={6} sm={4} md={3} key={item.id}>
                            <Card>
                                <CardMedia
                                    sx={{ height: 180 }}
                                    image={item.image}
                                    title={item.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6">{item.name}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" >
                                        <Checkbox 
                                            checked={selected}
                                            onChange={
                                                (e) => {
                                                    if(e.target.checked) {
                                                        item.selected = true;
                                                        addSelectedItem(item);
                                                    }else{
                                                        item.selected = false;
                                                        removeSelectedItem(item);
                                                    }
                                                }
                                            }
                                        />
                                        Buy
                                        </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </SelectedProvider>
    );
};