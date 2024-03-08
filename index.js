const express = require('express');
const app = express();

// Service port
const port = process.argv.ength > 2 ? process.argv[2] : 3000;

// Use JSON body parsing
app.use(express.json());

// Serve up the frontend static content hosting
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });