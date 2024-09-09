// Carbon coque
export const coqueProduced = (quantityCoal,conversionFactor)=>{
    return quantityCoal * conversionFactor;
}
export const income = (coqueProduced,coquePrice)=>{
    return coqueProduced * coquePrice;
}
export const totalCost = (tranformationCost,quantityCoal,emissionsCost)=>{
    return (tranformationCost * quantityCoal)+emissionsCost;
}
export const profitability = (coqueProduced,coquePrice)=>{
    return coqueProduced * coquePrice;
}
export const totalEmissionsCO2 = (emissionsPerTon,quantityCoal)=>{
    return emissionsPerTon * quantityCoal;
}

//Carbon Biochar En agricultura
export const profitabilityBiochar = (biocharIncome,CO2Income,totalCost)=>{
    return (biocharIncome + CO2Income)-totalCost;
}