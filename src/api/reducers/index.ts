// リデューサーの紐付けを行う
import { combineReducers } from 'redux'
import { reducerList } from './list'
import { reducerDetail } from './detail'
import { reducerHead } from './head'

export default combineReducers({
    reducerList,
    reducerDetail,
    reducerHead
})