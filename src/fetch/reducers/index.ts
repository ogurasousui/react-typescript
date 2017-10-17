import { combineReducers } from 'redux';
import { getCommentsError, loadComments, comments } from './comments';

export default combineReducers({
    getCommentsError,
    loadComments,
    comments,
});