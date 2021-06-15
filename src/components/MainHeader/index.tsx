import React from "react";

import { Container, Profile, Welcome, UserName } from "./styles";

const MainHeader: React.FC = () =>{
    return(
        <Container>
            <h1>Toogle</h1>

            <Profile>
                <Welcome>Olá</Welcome>
                <UserName>Jackson Alves</UserName>
            </Profile>
        </Container>
    );
}

export default MainHeader;