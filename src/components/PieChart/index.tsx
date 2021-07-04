import React from 'react';
//import { PìeChart, Pie, Cell, ResponsiveContainer } from 'recharts';

import { Container, SideLeft, SideRight, LegendContainer, Legend } from "./styles"; 

//componete puro
const PieChart: React.FC = () => (
  <Container>
    <SideLeft>
      <LegendContainer>
          <h2>Relação</h2>
        <Legend color="#f7931B">
          <div>95%</div>
          <span>Entradas</span>
        </Legend>        
      </LegendContainer>
    </SideLeft>

    <SideRight>
        
    </SideRight>
  </Container>
);

export default PieChart;