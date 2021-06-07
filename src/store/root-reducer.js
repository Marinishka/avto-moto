import {combineReducers} from 'redux';
import {data} from './data/data';
import {local} from './local/local';

export const NameSpace = {
  DATA: `DATA`,
  LOCAL: `LOCAL`
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.LOCAL]: local
});
