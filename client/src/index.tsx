import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { rootReducer } from './app/redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const Main = () => {
  const store = createStore(rootReducer, composeWithDevTools());
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
};
ReactDOM.render(<Main />, document.getElementById('root'));

serviceWorker.register();
