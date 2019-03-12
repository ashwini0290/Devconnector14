const express = require ('express');
const mongoose = require ('mongoose');
const bodyparser = require ('body-parser');
const app = express ();

const db = require('./config/keys').mongoURI;
const users =require ('./routes/api/users');
const posts =require ('./routes/api/posts');
const profile =require ('./routes/api/profile');

// Body Parser Middleware
app.use(bodyparser.urlencoded({ extended:false}));
app.use(bodyparser.json());

//Connect to db
mongoose
.connect (db)
.then (() => console.log('mongodb connected'))
.catch (err => console.log(err));

//routing
app.get('/', (req, res)=> res.send ('Hello!'));

app.use('/api/users', users);
app.use('/api/profile', profile );
app.use('/api/posts', posts );

const port = process.env.PORT || 6544;
app.listen(port, ()=> console.log(`Server Running ${port}`));


