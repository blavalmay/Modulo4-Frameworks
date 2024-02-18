import React from "react";
import { memberEntity } from "./list.vm";
import { List } from "./list.component";
import { getMembers } from "./api/api";
import { mapMembersToVM } from "./list.mappers";

export const ListContainer: React.FC = () => {
    const [list, setList] = React.useState<memberEntity[]>([]);
    React.useEffect(() => {
        getMembers().then(mapMembersToVM).then(setList);
    }, []);
    
    return (
        <List list={list}/>
    );
};