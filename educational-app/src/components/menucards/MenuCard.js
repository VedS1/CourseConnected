import PropTypes from 'prop-types'
import Upvote from './Upvote'
import Downvote from './Downvote'
import Bookmark from './Bookmark'
import { useState, useEffect } from 'react';

const MenuCard = ({ imageURL, rating, upvote, downvote , title, author, text, bookmarkStatus, onBookmarkClick }) => {

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
                <p>{text}</p>
            </div>
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
