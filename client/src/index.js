import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import {AuthProvider} from './providers/AuthProvider';
import {initMiddleware} from 'devise-axios';
import {Provider} from 'react-redux';
import store from './store';

initMiddleware();

ReactDOM.render(
    <Provider store={store}>
        <AuthProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </AuthProvider>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
