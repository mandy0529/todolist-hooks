import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TodoProvider from './components/Context';
import GlobalStyles from './components/GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
