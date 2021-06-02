import resumeReducer from './resumeReducer.js'
import {combineReducer} from 'redux'

export const rootReducer = combineReducer({
    resume: resumeReducer
})