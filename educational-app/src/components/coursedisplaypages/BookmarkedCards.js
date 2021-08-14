import MenuBar from "./MenuBar"
import CardLoader from "./CardLoader"

const BookmarkedCards = () => {
    const getUserToken = () => {
        
    }
    
    const idList = [11111,11112,11113,1,1,1,1,1,1,1,1]
    
    return (
        <div>
            <MenuBar link2="true"/>

            <CardLoader idList = {idList}/>
        </div>
    )
}

export default BookmarkedCards
