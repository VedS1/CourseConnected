import MenuBar from "./MenuBar"
import CardLoader from "./CardLoader"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const BookmarkedCards = () => {
    const [idlist, setIdlist] = useState([])

    const fetchBookmarks = () =>{
        const userToken = window.localStorage.getItem("token")
         axios.post("http://localhost:3001/bookmark", {
             _id: userToken,
    }).then(response=>{
        setIdlist(response.data.created)
    })};

    useEffect(() => {
        fetchBookmarks()
    }, [])
    
    return (
        <div>
            <MenuBar link3="true"/>

            <CardLoader idList = {idlist}/>
        </div>
    )
}

export default BookmarkedCards
