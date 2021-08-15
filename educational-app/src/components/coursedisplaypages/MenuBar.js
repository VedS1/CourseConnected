import { useHistory } from "react-router-dom";
import "./MenuBar.css"

const MenuBar = ({ link1,link2,link3,link4 }) => {
    let history = useHistory();
    const loginClick = () => {history.push("/login")}
    const registerClick = () => {history.push("/registration")}
    
    const bold = {fontWeight: "bold"}
    const normal = {fontWeight: "normal"}
    const buttonstyle =  {cursor:"pointer"}

    return (
        <div className='menubar'>
            <div className='leftSide'>
            <a href="/">
                <img className="logo"  src="https://cdn.discordapp.com/attachments/875928959920005168/876262151214489630/logo.png" alt="logo" />
            </a>
            <a className="popularCourses" style={link1 ? (bold) : (normal)} href="/popular-courses">Popular Courses</a>
            <a className="bookmarkedCourses"    style={link2 ? (bold) : (normal)} href="/bookmarked">Bookmarked Courses</a>
            <a className="yourCourses" style={link3 ? (bold) : (normal)} href="/your-courses">Your Courses</a>
            <a className="yourCourses" style={link4 ? (bold) : (normal)} href="/course-creation">Course Creation</a>
            </div>
            
            <div className='rightSide'>
            <img className="searchIcon" src="https://cdn.discordapp.com/attachments/875928959920005168/876289495476076544/search.png" alt="search icon" />
            <input className="search" type="text" name="" placeholder="  Search..."/>
            <a className="login" style = {buttonstyle} onClick={loginClick}>Login</a>
            <a className="register" style = {buttonstyle} onClick={registerClick}>Register</a>
            </div>
        </div>
    )
}

export default MenuBar
