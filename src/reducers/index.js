import {combineReducers} from 'redux';
import postReducers from '../reducers/postreducer';

export default combineReducers({
    posts: postReducers
});