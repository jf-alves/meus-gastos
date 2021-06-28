import React, { useMemo, useState, useEffect  } from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import { Container, Content, Filters } from './style';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';

interface IRouteParams {
    match: {
        params: {
            type: string;
        }
    }
}

interface IData {
    id: string;
    description: string;
    amountFormatted: string;
    frequency: string;
    dataFormatted: string;
    tagColor: string; 
}

const List: React.FC<IRouteParams> = ({ match }) => {

    const[data, setData] = useState<IData[]>([]);
    
    const { type } = match.params;

    const title = useMemo(() =>{
        return type === 'entry-balance' ? 'Entradas' : 'Saidas'
        
    },[type]);

    const lineColor = useMemo(() =>{
        return type === 'entry-balance' ? '#F7931B' : '#E44C4E'
        
    },[type]);

    const listData = useMemo (() =>{
        return type === 'entry-balance' ? gains : expenses;
    },[]);

    const months = [
        {value: 1, label: 'Janeiro'},
        {value: 2, label: 'Fevereiro'},
        {value: 3, label: 'Março'},
        {value: 4, label: 'Abril'},
        {value: 5, label: 'Maio'},
        {value: 6, label: 'Junho'},
        {value: 7, label: 'Julho'},
        {value: 8, label: 'Agosto'},
        {value: 9, label: 'Setembro'},
        {value: 10, label: 'Outubro'},
        {value: 11, label: 'Novembro'},
        {value: 12, label: 'Dezembro'}
    ];

    const years = [
        {value: 2021, label: 2021},
        {value: 2022, label: 2022 }  
    ];

    useEffect (() => {

        const response = listData.map(item => {
            return {
                id: String( Math.random() * data.length),
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dataFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E'
            }
        })

        setData(response);

    }, []);

    return(
        <Container>
            <ContentHeader title={title} lineColor= {lineColor}>
                <SelectInput options={years}/>
                <SelectInput options={months}/>
            </ContentHeader>

            <Filters>
                <button type="button" className="tag-filter tag-filter-recurrent">
                    Recorrentes
                </button>

                <button type="button" className="tag-filter tag-filter-eventual">
                    Eventuais
                </button>
            </Filters>

            <Content>
                {
                    data.map(item =>(
                        <HistoryFinanceCard
                        key={item.id}
                        tagColor={item.tagColor}
                        title={item.description}
                        subtitle={item.dataFormatted}
                        amount={item.amountFormatted}
                        />
                    ))
                }
            </Content>
        </Container>
    );
}

export default List;