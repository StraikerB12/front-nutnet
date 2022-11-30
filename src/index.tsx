import React from 'react';
import { createRoot } from 'react-dom/client';
import './assets/scss/main.scss';
import RouterList from './components/routes/RouterList';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <RouterList />
  </React.StrictMode>
);

reportWebVitals();
