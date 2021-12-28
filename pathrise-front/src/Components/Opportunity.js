import React from 'react';
import { useSelector } from 'react-redux';


const Opportunity = (props) => {
  const currentSource = useSelector(state => state.sources.currentSource)

    return (
      <div className="Source">  
        <img className="logo"
              src={currentSource.logo_file}
              alt="logo"
            />
          <li className="list-item"><b> {props.opportunity.company_name}</b></li>
            <p className="description"><em>Job Title:</em> {props.opportunity.job_title}<br/><p><em>ID:</em> {props.opportunity.id}</p><em>Link:</em> <a href={props.opportunity.job_url}>{props.opportunity.job_url}</a></p>
      </div>
    );
  }

export default Opportunity;