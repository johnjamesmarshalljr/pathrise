import React from 'react';


const Opportunity = (props) => {

    return (
      <div className="Source">  
        <img className="logo"
              src={props.opportunity.source.logo_file}
              alt="logo"
            />
          <li className="list-item"><b> {props.opportunity.company_name}</b></li>
            <p className="description">Title: {props.opportunity.job_title}<br/><em>Link:</em> <a href={props.opportunity.job_url}>{props.opportunity.job_url}</a></p>
      </div>
    );
  }

export default Opportunity;