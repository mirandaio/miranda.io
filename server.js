import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './src/App';
const { PORT = 8000 } = process.env;

const app = express();

app.use('/static', express.static('build/static'));

app.get('/*', (req, res) => {
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  res.send(`
    <!DOCTYPE>
    <html>
    <head>
      <meta charset="utf-8"/>
      <title>Alfredo Miranda</title>
      <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400" rel="stylesheet">
    </head>
    <body>
      <div id="root">
        ${html}
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
