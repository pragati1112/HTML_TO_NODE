const express = require('express');
const path = require('path');

const pageRoutes = require('./routes/pageRoutes');

const app = express();

//  BODY MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'assets')));

// Routes
app.use('/', pageRoutes);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
