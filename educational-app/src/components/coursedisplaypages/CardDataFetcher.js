import MenuCard from "../menucards/MenuCard"
import axios from "axios";
import { useEffect } from "react";

const CardDataFetcher = ( {id} ) => {
    
    const fetchCourses = (paramID) =>{  
        const userToken = paramID//PLUG IN YOUR course ids here
         axios.post("http://localhost:3001/courseData", {
             _id: userToken,
    }).then(response=>{
        console.log(response);
    })};
    
    useEffect(() => {
        fetchCourses(id)
    }, [])

    return (
        <div>
            <MenuCard
            imageURL = "https://cdn.discordapp.com/attachments/675487279623569479/876244497015644190/unknown.png"
            rating = "1000"
            title = {id}
            author = "Ved Soolgiri"
            text = "I am Stuff"
            bookmarkStatus = "true"
            />
        </div>
    )
}

export default CardDataFetcher
