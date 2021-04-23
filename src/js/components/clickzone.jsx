import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CLICK_POOKIE } from '../store/actions'

const Clickzone = () => {
    const dispatch = useDispatch()
    const pookieCurrent = useSelector(state => state.pookieCurrent)

    return (
        <main className="click-area">
            <div className="aya" onClick={() => dispatch(CLICK_POOKIE())}></div>
            <section className="counter">
                <div className="number">{pookieCurrent} <small>pookies</small></div>
                <div className="danslesas">dans le sas</div>
            </section>
        </main>
    );
}

export default Clickzone

