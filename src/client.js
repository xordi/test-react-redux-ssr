import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import App from './components/App';

const initialState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;
const store = configureStore(initialState);

hydrate(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);