import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

// TODO nullとか[]だとエラーになる。デフォルトundefinedってありなの？
const configureStore = (initialState: any = undefined) => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}

export default configureStore