import PropTypes from 'prop-types'
import Upvote from './Upvote'
import Downvote from './Downvote'
import Bookmark from './Bookmark'
import { useState, useEffect } from 'react';

const MenuCard = ({ date, level, imageURL, rating, upvote, downvote , title, author, text, bookmarkStatus, onBookmarkClick }) => {

    return (
        <div className = 'card'>
            <div className='topHalf'>
                <img src={imageURL} className='img'/>
                <p>{rating}</p>
            </div>
            <div className='bottomHalf'>
                <div className='votesAndBookmark'>
                 <div className='votes'>
                        <Upvote onClick = {upvote}/>
                        <Downvote onClick = {downvote}/>
                    </div>
                    <div className='bookmark'>
                        <Bookmark showBookmark = {bookmarkStatus} onClick = {onBookmarkClick}/>
                    </div>
                </div>
                <h2>{title}</h2>
                <h5>by {author}</h5>
                <h5>created on {date}</h5>
                <h5>level: {level}</h5>
                <p>{text}</p>
            </div>
        </div>
    )
}

MenuCard.defaultProps = {
    title: 'Loading Title...',
    rating: 0,
    author: 'loading...',
    text: 'loading text...',
    imageURL: 'https://www.kickassfacts.com/wp-content/uploads/2018/07/loading-game-life.jpg',
}

MenuCard.propTypes = {
    title: PropTypes.string,
    rating: PropTypes.number,
    author: PropTypes.string,
    text: PropTypes.string,
    imageURL: PropTypes.string,
    upvote: PropTypes.func,
    downvote: PropTypes.func,
}

export default MenuCard
