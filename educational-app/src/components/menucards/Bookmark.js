import filledBookmark from './bookmark-filled.png';
import unfilledBookmark from './bookmark-unfilled.png';
import "./MenuCard.css";

const Bookmark = ({showBookmark, onClick}) => {
    return (
        <div className="bookmark">
            <button onClick={onClick}>
                <img className='bookmarkImg' src={showBookmark ? (filledBookmark) : (unfilledBookmark)}/>
            </button>
        </div>
    )
}

export default Bookmark
