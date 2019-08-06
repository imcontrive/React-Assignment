import {createStore,combineReducers} from 'redux';
import productsReducer from '../reducers/reducer';

const rootReducers = combineReducers({
  products: productsReducer
})
const store = createStore(rootReducers);

export default store;
