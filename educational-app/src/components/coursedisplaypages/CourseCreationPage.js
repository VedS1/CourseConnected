import axios from "axios"
import { useState, useEffect } from 'react';
import MenuBar from "./MenuBar";

const CourseCreationPage = () => {
    //States
    const [title, setTitle] = useState("");
    const [subject, setSubject] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [level, setLevel] = useState(5);
    const [dateOfCreate, setDateOfCreate] = useState("");
    

    useEffect(()=>{
        axios.get("http://localhost:3001/read").then((response)=>{
            console.log(response.data)
        }); 
    }, []);

  //const editDB = ()=>{ //edits database WHEN YOU SPECIFIY THE ID
  //  );
  //};

  //  useEffect(() => {
    //    console.log("I suck")
     //   axios.put("http://localhost:3001/update", {
     //       id: "611813413648ed8d24ede623",
     //       newTitle: "proof of concept",
    //    }
   //     
   // )}, []);
    
    const addToDB = (event) =>{
        event.preventDefault();
        axios.post("http://localhost:3001/insert", {
            title: title,
            subject: subject,
            author: author,
            description: description,
            level: level,
            dateOfCreate: dateOfCreate,
          //  unit: {unitOne, unitTwo},
        }
        )
        .then(response => {
            console.log(response);
            
        });};



    return (
        <div>
            <MenuBar link4="true"/>
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
             


                <input type = 'submit' value =  'Save Course' className='btn btn-block'></input>
            </form>
              
        </div>
    )
}

export default CourseCreationPage
