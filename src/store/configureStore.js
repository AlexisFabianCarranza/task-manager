import {createStore,combineReducers,compose, applyMiddleware} from 'redux';
import persistState from 'redux-localstorage';
import reducers from '../reducers';

import {connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
/*const enhancer = compose(
    persistState('user')
    
);
const rootReducer = combineReducers({
    ...reducers,
    router: routerReducer
})
export default function configureStore(middleware){
    return createStore(
        rootReducer,
        applyMiddleware(middleware),
        enhancer
    );
}*/
const enhancer = compose(
    persistState('user')
    
);
const createRootReducer = (history) => combineReducers({
    ...reducers,
    router: connectRouter(history),
});

export const history = createBrowserHistory();

export default function configureStore(preloadedState){
    return createStore(
        createRootReducer(history),
        preloadedState,
        compose(
            applyMiddleware(routerMiddleware(history)),
            persistState('user')
            
        )
    );
}