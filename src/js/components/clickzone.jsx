import React from 'react'

const Clickzone = props => {
    return (
        <main className="click-area">
            <div className="aya" onClick={props.clickPookie}></div>
            <section className="counter">
                <div className="number">{Math.floor(props.pookieCurrent)} <small>pookies</small></div>
                <div className="danslesas">dans le sas</div>
            </section>
        </main>
    );
}

export default Clickzone

