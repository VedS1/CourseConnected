import MenuCard from "../menucards/MenuCard"
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"

const CardDataFetcher = ( {id} ) => {
    const [responseA, setResponseA] = useState([])
    const[bK, setbK] = useState([])

    const updateBookmarks = () =>{
        axios.post("http://localhost:3001/bStatus", {
            bookmarked:bookmarked,
        });
    }
    const fetchCourses = (paramID) =>{  
        const userToken = paramID//PLUG IN YOUR course ids here
         axios.post("http://localhost:3001/courseData", {
             _id: userToken,
    }).then(response=>{
        setResponseA(response.data);
    })};
    
    useEffect(() => {
        fetchCourses(id)
    }, [])

    return (
        <div>
            <MenuCard
            imageURL = {responseA.imgURL}
            rating = {responseA.rating}
            title = {responseA.title}
            author = {responseA.author}
            text = {responseA.description}
            bookmarkStatus = {(false)}
            date = {responseA.dateOfCreate}
            level = {responseA.level}
            />
        </div>
    )
}

export default CardDataFetcher
