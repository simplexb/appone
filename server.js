console.log('May Node be with you')
const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;	


var db

MongoClient.connect('mongodb://massimo:cippino@ds011432.mlab.com:11432/appone', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})


app.set('view engine', 'ejs')
app.get('/', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {quotes: result})
  })
})

// app.listen(3000, function() {
// console.log('listening on 3000')
// })

//  var MongoClient = require('mongodb').MongoClient
//  , assert = require('assert');

// Connection URL
// var url = 'mongodb://localhost:27017/myproject';
// Use connect method to connect to the Server
// MongoClient.connect(url, function(err, db) {
// assert.equal(null, err);
// console.log("Connected correctly to server");

//  db.close();
// });


app.use(bodyParser.urlencoded({extended: true}))


// MongoClient.connect('link-to-mongodb', (err, database) => {
// ... start the server
// })


// app.get('/', function(req, res) {
//  res.send('Hello World')
// })
// Note: request and response are usually written as req and res respectively.
	
//	app.get('/', (req, res) => {
//	  res.sendFile(__dirname + '/index.html')
//	  // Note: __dirname is the path to your current working directory. Try logging it and see what you get!
	  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
//	})
	
app.post('/quotes', (req, res) => {
	  db.collection('quotes').save(req.body, (err, result) => {
	    if (err) return console.log(err)

	    console.log('saved to database')
	    res.redirect('/')
	  })
	})
	

	
	
	
	
//	app.post('/quotes', (req, res) => {
//	  db.collection('quotes').save(req.body, (err, result) => {
//	    if (err) return console.log(err)

//	    console.log('saved to database')
//	    res.redirect('/')
//	  })
//	})
		
	
//	app.post('/quotes', (req, res) => {
//	  console.log('Hellooooooooooooooooo!')
//	})
	
//	app.post('/quotes', (req, res) => {
//	  console.log(req.body)
//	})