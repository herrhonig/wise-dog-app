import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { initState } from './init/initState';
import { rootReducer } from './reducers/rootReducer';

const store = createStore(
  rootReducer,
  initState(),
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)
export default store
