import React, { useState, useEffect } from 'react';
import Source from './Source.js'
import { useSelector, useDispatch } from 'react-redux';

const Sources = (props) => {
    const allSources = useSelector(state => state.sources.allSources)

    const renderSources = () => {
      let rows = []
      rows = allSources.map(source => {
        return (
          <Source source={source} id={source.id} key={source.id}/>
        )        
      })
      return !rows ? "" : <ul id="items-list" className="model-list">{rows}</ul>
    }

    return (
        <section className="list-view">
            {renderSources()} 
        </section>
            )
}


export default Sources