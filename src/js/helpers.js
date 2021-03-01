export const getBuildingCost = (initialCost, lvl) => {
    if(lvl === 0)
        return initialCost
    
    return Math.round(initialCost * 1.15 ** lvl)
}

export const getPookiesPerSecond = (buildings) => buildings.reduce((ac, cv) => ac += cv.units * cv.benefits, 0)

export const getPookiesPerClick = (achievements, clickedPookies) => achievements.reduce((ac, cv) => (clickedPookies >= cv.pookieClicked ? ac *= 2 : ac), 1)
