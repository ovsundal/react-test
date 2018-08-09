import {combineReducers} from 'redux';
import commentsReducer from 'reducers/comments';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from 'reducers';

export default combineReducers({
   comments: commentsReducer
});