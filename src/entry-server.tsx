import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom'; // For server-side routing
import App from './App';

// The render function is called by your server.js to get the HTML string
export function render(url: string) {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={url}> {/* Use StaticRouter and pass the incoming URL */}
        <App />
      </StaticRouter>
    </React.StrictMode>
  );
  return { html };
}