import filledBookmark from './bookmark-filled.png';
import unfilledBookmark from './bookmark-unfilled.png';

const Bookmark = ({showBookmark, onClick}) => {
    return (
        <div>
            <button className='bookmark-toggle' onClick={onClick}>
                <img src={showBookmark ? (filledBookmark) : (unfilledBookmark)}/>
            </button>
        </div>
    )
}

export default Bookmark
