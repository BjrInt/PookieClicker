import React from 'react'

const Achievements = props => {
    return (
        <aside className="achievements-area">
            {
                props.achievements.map(achievement => (
                    (props.pookieClicked >= achievement.pookieClicked) &&
                    <article className="achievement">
                        <div className="achievement-title">{achievement.name}</div>
                        {achievement.description}
                    </article>
                    )
                )
            }
        </aside>
    );
}

export default Achievements
