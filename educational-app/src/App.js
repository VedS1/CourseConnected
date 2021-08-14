import React from 'react'
import MenuCard from './components/MenuCard';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, useParams } from 'react-router-dom'

const App = () => {
  
  const GetPageID = () => {
    const { page_id } = useParams()
    console.log(page_id)
    return page_id
  }

  const ClickButton = () => {
    console.log(useParams())
  }
  
  return(
    <Router>
  
      <Route exact path="/">
        <div>
          <MenuCard />
          <a href="/test">Test</a>
        </div>
      </Route>
  
      <Route exact path="/:page_id">
        <GetPageID id="pageID"/>
        <h1>{GetPageID}</h1>
        
      </Route>
  
    </Router>
    )
  }

export default App;