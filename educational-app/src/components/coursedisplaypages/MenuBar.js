import { useHistory } from "react-router-dom";

const MenuBar = ({ link1,link2,link3 }) => {
    let history = useHistory();
    const loginClick = () => {history.push("/login")}
    const registerClick = () => {history.push("/registration")}
    
    const bold = {fontWeight: "bold"}
    const normal = {fontWeight: "normal"}
    const buttonstyle =  {cursor:"pointer"}

    return (
        <div>
            <a style={link1 ? (bold) : (normal)} href="/popular-courses">Popular Courses</a>
            <a style={link2 ? (bold) : (normal)} href="/bookmarked">Bookmarked Courses</a>
            <a style={link3 ? (bold) : (normal)} href="/your-courses">Your Courses</a>
            
            <button style = {buttonstyle} onClick={loginClick}>Login</button>
            <button style = {buttonstyle} onClick={registerClick}>Register</button>
        </div>
    )
}

export default MenuBar
