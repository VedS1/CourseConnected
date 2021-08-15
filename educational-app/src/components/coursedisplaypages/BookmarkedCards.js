import MenuBar from "./MenuBar"
import CardLoader from "./CardLoader"
import axios from "axios"

const BookmarkedCards = () => {
    const fetchBookmarks = (event) =>{
        event.preventDefault();
        const userToken = window.localStorage.getItem("token")
        console.log(userToken)
         axios.post("http://localhost:3001/bookmark", {
             _id: userToken,
    }).then(response=>{
        console.log(response);
    })};
    
    const idList = [11111,11112,11113,1,1,1,1,1,1,1,1]
    
    return (
        <div>
            <MenuBar link2="true"/>

            <CardLoader idList = {idList}/>
        </div>
    )
}

export default BookmarkedCards
