import MenuBar from "./MenuBar"
import CardLoader from "./CardLoader"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const BookmarkedCards = () => {

    const readPopular = () =>{
         axios.post("http://localhost:3001/popular", {
    }).then(response=>{
        setIdlist(response)
        console.log(response)
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
