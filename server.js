const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3001;

var app = express();


hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine', 'hbs');


app.use(express.static(__dirname + '/public'));

app.use((req, res, next)=>{
    res.render('maintenance.hbs');
})

app.use((req, res, next)=>{
    var now = new Date().toString();
    console.log(`${now} : ${req.method} : ${req.url} `);
    next();
});



hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear();
})

app.get('/', (req, res)=>{
    res.render('home.hbs',{
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to my website',
        
    });
});

app.get('/about', (req, res)=>{
    res.render('about.hbs',{
        pageTitle : 'About Page',
        
    });
});

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});