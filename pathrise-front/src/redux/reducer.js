import { combineReducers } from 'redux'
import * as actionTypes from './actionTypes'

const initialState = {
    allSources: null,
    currentSource: null,
    opportunities: null
}

const sourcesReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.RESET_SOURCES_STATE:
            return resetState(state)
        case actionTypes.SET_ALL_SOURCES:
            return setAllSources(state, action.data);
        case actionTypes.SET_CURRENT_SOURCE:
            return setCurrentSource(state, action.data);
        default: 
            return state
    }
}

const resetState = (state) => {
    return {
        ...state,
        currentSource: null,
        opportunities: null
    }
}

const setAllSources = (state, sources) => {
    return {
        ...state,
        allSources: sources
    }
}

const setCurrentSource = (state, source) => {
    return {
        ...state,
        currentSource: source.object,
        opportunities: source.options.include
    }
}

const rootReducer = combineReducers({
    sources: sourcesReducer
});

export default rootReducer;