import MenuCard from "../menucards/MenuCard"
import axios from "axios";

const CardDataFetcher = ( {id} ) => {
    
    const fetchCourses = (event) =>{
        event.preventDefault();
        const userToken = 0//PLUG IN YOUR course ids here
         axios.post("http://localhost:3001/courseData", {
             _id: userToken,
    }).then(response=>{
        console.log(response);
    })};
    
    return (
        <div>
            <MenuCard
            imageURL = "https://cdn.discordapp.com/attachments/675487279623569479/876244497015644190/unknown.png"
            rating = {id}
            title = "Mr. Stuff"
            author = "Ved Soolgiri"
            text = "I am Stuff"
            bookmarkStatus = "true"
            />
        </div>
    )
}

export default CardDataFetcher
