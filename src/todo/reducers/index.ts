import { combineReducers } from 'redux'
import { todos } from './todos'
import { visibilityFilter } from './visibilityFilter'
import { postTime } from './postTime'

export default combineReducers({
    todos,
    visibilityFilter,
    postTime
})