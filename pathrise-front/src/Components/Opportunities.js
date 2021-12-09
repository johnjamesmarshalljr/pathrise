import React, { useState, useEffect } from 'react';
import Opportunity from './Opportunity'
import { useSelector, useDispatch } from 'react-redux';

const Opportunities = (props) => {
    const oppsForSource = useSelector(state => state.sources.opportunities)
    const [opps, setOpps] = useState(null)
    
    useEffect(() => {
      
      setOpps(oppsForSource)      
    }, [oppsForSource]);

    const renderOpps = () => {
      debugger
      if(opps){
      opps.map(opp => {
        return (
          <Opportunity opportunity={opp} id={opp.id} key={opp.id}/>
        )        
      })
    }
  }


    return (
        <div>
          {/* {renderOpps(opps)} */}
            {oppsForSource ? oppsForSource.map(opp => {
            return (
              <Opportunity opportunity={opp} id={opp.id} key={opp.id}/>
            )        
          }) : '' 
          } 
        </div>
            )
}


export default Opportunities