import React from 'react';
import { useDispatch } from 'react-redux';
import * as sourcesActions from './../redux/actions'
import { useNavigate } from "react-router-dom";

const Source = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleClick = ( id) => {
      dispatch(sourcesActions.getSource(id))
      navigate(`/sources/${id}/opportunities`)
    }

    return (
      <div className="Source">
        <p className="rating">{props.source.rating} </p>
        <img className="logo"
              src={props.source.logo_file}
              alt="logo"
            />
        <li className="list-item" onClick={ ()=>handleClick(props.id) }>{props.source.name} </li>
          <p className="description"><em>{props.source.description}</em></p>
      </div>
    );
  }

export default Source;