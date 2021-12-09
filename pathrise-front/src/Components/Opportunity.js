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
        <ul>
          <li onClick={ ()=>handleClick(props.id) }>{props.opportunity.company_name}</li>
            <p>{props.opportunity.job_title}</p>
        
        </ul>
      </div>
    );
  }

export default Opportunity;