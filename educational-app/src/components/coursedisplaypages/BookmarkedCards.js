import MenuBar from "./MenuBar"
import CardLoader from "./CardLoader"
import axios from "axios"
import { useEffect } from "react"

const BookmarkedCards = () => {
    const fetchBookmarks = () =>{
        const userToken = window.localStorage.getItem("token")
        console.log(userToken)
         axios.post("http://localhost:3001/bookmark", {
             _id: userToken,
    }).then(response=>{
        console.log(response.data.bookmarked);
        return (response.data.bookmarked)
    })};

    const idList = [1,2];
    
    return (
        <div>
            <MenuBar link2="true"/>

            <CardLoader idList = {fetchBookmarks()}/>
        </div>
    )
}

export default BookmarkedCards
