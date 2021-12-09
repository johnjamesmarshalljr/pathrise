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
        <ul>
          <li onClick={ ()=>handleClick(props.id) }>{props.source.name}</li>
            <p>{props.source.description}</p>
        
        </ul>
      </div>
    );
  }

export default Source;