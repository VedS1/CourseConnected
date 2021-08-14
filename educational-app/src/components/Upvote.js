import React from 'react'

const Upvote = ({ onClick }) => {
    
    return (
        <div>
            <button className='upvote' onClick={onClick}>
                <img src="https://cdn.discordapp.com/attachments/875928959920005168/875945987036839967/upvote.png" alt="icon" />
            </button>
        </div>
    )
}

export default Upvote
