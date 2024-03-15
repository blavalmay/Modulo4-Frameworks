import React from "react";
import { PictureInfo } from "../list/list.vm";
import { List, ListItem, IconButton, ListItemAvatar, Avatar, ListItemText, ListSubheader } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { SelectedContext } from "@/core/providers";

interface Props {
    selected: PictureInfo[];
}

export const Cart: React.FC<Props> = (props) => {
    const { selected } = props;
    const { removeSelectedItem } = React.useContext(SelectedContext);

    return (
        <List 
            sx={{ width: '100%', backgroundColor: 'white' }}
            subheader={
                <ListSubheader component="div" id="cart-subheader">
                  Cart
                </ListSubheader>
              }
        >
            {selected.map((item) => {
                return (
                    <ListItem
                        key={item.id}
                        secondaryAction={
                        <IconButton edge="end" aria-label="comments" onClick={
                            () => {
                                item.selected = false;
                                removeSelectedItem(item);
                            }
                            }>
                            <DeleteIcon />
                        </IconButton>
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