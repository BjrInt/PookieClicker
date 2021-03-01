export const getBuildingCost = (initialCost, lvl) => {
    if(lvl === 0)
        return initialCost
    
    return Math.round(initialCost * 1.15 ** lvl)
}