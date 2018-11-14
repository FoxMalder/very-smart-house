import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { preloadReady } from 'react-loadable';

import { register } from './registerServiceWorker';
import { App } from './components/app/App';

import './index.css';

register();

const render = (Component: React.ComponentType) => preloadReady().then(() =>
    ReactDOM.hydrate(
        <Router>
            <Component />
        </Router>,
        document.getElementById('root')
    )
);

render(App);

module.hot && module.hot.accept('./components/app/App', () => render(require('./components/app/App').App));
