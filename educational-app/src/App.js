import React from 'react'
import MenuCard from './components/menucards/MenuCard';
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
      <div>
        <MenuCard />
        <a href="/test">Test</a>
      </div>
    </Route>
  
    <Route exact path="/page/:page_id">
      <button onClick={Page}>bruh</button>
    </Route>
  
    </Router>
)}

export default App;