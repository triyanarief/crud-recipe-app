const express = require('express'),
      path    = require('path'),
      bodyParser = require('body-parser'),
      cons    = require('consolidate'),
      dust    = require('dustjs-helpers'),
      pg      = require('pg'),
      app     = express();

//db connect string here
const connect = "postgres://recipe:12345@localhost/recipebookdb";

//asign dust engine to dustjs
app.engine('dust', cons.dust);

//set default ext dust
app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

//set public folder
app.use(express.static(path.join(__dirname, 'public')));

//bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

app.get('/', (req, res) => {
  res.render('index');
})

// server
app.listen(3000, () => {
  console.log('server started on port:3000');
})
