// CarbonBiochar
export const incomeProductions = (quantityCoal,conversionFactor)=>{
    return quantityCoal * conversionFactor;
}
export const profitability = (incomeBiochar,incomeC02,totalCost)=>{
    return (incomeBiochar+incomeC02)-totalCost;
}

export const vectorIncome = (profitability)=>{
    let vectorReturn=[profitability]
    for (let i = 0; i < 11; i++) {
       let nextValue = vectorReturn[vectorReturn.length - 1] * 1.5;
       vectorReturn.push(nextValue);
    }
    return vectorReturn;
}