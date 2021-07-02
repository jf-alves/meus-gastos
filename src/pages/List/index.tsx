import React, { useMemo, useState, useEffect  } from 'react';
import { uuid as uuid_v4} from 'uuidv4';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import { Container, Content, Filters } from './style';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';
import listOfMonths from '../../utils/months';

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
    dateFormatted: string;
    tagColor: string; 
}

const List: React.FC<IRouteParams> = ({ match }) => {

    const [data, setData] = useState<IData[]>([])
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
    const [frequencyFilterSelected, setFrequencyFilterSelected] = useState (['recorrente', 'eventual']);
    
    const movimentType = match.params.type;

    const pageData = useMemo(() => {
        return movimentType === 'entry-balance' ?
        {
            title: 'Entrada',
            lineColor: '#4E41F0',
            data: gains
        }
        :
        {
            title: 'Saidas',
            lineColor: '#E44C4E',
            data: expenses
        }
    },[]);
    /*const months = [
        {value: 1, label: 'Janeiro'},
    ];
    */
    const months = useMemo(() => {
        return listOfMonths.map((month, index)=>{

            return {
                value: index + 1,
                label: month,
            }
        })

    },[]);

    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        const { data } = pageData;

        data.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();

            if(!uniqueYears.includes(year)){
                uniqueYears.push(year)
            }
        });

        return uniqueYears.map(year => {
            return {
                value: year,
                label: year,
            }
        });
    },[pageData]);

    const handleFrequencyClick = (frequency: string) => {
        const alreadySelected = frequencyFilterSelected.findIndex(item => item === frequency);
            
        if(alreadySelected>= 0){
            const filtered = frequencyFilterSelected.filter(item => item !== frequency);
            setFrequencyFilterSelected(filtered);
        }else{
            setFrequencyFilterSelected((prev) => [...prev, frequency]);
        }
    }

    const handleMonthSelected = (month:string) => {
        try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth); 
        }catch{
            throw new Error('invalid month value. Is accept 0 - 24.')
        }
    }

    const handleYearSelected = (year:string) => {
        try {
            const parseYear = Number(year);
            setYearSelected(parseYear);
        }catch{
            throw new Error('inavlid year value. Is accept integer numbers.')
        }
    }

    useEffect (() => {

        const { data } = pageData;

        const filteredDate = data.filter(item => {
            const date = new Date(item.date);
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            return month === monthSelected && year === yearSelected 
            && frequencyFilterSelected.includes(item.frequency);
        });

        const formattedData = filteredDate.map(item => {
            return {
                //id: String( new Date().getTime()) + item.amount,
                id: uuid_v4(),
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dateFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E'
            }
        });

        setData(formattedData);

    }, [pageData, monthSelected, yearSelected, data.length, frequencyFilterSelected]);

    return(
        <Container>
            <ContentHeader title={pageData.title} lineColor= {pageData.lineColor}>
                <SelectInput 
                    options={months} 
                    onChange={(e) => handleMonthSelected(e.target.value)} 
                    defaultValue={monthSelected}/>
                <SelectInput 
                    options={years} 
                    onChange={(e) => handleYearSelected(e.target.value)} 
                    defaultValue={yearSelected}/>
            </ContentHeader>

            <Filters>
                <button type="button" 
                    className={`tag-filter tag-filter-recurrent 
                    ${frequencyFilterSelected.includes('recorrente') && 'tag-actived'}`}
                    onClick={() => handleFrequencyClick('recorrente')}
                >
                    Recorrentes
                </button>

                <button type="button" 
                    className={`tag-filter tag-filter-eventual
                    ${frequencyFilterSelected.includes('eventual') && 'tag-actived'}`}
                    onClick={() => handleFrequencyClick('eventual')}
                >
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
                        subtitle={item.dateFormatted}
                        amount={item.amountFormatted}
                        />
                    ))
                }
            </Content>
        </Container>
    );
}

export default List;