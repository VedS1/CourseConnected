import Axios from "axios"
import { useState, useEffect } from 'react';

const CourseCreationPage = () => {
    //States
    const [id, setId] = useState(Math.floor(Math.random() * 10000000)+1);
    const [title, setTitle] = useState("");
    const [subject, setSubject] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [level, setLevel] = useState(5);
    const [dateOfCreate, setDateOfCreate] = useState("");
    
    const addToDB = () =>{
        Axios.post("https://localhost:3001/insert", {
            id: id,
            title: title,
            subject: subject,
            author: author,
            description: description,
            level: level,
            dateOfCreate: dateOfCreate,
        })}
    

    return (
        <div>
            <h1>Course Creation</h1>
            <form className='add-form' onSubmit={addToDB}>
                <div className='form-control'>
                    <label>Title</label>
                    <input type='text' placeholder = 'Add Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className='form-control'>
                    <label>Subject</label>
                    <input type='text' placeholder = 'Add Subject' value={subject} onChange={(e) => setSubject(e.target.value)}/>
                </div>
                <div className='form-control'>
                    <label>Author</label>
                    <input type='text' placeholder = 'Add Author' value={author} onChange={(e) => setAuthor(e.target.value)}/>
                </div>
                <div className='form-control'>
                    <label>Description</label>
                    <input type='text' placeholder = 'Add Description' value={description} onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div className='form-control'>
                    <label>Level</label>
                    <input type='range' min = "1" max = "5" onChange={(e) => setLevel(e.target.value) }/>
                </div>
                <div className='form-control'>
                    <label>Description</label>
                    <input type="date" id="dateselect" name="dateselect" onChange={(e) => setDateOfCreate(e.target.value) }/>
                </div>

                <input type = 'submit' value =  'Save Task' className='btn btn-block'></input>
            </form>
        </div>
    )
}

export default CourseCreationPage
