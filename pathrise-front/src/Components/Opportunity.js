import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as sourcesActions from './../redux/actions'

const Opportunity = (props) => {
    // const [source, setSources] = useState(props.sources)
    const dispatch = useDispatch()

    const handleClick = ( id) => {
    //   debugger
    //   dispatch(sourcesActions.resetState())
    //   dispatch(sourcesActions.getSource(id))
    }


    return (
      <div className="Source">
        <img className="logo"
              src={props.opportunity.source.logo_file}
              alt="logo"
            />
          <li className="list-item" onClick={ ()=>handleClick(props.id) }><b> {props.opportunity.company_name}</b></li>
            <p className="description">Title: {props.opportunity.job_title}<br/><em>Link:</em> <a href={props.opportunity.job_url}>{props.opportunity.job_url}</a></p>
            
        
   
      </div>
    );
  }

export default Opportunity;