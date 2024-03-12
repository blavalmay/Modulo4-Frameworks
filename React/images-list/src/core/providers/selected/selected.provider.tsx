import { PictureInfo } from "@/pods/list/list.vm";
import React from "react";

interface SelectedContextModel {
    selectedList: PictureInfo[];
    updateSelectedList: (list: PictureInfo[]) => void;
}

export const SelectedContext = React.createContext<SelectedContextModel>({
    selectedList: [],
    updateSelectedList: () => {},
});

export const SelectedProvider: React.FC<React.PropsWithChildren> = (props) => {
    const {children} = props;
    const [selectedList, setSelectedList] = React.useState<PictureInfo[]>([]);

    const updateSelectedList = (list: PictureInfo[]) => {
        setSelectedList(list)
    };

    return (
        <SelectedContext.Provider value={{selectedList, updateSelectedList}}>
            {children}
        </SelectedContext.Provider>
    )
}