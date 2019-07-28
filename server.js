import express from 'express';
import mustacheExpress from 'mustache-express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './src/App';
const { PORT = 8000 } = process.env;

const app = express();

app.engine('html', mustacheExpress());
app.set('views', './build');
app.set('view engine', 'mustache');

app.use('/static', express.static('build/static'));

app.get('/*', (req, res) => {
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  res.render('index.html', { content: html });
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
