const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 9030;

let staticPath = path.join(__dirname, '../public');
let template_path = path.join(__dirname, '../templates/views');
let partials_path = path.join(__dirname, '../templates/partials');
// Public Static Path

app.set('view engine', 'hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path)



app.use(express.static(staticPath));

// Rounting Static

app.get('', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/weather', (req, res) => {
    res.render('weather');
});

app.get('*', (req, res) => {
    res.render('404error',{
        errorMsg: `Opps! Page Not Found ${req.url}`
    });
});

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})