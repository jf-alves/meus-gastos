import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import { Container } from './styles';

const Dashboard: React.FC = () => {
    
    const options = [
        {value: 'Jackson', label: 'Jackson'},
        {value: 'Debora', label: 'Debora'},
        {value: 'Pedro', label: 'Pedro'}
    ]

    return(
        <Container>
            <ContentHeader title="Dashboard" lineColor="#FFF">
                <SelectInput options={options}/>
            </ContentHeader>

        </Container>
    );
}

export default Dashboard;