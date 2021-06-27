import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import { Container, Content } from './style';

const List: React.FC = () => {

    const options = [
        {value: 'Fatima', label: 'Fatima'},
        {value: 'Jurandir', label: 'Jurandir'},
        {value: 'Kaylane', label: 'Kaylane'}
    ];

    return(
        <Container>
            <ContentHeader title="Saidas" lineColor="#E44C4E">
                <SelectInput options={options}/>
            </ContentHeader>

            <Content>
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz "
                    subtitle=" 24/06/2020"
                    amount="R$ 243,00"
                />
            </Content>

            <Content>
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz "
                    subtitle=" 24/06/2020"
                    amount="R$ 243,00"
                />
            </Content>

            <Content>
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz "
                    subtitle=" 24/06/2020"
                    amount="R$ 243,00"
                />
            </Content>

            <Content>
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz "
                    subtitle=" 24/06/2020"
                    amount="R$ 243,00"
                />
            </Content>

            <Content>
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz "
                    subtitle=" 24/06/2020"
                    amount="R$ 243,00"
                />
            </Content>
            
            <Content>
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz "
                    subtitle=" 24/06/2020"
                    amount="R$ 243,00"
                />
            </Content>

            <Content>
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz "
                    subtitle=" 24/06/2020"
                    amount="R$ 243,00"
                />
            </Content>

            <Content>
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz "
                    subtitle=" 24/06/2020"
                    amount="R$ 243,00"
                />
            </Content>

            <Content>
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz "
                    subtitle=" 24/06/2020"
                    amount="R$ 243,00"
                />
            </Content>

            <Content>
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz "
                    subtitle=" 24/06/2020"
                    amount="R$ 243,00"
                />
            </Content>

            <Content>
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz "
                    subtitle=" 24/06/2020"
                    amount="R$ 243,00"
                />
            </Content>

            <Content>
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz "
                    subtitle=" 24/06/2020"
                    amount="R$ 243,00"
                />
            </Content>
        </Container>
    );
}

export default List;