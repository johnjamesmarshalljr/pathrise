import React, { useState, useEffect } from 'react';
import Opportunity from './Opportunity'
import { useSelector, useDispatch } from 'react-redux';

const Opportunities = (props) => {
    const oppsForSource = useSelector(state => state.sources.opportunities)
    const currentSource = useSelector(state => state.sources.currentSource)

    const [opps, setOpps] = useState(null)
    
    useEffect(() => {
      
      setOpps(oppsForSource)      
    }, [oppsForSource]);

    const findCurrentSource = () => {
      if(currentSource){
           return currentSource.name
      }else{
        return ''
      }
    
  }

  const renderOpps = () => {
    let rows = []
    rows = oppsForSource.map(opp => {
      return (
        <Opportunity opportunity={opp} id={opp.id} key={opp.id}/>
      )        
    })
    return !rows ? "" : <ul id="items-list" className="model-list">{rows}</ul>
  }


    return (
        <>
          <h2>Job Source: {findCurrentSource()} </h2>
          {oppsForSource ? renderOpps() : ''}
        </>
            )
}


export default Opportunities