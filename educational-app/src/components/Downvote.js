import React from 'react'

const Downvote = ({ onClick }) => {
    
    return (
        <div>
            <button className='downvote' onClick={onClick}>
                <img src= "https://cdn.discordapp.com/attachments/875928959920005168/875945982918033448/downvote.png" alt= 'icon' />
            </button>
        </div>
    )
}

export default Downvote
