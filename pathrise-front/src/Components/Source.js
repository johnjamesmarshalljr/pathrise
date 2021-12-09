import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as sourcesActions from './../redux/actions'
import { Routes, Route, Link, useNavigate } from "react-router-dom";

const Source = (props) => {
    // const [source, setSources] = useState(props.sources)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleClick = ( id) => {
      // debugger
      dispatch(sourcesActions.getSource(id))
      navigate(`/sources/${id}/opportunities`)

    }


    return (
      <div className="Source">
        {/* <ul> */}
        <img className="logo"
              src={props.source.logo_file}
              alt="logo"
            />
          <li className="list-item" onClick={ ()=>handleClick(props.id) }>{props.source.name} </li>
            <p className="description"><em>{props.source.description}</em></p>
            
        {/* </ul> */}
      </div>
    );
  }

export default Source;