import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { DAppProvider, ChainId } from "@usedapp/core";
import { Provider } from 'react-redux';
import store from './store/index';

ReactDOM.render(
  <React.StrictMode>

    {/* <DAppProvider> */}
    <Provider store={store}>
        <App />
    </Provider>
    {/* </DAppProvider> */}

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
