import React from "react";


import { Container, ToggleLabel, ToggleSelector } from "./styles";

const Toggle: React.FC = () => (
    
    <Container>
        <ToggleLabel>Ligth</ToggleLabel>
        <ToggleSelector
           
           // marcação dentro do switch
           uncheckedIcon={false}
           checkedIcon={false} 
           checked
           onChange={() => console.log('rever')}           
        />

        <ToggleLabel>Dark</ToggleLabel>
    </Container>
)

export default Toggle;