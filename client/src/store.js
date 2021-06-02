import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers/rootReducer.js'
import thunk from 'redux-thunk'

const middleware = [thunk]

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(...middleware)))

export default store