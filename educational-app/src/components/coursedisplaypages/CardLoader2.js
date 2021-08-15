import CardDataFetcher from "./CardDataFetcher"
import { useEffect, useState } from "react"
import axios from "axios"

const CardLoader = ({ idList }) => {
    
    const [bookmarklist, setBookmarklist] = useState([])

    useEffect(() => {
        fetchBookmarks()
    }, [])

    const fetchBookmarks = () =>{
        const userToken = window.localStorage.getItem("token")
         axios.post("http://localhost:3001/bookmark", {
             _id: userToken,
    }).then(response=>{
        setBookmarklist(response.data.bookmarked)
    })};

    const updateBookmarks = (id) =>{
        console.log(bookmarklist)
        console.log(id)
        axios.put("http://localhost:3001/bStatus", {
            bookmarked:bookmarklist,
            _id : id,
        })};

    const clickedBookmark = (id) => {
        if(bookmarklist.includes(id)){
            bookmarklist.splice(bookmarklist.indexOf(id), 1);
        }
        else{
            bookmarklist.push(id);
        }

        updateBookmarks(window.localStorage.getItem("token"))
    }

    const isBookmarked = (id) =>{
        if(bookmarklist.includes(id)){
            console.log("true")
            return true;
        }
        else
            console.log("false")
            return false;
    }

    return (
        <div>
            {idList.map((id) => 
            <div>
                <CardDataFetcher id={id._id} bookmarkStatus={isBookmarked(id._id)} bookmarkClick={() => clickedBookmark(id._id)} />
            </div>
            )}
        </div>
    )
}

export default CardLoader