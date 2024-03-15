import { PictureInfo } from "@/pods/list/list.vm";
import React from "react";

interface SelectedContextModel {
    selectedList: PictureInfo[];
    addSelectedItem: (listItem: PictureInfo) => void;
    removeSelectedItem: (listItem: PictureInfo) => void;
}

export const SelectedContext = React.createContext<SelectedContextModel>({
    selectedList: [],
    addSelectedItem: () => {},
    removeSelectedItem: () => {},
});

export const SelectedProvider: React.FC<React.PropsWithChildren> = (props) => {
    const {children} = props;
    const [selectedList, setSelectedList] = React.useState<PictureInfo[]>([]);

    const addSelectedItem = (listItem: PictureInfo) => {
        setSelectedList([
            ...selectedList,
            listItem
        ])
    };

    const removeSelectedItem = (listItem: PictureInfo) => {
        setSelectedList(
            selectedList.filter(item => item.id !== listItem.id)
        )
    };

    return (
        <SelectedContext.Provider value={{selectedList, addSelectedItem, removeSelectedItem}}>
            {children}
        </SelectedContext.Provider>
    )
}