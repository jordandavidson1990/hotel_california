const express = require('express')
const app = express()

const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('hotel')
    const guestsCollection = db.collection('guests')
    const guestRouter = createRouter(guestsCollection)
    app.use('/api/guests', guestRouter)
  })

app.listen(3000, function() {
  console.log(`App is listening on port ${this.address().port}`);
})
