import React from "react";
import { Container, ChartContainer, Header, LegendContainer, Legend } from "./styles";
import { ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid, Tooltip} from "recharts";

import formatCurrency from "../../utils/formatCurrency";
interface IHistoryBoxProps{
    data: {
        month: string
        amountEntry: number;
        amountOutput: number;
    }[],
    lineColorAmountEntry: string;
    lineColorAmountOutput: string;
}

const HistoryBox: React.FC<IHistoryBoxProps> = ({
    data, lineColorAmountEntry, lineColorAmountOutput
}) =>(
    <Container>
        <Header>
            <h2>Historico de saldo</h2>
            <LegendContainer>
                <Legend color={lineColorAmountEntry}>
                    <div></div>
                    <span>Saidas</span>
                </Legend>
           
                <Legend color={lineColorAmountOutput}>
                    <div></div>
                    <span>Saidas</span>
                </Legend>
            </LegendContainer>
        </Header>

        <ChartContainer>
            <ResponsiveContainer>
                <LineChart data={data} margin={{top: 5, right: 20, left: 20, bottom: 5}}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#cecece"/>
                    <XAxis dataKey="month" stroke="#cecece"/>
                    <Tooltip formatter={(value: number) => formatCurrency(value)} />
                    <Line 
                        type="monotone" 
                        dataKey="amountEntry" 
                        name="Entradas" 
                        stroke={lineColorAmountEntry}
                        strokeWidth={5} 
                        dot={{r: 5}} 
                        activeDot={{r: 8}} 
                    />
                    <Line 
                        type="monotone" 
                        dataKey="amountOutput" 
                        name="Saidas" 
                        stroke={lineColorAmountOutput} 
                        strokeWidth={5} 
                        dot={{r: 5}} 
                        activeDot={{r: 8}} 
                    />
                </LineChart>
            </ResponsiveContainer>
        </ChartContainer>
    </Container>
)

export default HistoryBox;