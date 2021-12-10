import React from 'react';
import Source from './Source.js'
import { useSelector } from 'react-redux';

const Sources = () => {
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
          <h2>Job Sources</h2>
            {renderSources()} 
        </section>
          )
}


export default Sources;