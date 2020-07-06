import {combineReducers} from 'redux';
import User from './user_reducer';
import News from './news_reducer';
import Games from './games_reducer';
const rooReducers = combineReducers({
  User,
  News,
  Games,
});

export default rooReducers;
