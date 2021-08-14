import PropTypes from 'prop-types'

const MenuCard = ({ imageURL, title, author, text }) => {
    return (
        <div className = 'card'>
            <img src={imageURL} alt="new"/>
            <h2>{title}</h2>
            <h5>by {author}</h5>
            <p>{text}</p>
        </div>
    )
}

MenuCard.defaultProps = {
    title: 'Empty Title',
    author: 'Nobody',
    text: 'Text Goes Here',
    imageURL: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
}

MenuCard.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    text: PropTypes.string,
    imageURL: PropTypes.string,
}

export default MenuCard
