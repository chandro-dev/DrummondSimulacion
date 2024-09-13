import './App.css'
import { LineChart } from '@mui/x-charts/LineChart';
import {incomeProductions, vectorIncome, profitability} from './Services/NoEnergeticsService'
import { useEffect, useState } from 'react';

function App() {
  const [vector, setVector] = useState([]);
  const [dataSection, setDataSection] = useState(false);
  const [biocharProduced, setBiocharProduced] = useState('');
  const [biocharIncome, setBiocharIncome] = useState('');
  const [incomeCaptureCO2, setIncomeCaptureCO2] = useState('');
  const [totalCost, setTotalCost] = useState('');
  const [profitabilityCalculate, setProfitabilityCalculate] = useState('');

  const [disponibilityCoal, setDisponibilityCoal] = useState('');
  const [conversionFactor, setConversionFactor] = useState('');
  const [productionCost, setProductionCost] = useState('');
  const [captureCO2, setCaptureCO2] = useState('');
  const [benefitsCO2, setBenefitsCO2] = useState('');

  const income = () => {
    const biocharIncomeValue = 269.50;
    const biocharProducedValue = incomeProductions(disponibilityCoal, conversionFactor);
    const biocharIncomeCalc = incomeProductions(biocharIncomeValue, biocharIncomeValue);
    const incomeCaptureCO2Calc = incomeProductions(captureCO2, benefitsCO2);
    const totalCostCalc = incomeProductions(productionCost, disponibilityCoal);
    const profitabilityCalc = profitability(biocharIncomeCalc, incomeCaptureCO2Calc, totalCostCalc);

    setBiocharProduced(biocharProducedValue);
    setBiocharIncome(biocharIncomeCalc);
    setIncomeCaptureCO2(incomeCaptureCO2Calc);
    setTotalCost(totalCostCalc);
    setProfitabilityCalculate(profitabilityCalc);

    setVector(vectorIncome(profitabilityCalc));

    setDataSection(true);
  }

  return (
    <>
      <header>
        <h1>Panel de costos y produccion</h1>
      </header>
      <div className='principalContainer'>
        <section className='chartSection'>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }]}
            series={[
              {
                data: vector,
                area: true,
              },
            ]}
            width={700}
            height={300}
          />

          {dataSection && (
            <section className='DataSection'>
              <h3>Seccion de datos</h3>
              <h4>Biochar producido: {biocharProduced}</h4>
              <h4>Ingresos por biochar: {biocharIncome}</h4>
              <h4>Ingresos por captura de CO2: {incomeCaptureCO2}</h4>
              <h4>Costos totales: {totalCost}</h4>
              <h4>Rentabilidad: {profitabilityCalculate}</h4>
            </section>
          )}
        </section>
        <section className='inputSection'>
          <span>
            <label htmlFor="cantidadCarbon">Cantidad de carbon disponible en Tn</label>
            <input 
              type="text" 
              name="cantidadCarbon" 
              id="cantidadCarbon" 
              value={disponibilityCoal}
              onChange={(e) => setDisponibilityCoal(e.target.value)} 
            />
          </span>
          <span>
            <label htmlFor="factorConversion">Factor de conversión</label>
            <input 
              type="text" 
              name="factorConversion" 
              id="factorConversion" 
              value={conversionFactor}
              onChange={(e) => setConversionFactor(e.target.value)} 
            />
          </span>
          <span>
            <label htmlFor="costoProduccion">Costo de producción</label>
            <input 
              type="text" 
              name="costoProduccion" 
              id="costoProduccion" 
              value={productionCost}
              onChange={(e) => setProductionCost(e.target.value)} 
            />
          </span>
          <span>
            <label htmlFor="capturaCO2">Captura de CO2</label>
            <input 
              type="text" 
              name="capturaCO2" 
              id="capturaCO2" 
              value={captureCO2}
              onChange={(e) => setCaptureCO2(e.target.value)} 
            />
          </span>
          <span>
            <label htmlFor="BeneficiosCO2">Beneficios Captura de CO2</label>
            <input 
              type="text" 
              name="BeneficiosCO2" 
              id="BeneficiosCO2" 
              value={benefitsCO2}
              onChange={(e) => setBenefitsCO2(e.target.value)} 
            />
          </span>
          <button onClick={income}>Iniciar proceso</button>
        </section>
      </div>
    </>
  );
}

export default App;
