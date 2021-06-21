import React from "react";

import { Container, TitleContainer, Controllers } from './style';
import SelectInput from "../../components/SelectInput";

const ContentHeader: React.FC = () => {

    const options = [
        {value: 'Jackson', label: 'Jackson'},
        {value: 'Debora', label: 'Debora'},
        {value: 'Pedro', labe: 'Pedro'}
    ]

    return (
        <Container>
            <TitleContainer>
                <h1>Titulo</h1>    
            </TitleContainer>
            <Controllers>
                <SelectInput options={options}/>
                <SelectInput options={options}/>
                <SelectInput options={options}/>
            </Controllers>
        </Container>
    );
}

export default ContentHeader;