import MenuBar from "./MenuBar"
import CardLoader from "./CardLoader"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const BookmarkedCards = () => {

    const readPopular = () =>{
         axios.get("http://localhost:3001/popular", {
    }).then(response => { 
        console.log(response)
    })
    .catch(error => {
        console.log(error.response)
    })};

    const [idlist, setIdlist] = useState([])

    useEffect(() => {
        readPopular()
    }, [])
    
    return (
        <div>
            <MenuBar link1="true"/>
            
            <CardLoader idList = {idlist}/>
        </div>
    )
}

export default BookmarkedCards
