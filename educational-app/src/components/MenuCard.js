import PropTypes from 'prop-types'
import Upvote from './Upvote'
import Downvote from './Downvote'
import Bookmark from './Bookmark'
import { useState, useEffect } from 'react';

const MenuCard = ({ imageURL, rating, upvote, downvote , title, author, text, bookmarkStatus, onBookmarkClick }) => {
    
    return (
        <div className = 'card'>
            <div className='topHalf'>
                <Bookmark showBookmark = {bookmarkStatus} onClick = {onBookmarkClick}/>
                <Upvote className='upvote' onClick = {upvote}/>
                <Downvote className='downvote' onClick = {downvote}/>
                <p>{rating}</p>
            </div>
            <h2>{title}</h2>
            <h5>by {author}</h5>
            <p>{text}</p>
        </div>
    )
}

MenuCard.defaultProps = {
    title: 'Empty Title',
    rating: 1000,
    author: 'Empty Author',
    text: 'Empty Text Empty Text Empty Text',
    imageURL: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
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
