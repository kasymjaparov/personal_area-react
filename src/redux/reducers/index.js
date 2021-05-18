import { combineReducers } from 'redux'
import data from './getAndLogin'
import docs from './documentReducers'

export default combineReducers({
	data,
	docs,
})
