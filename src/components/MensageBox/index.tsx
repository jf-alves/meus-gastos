import React from "react";

import { Container} from "./style";

interface IMesageBoxProps {
    title: string;
    description: string;
    footerText: string;
    icon: string;
}

const MensageBox: React.FC<IMesageBoxProps> = ({
    title,
    description,
    footerText,
    icon,
}) => (
    <Container>
        <header>
            <h1>
                 {title}<img src={icon} alt={title}/>
            </h1>
            <p>{description}</p>
        </header>
            
       <footer>
            <span>{footerText}</span>
        </footer>
    </Container>
    );

export default MensageBox;