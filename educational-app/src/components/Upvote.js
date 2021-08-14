import React from 'react'

const Upvote = ({ onClick }) => {
    
    return (
        <div>
            <button className='upvote' onClick={onClick}>
                <img src="http://i.imgur.com/uxzOltO.png" alt="icon" />
            </button>
        </div>
    )
}

export default Upvote
