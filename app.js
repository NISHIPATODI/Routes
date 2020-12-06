const express = require("express");
const bodyParser  = require("body-parser");
const cors = require("cors");
const path = require("path");
const  moment = require('moment');
const router = express.Router();

const knexConfig = require("./knexfile");           
const Knex = require("knex");
const { Model } = require("objection");

const knex = Knex(knexConfig['production' || 'development']);
Model.knex(knex);

const app = express()
  .use(bodyParser.json())
  .use(router)
  .use(cors({
    credentials: true,
    origin: (origin, callback) => callback(null, true),
  }))

  const userRoutes = require("./src/routes/index");
  app.use("/user",userRoutes);


  const port = process.env.PORT || 8000;
  console.log("moment object : - ",moment());

// Express Server 
const server = app.listen(port, () => {
    console.log('Server listening at port %s', port);
  });
  