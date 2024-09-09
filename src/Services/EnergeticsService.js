export const energyProductions = (energyConversion,quantityCoal)=>{
    return energyConversion*quantityCoal;
}
export const energySales = (energyProduced, energyPrice) =>{
    return energyProduced*energyPrice;
}
export const operatingCost = (processingCoalCost,quantityCoal,storageCost,emissionsCO2) =>{
    const result = (processingCoalCost*quantityCoal) + (storageCost*emissionsCO2)
    return result;
}
export const systemProfitability = (energyProductions,operatingCost)=>{
    return energyProductions*operatingCost
}