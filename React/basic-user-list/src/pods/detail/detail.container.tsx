import React from "react";
import { Link, useParams } from "react-router-dom";
import { MemberDetailEntity, createDefaultMemberDetail } from "./detail.vm";
import { Detail } from "./detail.component";
import { routes } from "@/core";

export const DetailContainer: React.FC = () => {
    // para traerte los parámetros de la url
    const { id } = useParams<{ id: string }>();

    const [member, setMember] = React.useState<MemberDetailEntity>(
        createDefaultMemberDetail()
    );
    React.useEffect(() => {
        fetch(`https://api.github.com/users/${id}`)
          .then((response) => response.json())
          .then((json) => setMember(json))
    }, []);

    return (
        <>
            <Detail member={member}/>
            <Link to={routes.list}>Lista de usuarios</Link>
        </>
    );
};