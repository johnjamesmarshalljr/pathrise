import React, { useState, useEffect } from 'react';
import Sources from './Components/Sources.js'
import Opportunities from './Components/Opportunities'
import Navbar from './Components/Navbar'
import { Routes, Route } from "react-router-dom";
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import * as sourcesActions from './redux/actions'

function App() {
  const dispatch = useDispatch()
  const allSources = useSelector(state => state.sources.allSources)

   useEffect(() => {
    if(!allSources){
      dispatch(sourcesActions.getAllSources())
    }        
      });
  
      const renderSources = () => {
        if (allSources){
          return (
            <Routes>
              <Route path="/" element={<Sources />} />
              <Route
                path="/sources/:id/opportunities"
                element={<Opportunities />}
              />
            </Routes>
          )
        }else {
          return ''
        }
      }
     
  return (
    <div className="App">
      <Navbar />
      {renderSources()}
    </div>
  );
}

export default App;
