import MenuCard from "../menucards/MenuCard"
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"

const CardDataFetcher = ( {id} ) => {
    const [responseA, setResponseA] = useState([])
    const[bK, setbK] = useState([])
    const [bookmarkList, setBookmarkList] = useState([])
    const [bookmarkStatus, setBookmarkStatus] = useState(false)

    const updateBookmarks = () =>{
        axios.post("http://localhost:3001/bStatus", {
            bookmarked:bK,
        });
    }
    const fetchCourses = (paramID) =>{  
        const userToken = paramID//PLUG IN YOUR course ids here
         axios.post("http://localhost:3001/courseData", {
             _id: userToken,
    }).then(response=>{
        setResponseA(response.data);
    })};

    const fetchBookmarks = () =>{
        const userToken = window.localStorage.getItem("token")
         axios.post("http://localhost:3001/bookmark", {
             _id: userToken,
    }).then(response=>{
        setBookmarkList(response.data.bookmarked)
    })};
    
    useEffect(() => {
        fetchBookmarks()
        fetchCourses(id)
    }, [])
    useEffect(() => {
        if(bookmarkList.includes(id)){
            setBookmarkStatus(true)
        }
        else{
            setBookmarkStatus(false)
        }
    }, [bookmarkList])

    const bookmark = () => {
        if(bookmarkList.includes(id)){
            bookmarkList.splice(bookmarkList.indexOf(id), 1);
        }
        else{
            bookmarkList.push(id);
        }
        fetchBookmarks()
    }

    const test = () => {
        console.log("test")
    }

    return (
        <div>
            <MenuCard
            imageURL = {responseA.imgURL}
            rating = {responseA.rating}
            title = {responseA.title}
            author = {responseA.author}
            text = {responseA.description}
            bookmarkStatus = {bookmarkStatus}
            date = {responseA.dateOfCreate}
            level = {responseA.level}
            onBookmarkClick = {bookmark}
            upvote = {test}
            downvote = {test}
            />
        </div>
    )
}

export default CardDataFetcher
