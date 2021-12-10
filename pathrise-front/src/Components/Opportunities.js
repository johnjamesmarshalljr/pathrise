import React, { useState, useEffect } from 'react';
import Opportunity from './Opportunity'
import { useSelector, useDispatch } from 'react-redux';

const Opportunities = (props) => {
    const oppsForSource = useSelector(state => state.sources.opportunities)
    const currentSource = useSelector(state => state.sources.currentSource)
    const [name, setName] = useState("")
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

    const handleChange = (e) => {
      setName(e.target.value)
      filterOppsFromInput();
    }

   const filterOppsFromInput = () => {
      return oppsForSource.filter((opp) =>
        opp.job_title.toUpperCase().includes(name.toUpperCase())
      );
    };

  const renderOpps = () => {
    let rows = []
    if(oppsForSource.length === 0){
      return <ul className="model-list" > <li className="list-item"><p className="no"><em>There aren't any current available job opportunities for this Source</em></p></li></ul>
    }
   rows = filterOppsFromInput().map(opp => {
      return (
        <Opportunity opportunity={opp} id={opp.id} key={opp.id}/>
      )        
    }) 
    return !rows ? "" : <ul id="items-list" className="model-list">{rows}</ul>
  }

  const count = () => {
    if(oppsForSource){
      if(oppsForSource.length === 1){
        return oppsForSource.length + ' opportunity'
      }
      return oppsForSource.length + ' opportunities'
 }else{
   return 'Finding current job opportunities, please wait ...'
 }
  }

    return (
        <>
          <h2> Source: {findCurrentSource()} </h2>
          
          <h2 className="model-list">{count()}</h2>
          {/* <div className="center"> */}
            <input
            className="newnewnew"
            placeholder="SEARCH POSITIONS"
            type="text"
            name="name"
            onChange={handleChange}
            value={name}
            />
          {/* </div> */}
          {oppsForSource ? renderOpps() : ''}
          
        </>
            )
}


export default Opportunities;