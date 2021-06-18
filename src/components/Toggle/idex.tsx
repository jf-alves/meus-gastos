import React from "react";

import Toggle from "react-switch";

import { Container, ToggleLabel } from "./styles";

const Toggle: React.FC = () => (
    
    <Container>
        <ToggleLabel>Ligth</ToggleLabel>
        <Toggle
            checked
            onChange = {() => console}
        />

        <ToggleLabel>Dark</ToggleLabel>
    </Container>
)

export default Toggle;