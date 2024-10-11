import React from 'react';
import ReactDOM from 'react-dom/client';
import { ColorList } from './Components/ColorList';

import './index.css';

const App = () => (
  <>
    <ColorList colorsList={['#00FF00']} />
  </>
);
const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
