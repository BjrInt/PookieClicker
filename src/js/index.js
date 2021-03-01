import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { getBuildingCost, getPookiesPerSecond, getPookiesPerClick } from './helpers'

import Statusbar from './components/statusbar'
import Buildings from './components/buildings'
import Clickzone from './components/clickzone'
import Achievements from './components/achievements'

class GameInterface extends Component {
    constructor(props){
        super(props);
        this.state = {
            pookieCurrent: 0,
            pookieTotal: 0,
            pookieClicked: 0,
            achievements: [
                {
                    name: "Bébé fait du sale, allô allô allô",
                    description: "Clicker 25 fois sur Aya. Génère 2x plus de pookies par click",
                    pookieClicked: 25
                },
                {
                    name: "J'suis gang, hors game",
                    description: "Clicker 50 fois sur Aya. Génère 2x plus de pookies par click",
                    pookieClicked: 50
                },
                {
                    name: "Ouais je sens t'as l'seum, j'ai la boca",
                    description: "Clicker 100 fois sur Aya. Génère 2x plus de pookies par click",
                    pookieClicked: 100
                },
            ],
            buildings: [
                {
                    title: "Pipelettes",
                    description: "Pour des pipelettes, ça va claquer, crac",
                    cost: 15,
                    benefits: 0.1,
                    units: 0
                },
                {
                    title: "Bons bails",
                    description: "Pour les bons bails, ça va grave quer-cra",
                    cost: 100,
                    benefits: 1,
                    units: 0
                },
                {
                    title: "Million d'dollars",
                    description: "... bébé tu vaux ça!",
                    cost: 10000,
                    benefits: 150,
                    units: 0
                },
            ]
        }

        setInterval(() => {
            const pookiePerSecond = getPookiesPerSecond(this.state.buildings)
            
            this.setState({
                pookieTotal: this.state.pookieTotal + pookiePerSecond,
                pookieCurrent: this.state.pookieCurrent + pookiePerSecond,
            })
        }, 1000)
    }

    clickPookie = () => {
        const pookiePerClick = getPookiesPerClick(this.state.achievements, this.state.pookieClicked)

        this.setState({
            pookieClicked: this.state.pookieClicked +1,
            pookieTotal: this.state.pookieTotal + pookiePerClick,
            pookieCurrent: this.state.pookieCurrent + pookiePerClick,
        })
    }

    buyBuilding = (i) => {
        const buildingsCopy = [...this.state.buildings]
        const buildingToBuy = buildingsCopy[i]
        const buildingCost = getBuildingCost(buildingToBuy.cost, buildingToBuy.units)

        if(buildingCost <= this.state.pookieCurrent){
            buildingToBuy.units += 1

            this.setState({
                buildings: buildingsCopy,
                pookieCurrent: this.state.pookieCurrent - buildingCost
            })
        }
    }

    render() {
        const pookiesPerSecond = getPookiesPerSecond(this.state.buildings)
        const pookiesPerClick = getPookiesPerClick(this.state.achievements, this.state.pookieClicked)

        return (
            <>
                <Statusbar pookiesPerClick={pookiesPerClick} pookiesPerSecond={pookiesPerSecond} />
                <Buildings buildings={this.state.buildings} pookieCurrent={this.state.pookieCurrent} buyBuilding={this.buyBuilding} />
                <Clickzone pookieCurrent={this.state.pookieCurrent} clickPookie={this.clickPookie} />
                <Achievements pookieClicked={this.state.pookieClicked} achievements={this.state.achievements} />
            </>
        );
    }
}

ReactDOM.render(
    <GameInterface />, 
    document.getElementById('app')
)