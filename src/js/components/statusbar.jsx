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
                     +1
                    </div>
                <div className="statbubble">
                    <i className="fas fa-chart-line" />
                    +0/s
                </div>
            </div>
        </aside>
    );
}

export default Statusbar
