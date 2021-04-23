import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import store from './store/store.js'

import Statusbar from './components/statusbar'
import Buildings from './components/buildings'
import Clickzone from './components/clickzone'
import Achievements from './components/achievements'

const GameInterface = () => (
    <>
    <Provider store={store}>
        {/* <Statusbar />
        <Buildings />
        <Achievements /> */}
        <Clickzone />
    </Provider>
    </>
)

ReactDOM.render(
    <GameInterface />, 
    document.getElementById('app')
)