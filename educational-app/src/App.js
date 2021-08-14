import React from 'react'
import MenuCard from './components/menucards/MenuCard';
import CourseCreationPage from './components/coursecreation/CourseCreationPage';
import Login from './components/loginAndRegister/Login';
import Register from './components/loginAndRegister/Register'
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, useParams } from 'react-router-dom'

//returns id when on url/page/id (Ask Aryan if you don't understand)
const Page = () => {
  const str = String(window.location.pathname).slice(6,)
  return(str)
}

const App = () => {
  
return(
  <Router>
  
    <Route exact path="/">
      <MenuCard />
      <a href="/coursecreation">Test</a>
    </Route>

    <Route exact path="/yourcourses">
      <h1>YOUR COURSES GOES HERE</h1>
    </Route>

    <Route exact path="/popularcourses">
      <h1>POPULAR COURSES GOES HERE</h1>
    </Route>

    <Route exact path="/bookmarked">
      <h1>BOOKMARKED COURSES GOES HERE</h1>
    </Route>

    <Route exact path="/login">
      <Login/>
    </Route>

    <Route exact path="/registration">
      <Register/>
    </Route>
  
    <Route exact path="/coursecreation">
      <CourseCreationPage/>
    </Route>

    <Route exact path="/page/:page_id">
      <h1>COURSE MAIN PAGE GOES HERE</h1>
    </Route>
  
  </Router>
)}

export default App;