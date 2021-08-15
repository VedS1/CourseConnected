import MenuBar from "./MenuBar"
import CardLoader from "./CardLoader"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useHistory } from "react-router";

const BookmarkedCards = () => {
    let history = useHistory();
    
    const [idlist, setIdlist] = useState([])

    const fetchBookmarks = () =>{
        const userToken = window.localStorage.getItem("token")
         axios.post("http://localhost:3001/bookmark", {
             _id: userToken,
    }).then(response=>{
        setIdlist(response.data.bookmarked)
    })};

    useEffect(() => {
        const userToken = window.localStorage.getItem("token")
        if (userToken == null) {
            history.push("/login")
        }
        
        fetchBookmarks()
    }, [])
    
    return (
        <div>
            <MenuBar link2="true"/>

            <CardLoader idList = {idlist}/>
        </div>
    )
}

export default BookmarkedCards
