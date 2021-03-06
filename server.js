const express = require('express');
const hbs = require('hbs');

var app = express();
var port = process.env.PORT || 3000

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  //res.send('<h1>Hello Express!</h1>');
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    message: 'Welcome to my website',
    currentYear: new Date().getFullYear()
  })
});

app.get('/about', (req, res)=> {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });
})

app.get('/bad', (req, res) => {
  res.send({
    errorMessage:[
      'Something Wrong'
    ]
  })
})

app.listen(port, () => {
  console.log(`Serever is up on port ${port}`);
});
