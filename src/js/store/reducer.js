const initialState = {
    pookieCurrent: 50,
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

const reducer = (state=initialState, action) => {
  switch(action.type){
    case 'CLICK_POOKIE':
      return {
        ...state, 
        pookieCurrent: state.pookieCurrent +1,
        pookieTotal: state.pookieTotal +1,
        pookieClicked: state.pookieClicked +1,
      }
    break;

    default:
    return state
  }
}

export default reducer