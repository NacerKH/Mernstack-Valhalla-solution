const express = require('express');
const cookieParser= require('cookie-parser');
const userRoutes = require('./route/user.routes');
const postRoutes = require('./route/post.routes');
require('dotenv').config({path: './config/.env'});
require('./config/db');
const {checkUser, requireAuth}=require('./middleware/auth.middleware');
const cors= require('cors');

const app = express();

const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
  }
  app.use(cors(corsOptions));
  

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//jwt
app.get('*',checkUser);
app.get('/jwtid',requireAuth, (req,res)=> {
    res.status(200).send(res.locals.user._id)
})
//router
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);
////server
app.listen(process.env.PORT, () =>{
    console.log(`listening on port ${process.env.PORT}`);
})