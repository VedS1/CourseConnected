import downvote from './downvote.png';

const Downvote = ({ onClick }) => {
    
    return (
        <div>
            <button className='downvote' onClick={onClick}>
            <img className='upvote' src={(downvote)} alt="icon" />
            </button>
        </div>
    )
}

export default Downvote
