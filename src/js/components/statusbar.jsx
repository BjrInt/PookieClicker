import React from 'react'

const Statusbar = props => {
    return (
        <aside className="top-area">
            <div className="maintitle">
                pookieclicker
            </div>

            <div>
                <div className="statbubble">
                    <i className="fas fa-hand-pointer" />
                     +{props.pookiesPerClick}
                    </div>
                <div className="statbubble">
                    <i className="fas fa-chart-line" />
                    +{props.pookiesPerSecond}/s
                </div>
            </div>
        </aside>
    );
}

export default Statusbar
