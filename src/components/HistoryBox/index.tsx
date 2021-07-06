import React from "react";
import { Container } from "../PieChartBox/styles";
import { ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid, Tooltip} from "recharts";

interface IHistoryBox{
    data: {
        month: string
        amountEntry: number;
        amountOutput: number;
    }[],
    lineColorAmountEntry: string;
    lineColorAmountOutput: string;
}

const HistoryBox: React.FC<IHistoryBox> = ({
    data, lineColorAmountEntry, lineColorAmountOutput
}) =>(
    <Container>
        <h2>Historico de saldo</h2>
        <ResponsiveContainer>
            <LineChart data={data} margin={{top: 5, right: 20, left: 20, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3" stroke="#cecece"/>
                <XAxis dataKey="month" stroke="cece"/>
                < Tooltip/>
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
    </Container>
)

export default HistoryBox;