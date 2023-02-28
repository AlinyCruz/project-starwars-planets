import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import StarwarsProvider from './context/StarwarsProvider';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <StarwarsProvider>
      <App />
    </StarwarsProvider>,
  );
