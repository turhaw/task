import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserByID } from "../api/fakeApi";
import Card from "../components/Card";
import styled from "styled-components";


type User = {
    id: number,
    name: string,
    age: number
}


const DetailsContainer = styled.div`
    display: flex;
    justify-content: center;
`;


const UserDetails = () => {

    const { id } = useParams();
    const [user, setUser] = useState<User>()

    useEffect(() => {
       let user =  getUserByID(id);
       setUser(user)
       debugger
    }, [])

    return (
        <DetailsContainer>
        <Card user={user}/>
        </DetailsContainer>
    )
}

export default UserDetails;