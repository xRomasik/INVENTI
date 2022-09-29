import ReactDOM from 'react-dom/client';
import App from './App';
import './Styles/index.css';
import { Provider } from 'react-redux';
import store from './State/store';
import React from 'react';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
