const fs = require('fs');
const express = require('express');
const mustacheExpress = require('mustache-express');

const about = fs.readFileSync('dist/about.html', 'utf8');
const projects = fs.readFileSync('dist/projects.html', 'utf8');
const resume = fs.readFileSync('dist/resume.html', 'utf8');
const contact = fs.readFileSync('dist/contact.html', 'utf8');

const app = express();

app.engine('html', mustacheExpress());
app.set('views', './dist');
app.set('view engine', 'mustache');

app.get('/', (req, res) => {
  res.render('index.html', { content: about });
});

app.get('/projects', (req, res) => {
  res.render('index.html', { content: projects });
});

app.get('/resume', (req, res) => {
  res.render('index.html', { content: resume });
});

app.get('/contact', (req, res) => {
  res.render('index.html', { content: contact });
});

app.get(/.*\.(png|jpg)/, (req, res) => {
  res.sendFile('dist' + req.originalUrl, { root: __dirname });
});

app.get(/.*?\.html$/, (req, res) => {
  res.sendFile('dist' + req.originalUrl, { root: __dirname });
});

app.listen(3000, () => console.log('Listening of port 3000'));
