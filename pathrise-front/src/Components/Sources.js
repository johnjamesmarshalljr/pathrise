import React, { useState, useEffect } from 'react';
import Source from './Source.js'
import { useSelector, useDispatch } from 'react-redux';

const Sources = (props) => {
    const allSources = useSelector(state => state.sources.allSources)


    return (
        <div>
            {allSources.map(source => {
            return (
              <Source source={source} id={source.id} key={source.id}/>
            )        
          })} 
        </div>
            )
}


export default Sources