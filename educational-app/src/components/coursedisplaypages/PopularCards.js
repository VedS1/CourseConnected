import MenuBar from "./MenuBar"
import CardLoader from "./CardLoader"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const BookmarkedCards = () => {

    const readPopular = (event) =>{
        then(response => {
            setIdlist(response)
        })
    }
    const [idlist, setIdlist] = useState([])

    const fetchBookmarks = () =>{
        const userToken = window.localStorage.getItem("token")
         axios.post("http://localhost:3001/bookmark", {
             _id: userToken,
    }).then(response=>{
        setIdlist(response.data.bookmarked)
    })};

    useEffect(() => {
        fetchBookmarks()
    }, [])
    
    return (
        <div>
            <MenuBar link1="true"/>
            
            <CardLoader idList = {idlist}/>
        </div>
    )
}

export default BookmarkedCards
