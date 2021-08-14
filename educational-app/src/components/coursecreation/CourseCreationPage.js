import Axios from "axios"

const CourseCreationPage = () => {
    const onSubmit = () => {console.log("Submit")} 
    
    return (
        <div>
            <h1>Course Creation</h1>
            <form className='add-form' onSubmit={onSubmit}>
            <input type = 'submit' value =  'Save Task' className='btn btn-block'></input>
            </form>
        </div>
    )
}

export default CourseCreationPage
