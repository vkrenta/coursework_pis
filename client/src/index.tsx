import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { rootReducer } from './app/redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createMiddleware from 'redux-saga';
import { watchers } from './app/saga';

const Main = () => {
  const saga = createMiddleware();
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(saga))
  );
  for (let w of watchers) saga.run(w);
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
};
ReactDOM.render(<Main />, document.getElementById('root'));

serviceWorker.unregister();
