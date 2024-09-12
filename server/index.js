/** FEEDBACK: Great job! I love that you pushed yourself and attempted to search! */
require('dotenv').config(); // Import the environment variables from the `.env` file
const express = require('express');
const path = require('path');
const handleFetch = require('./utils/handleFetch');

// Setup
const pathToDistFolder = path.join(__dirname, '../giphy-search/dist');
const app = express();

// Middleware function for logging route requests
const logRoutes = (req, res, next) => {
  const time = (new Date()).toLocaleString();
  console.log(`${req.method}: ${req.originalUrl} - ${time}`);
  next();
};

// Create the serveStatic middleware
const serveStatic = express.static(pathToDistFolder);

// controllers
const serveGifs = async (req, res, next) => {
  // const API_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&limit=3&rating=g`;
  const API_URL = `https://api.giphy.com/v1/stickers/trending?api_key=${process.env.API_KEY}&limit=6&offset=0&rating=pg-13&bundle=sticker_layering`;
  const [data, error] = await handleFetch(API_URL);
  console.log(data)
  if (error) {
    console.log(error.message);
    return res.status(404).send(error);
  }
  res.send(data);
}

const serveSearch = (req, res, next) => {
//   const filterTerm = req.query.filter || res.send('<h1><a href="/about">Go to about first</a></h1>');
//   const filteredData = Object.hasOwn(waterAndSongs, filterTerm) ? waterAndSongs[filterTerm] : '<h1><a href="/about">Go to about first</a></h1>'
//   res.send(filteredData);
}

// endpoints
app.use(serveStatic); //better to have use before get?
app.use(logRoutes) 
app.get('/api/gifs', serveGifs);
// app.get('/api/search', serveSearch);


// listen
const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`)); 