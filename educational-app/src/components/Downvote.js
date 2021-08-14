import React from 'react'

const Downvote = ({ onClick }) => {
    
    return (
        <div>
            <button className="downvote" onClick={onClick}>
                <img src= "https://pboueke.github.io/presentations/rtm/img/down.png" alt= 'icon' />
            </button>
        </div>
    )
}

export default Downvote
