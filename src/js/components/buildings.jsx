import React from 'react'
import { getBuildingCost } from '../helpers'

const Buildings = props => {
    return (
        <aside className="buildings-area">
            {
                props.buildings.map((building, i) => (
                <article className={props.pookieCurrent < getBuildingCost(building.cost, building.units) ? 'building locked' : 'building'}
                     onClick={() => props.buyBuilding(i)}>
                <header className="building-header">
                    <div className="building-name">{building.title} <small>x{building.units}</small></div>
                    <div>
                        <div className="building-stat">
                            <i className="fas fa-chart-line" />
                            +{building.benefits}/s
                        </div>
                        <div className="building-stat">
                            {getBuildingCost(building.cost, building.units)}
                        </div>
                    </div>
                </header>

                <p className="building-description">{building.description}</p>
                </article>
                ))
            }
        </aside>
    );
}

export default Buildings
