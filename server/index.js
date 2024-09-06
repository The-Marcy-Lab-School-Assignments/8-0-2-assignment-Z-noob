const express = require('express');
const path = require('path');
const app = express();

// 2. Define a path to the dist folder
const pathToDistFolder = path.join(__dirname, '../vite-project/dist');

// 3. Create the logRoutes middleware
// Middleware function for logging route requests
const logRoutes = (req, res, next) => {
  const time = new Date().toLocaleString();
  console.log(`${req.method}: ${req.originalUrl} - ${time}`);
  next(); // Passes the request to the next middleware/controller
};

// 4. Create the serveStatic middleware
const serveStatic = express.static(pathToDistFolder);

// controllers
const serveIndex = (req, res, next) => {
  res.send(`
    <h1>The no point page</h1>
    <h2>Why did you even come here</h2>
    <h2>Best if you move on</h2>
    <h3>Back:</h3>
    <a href="/">To go back to home page</a>
  `);
}

const serveAbout = (req, res, next) => {
  res.send(`
    <h1>About</h1>
    <h2>You can search for topics on water or songs</h2>
    <h3>Topics:</h3>
    <li><a href="/api/search/?filter=water">/api/search/?filter=water</a></li>
    <li><a href="/api/search/?filter=songs">/api/search/?filter=songs</a></li>
    <li><a href="/api/data">See full data</a></li>
    <li><a href="/">Or go back to home page</a></li>
  `);
};
const serveSearch = (req, res, next) => {
//   const filterTerm = req.query.filter || res.send('<h1><a href="/about">Go to about first</a></h1>');
//   const filteredData = Object.hasOwn(waterAndSongs, filterTerm) ? waterAndSongs[filterTerm] : '<h1><a href="/about">Go to about first</a></h1>'
//   res.send(filteredData);
}
const serveData = (req, res, next) => {
//   res.json(waterAndSongs);
}

// endpoints
app.use(serveStatic); //better to have use before get?
app.use(logRoutes) 
app.get('/no', serveIndex);
app.get('/about', serveAbout);
// app.get('/api/search', serveSearch);
// app.get('/api/data', serveData);

// listen
const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`)); 