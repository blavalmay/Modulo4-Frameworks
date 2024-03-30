import React from "react";
import { PictureInfo } from "../list/list.vm";
import { List, ListItem, IconButton, ListItemAvatar, Avatar, ListItemText, Tooltip, Divider, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { SelectedContext } from "@/core/providers";

interface Props {
    selected: PictureInfo[];
}

export const Cart: React.FC<Props> = (props) => {
    const { selected } = props;
    const { removeSelectedItem, removeAllItems } = React.useContext(SelectedContext);

    return (
        <List sx={{ width: '100%', backgroundColor: 'white' }}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <ShoppingCartIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="Cart"
                    secondary={`Items: ${selected.length}`}
                />
                {selected.length ?
                    <Tooltip title="Delete all images" placement="top" arrow>
                        <IconButton edge="end" onClick={removeAllItems}>
                            <DeleteIcon color="primary"/>
                        </IconButton>
                    </Tooltip>
                : null }
            </ListItem>
            {selected.length ? <Divider /> : null }
            {selected.map((item) => {
                return (
                    <ListItem
                        key={item.id}
                        secondaryAction={
                        <Tooltip title="Delete image" placement="top" arrow>
                            <IconButton edge="end" aria-label="comments" onClick={
                                () => {
                                    item.selected = false;
                                    removeSelectedItem(item);
                                }
                                }>
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                        }
                    >
                        <ListItemAvatar>
                            <Avatar src={item.image}/>
                        </ListItemAvatar>
                        <ListItemText
                            primary={item.name}
                        />
                    </ListItem>
                );
            })}
        </List>
    )
}