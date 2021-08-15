import MenuCard from "../menucards/MenuCard"
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import BookmarkedCards from "./YourCards";

const CardDataFetcher = ( {id, bookmarkStatus, bookmarkClick} ) => {
    
    const [responseA, setResponseA] = useState([])

    const fetchCourses = (paramID) =>{  
        const userToken = paramID//PLUG IN YOUR course ids here
         axios.post("http://localhost:3001/courseData", {
             _id: userToken,
    }).then(response=>{
        setResponseA(response.data);
    })};


    useEffect(() => {//fetch starting data
        fetchCourses(id)
    }, [])

    const test = () => {
        console.log("test")
    }

    return (
        <div>
            <MenuCard
            id = {id}
            imageURL = {responseA.imgURL}
            rating = {responseA.rating}
            title = {responseA.title}
            author = {responseA.author}
            text = {responseA.description}
            bookmarkStatus = {bookmarkStatus}
            date = {responseA.dateOfCreate}
            level = {responseA.level}
            onBookmarkClick = {bookmarkClick}
            upvote = {test}
            downvote = {test}
            />
        </div>
    )
}

export default CardDataFetcher
