import MenuCard from "../menucards/MenuCard"
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import BookmarkedCards from "./YourCards";

const CardDataFetcher = ( {id, bookmarkStatus, bookmarkClick} ) => {
    
    const [responseA, setResponseA] = useState([])
    const [rateList, setRateList] = useState([])
    const userstoken = window.localStorage.getItem("token")

    const fetchCourses = (paramID) =>{  
        const userToken = paramID//PLUG IN YOUR course ids here
         axios.post("http://localhost:3001/courseData", {
             _id: userToken,
    }).then(response=>{
        setResponseA(response.data);
        setRateList(response.data.rates)
    })};

    useEffect(() => {//fetch starting data
        fetchCourses(id)
    }, [])

    const upvote = () => {
        console.log("test")
        console.log(rateList)
        if (rateList.includes(userstoken)){
            rateList.splice(rateList.indexOf(userstoken), 1)
        }
        else{
        rateList.push(userstoken)
        }
        console.log(rateList)
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
            upvote = {upvote}
            downvote = {console.log("downvote")}
            />
        </div>
    )
}

export default CardDataFetcher
