import React from "react";
import { Link, useParams } from "react-router-dom";
import { MemberDetailEntity, createDefaultMemberDetail, memberDetails } from "./detail.vm";
import { Detail } from "./detail.component";
import { routes } from "@/core";

export const DetailMemberContainer: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [member, setMember] = React.useState<MemberDetailEntity>(
        createDefaultMemberDetail()
    );
    const handleDetails = memberDetails;

    React.useEffect(() => {
        fetch(`https://api.github.com/users/${id}`)
          .then((response) => response.json())
          .then((json) => setMember(json))
    }, []);

    return (
        <>
            <Detail item={member} details={handleDetails}/>
            <Link to={routes.listMembers}>Lista de usuarios</Link>
        </>
    );
};