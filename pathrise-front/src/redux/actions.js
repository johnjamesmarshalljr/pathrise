import axios from "axios"
import * as actionTypes from './actionTypes'

export const resetState = () => {
    return {
        type: actionTypes.RESET_SOURCES_STATE
    }
}

export const getAllSources = () => {
    return dispatch => {
        return axios.get('http://localhost:3001/sources')
        .then(data => {
            dispatch(setAllSources(data.data.object))
        })
    }
}

export const getSource = (id) => {
    return dispatch => {
        return axios.get(`http://localhost:3001/sources/${id}`)
        .then(data => {
            dispatch(setCurrentSource(data.data))
            
        })
    }
}

const setAllSources = sources => {
    return {
        type: actionTypes.SET_ALL_SOURCES,
        data: sources
    }
}

const setCurrentSource = source => {
    return {
        type: actionTypes.SET_CURRENT_SOURCE,
        data: source
    }
}