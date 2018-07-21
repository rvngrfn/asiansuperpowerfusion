import { createStore } from 'redux'
import combinedReducers from './reducers'

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(combinedReducers, enhancer)

export default store
