import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import App from './components/App';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
);
