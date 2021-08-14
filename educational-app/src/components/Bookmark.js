const Bookmark = ({showBookmark, onClick}) => {
    return (
        <div>
            <button className='bookmark-toggle' onClick={onClick}>
                <img src={showBookmark ? "https://cdn.discordapp.com/attachments/874495990575530014/875924896893513728/bookmark-filled.png" : "https://cdn.discordapp.com/attachments/874495990575530014/875924903080132619/bookmark-unfilled.png"}  alt= 'icon' />
            </button>
        </div>
    )
}

export default Bookmark
