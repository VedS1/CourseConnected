import MenuCard from "../menucards/MenuCard"
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"

const CardDataFetcher = ( {id} ) => {
    const [responseA, setResponseA] = useState([])
    const [bookmarkList, setBookmarkList] = useState([])
    const [bookmarkStatus, setBookmarkStatus] = useState(false)

    const updateBookmarks = () =>{
        axios.post("http://localhost:3001/bStatus", {
            bookmarked:bookmarkList,
        }).then(response=>{
        })};
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
        console.log(response.data.bookmarked)
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
            console.log("one")
            bookmarkList.splice(bookmarkList.indexOf(id), 1);
            updateBookmarks();
        }
        else{
            console.log("two")
            bookmarkList.push(id);
            updateBookmarks();
        }
        bookmarkUpdater()
    }
    const bookmarkUpdater = () => {
        if(bookmarkList.includes(id)){
            setBookmarkStatus(true)
        }
        else{
            setBookmarkStatus(false)
        }
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
