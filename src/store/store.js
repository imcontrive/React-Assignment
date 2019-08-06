import {createStore,combineReducers} from 'redux';
import productsReducer from '../reducers/index';

const rootReducers = combineReducers({
  productsInfo: productsReducer
})
const store = createStore(rootReducers);

export default store;
