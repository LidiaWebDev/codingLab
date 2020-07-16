var express = require('express')
var path = require('path')
var cors = require('cors')
var morgan = require('morgan')
var bodyParser = require('body-parser')
var serveStatic = require('serve-static')
const logger = require("morgan");



var app = express()

const mongoose = require('mongoose')

//step1
var port = process.env.PORT || 8080
var Users = require('./routes/users')
app.use(cors({
origin:['http://localhost:4200', 'http://127.0.0.1:4200'],
credentials:true}));


app.use(bodyParser.json())
app.use(logger())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

// Create link to Angular build directory
app.use(serveStatic(path.join(__dirname, '/dist/codingBlog')))

//const MONGODB_URI = 'mongodb://localhost:27017/members'


//step2
mongoose
  .connect(
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/members',
    {useNewUrlParser: true ,   
    useCreateIndex: true, 
    useUnifiedTopology: true,
    useFindAndModify: false

  })
  .then(() => console.log('MongoDB Connected Externally'))
  .catch(err => console.log('Could not connect to the DB', err))

  //Data parsing
  app.use(express.json())
  app.use(express.urlencoded({extended: false}))
  
 
  app.get('*', (req, res) => {
    const index = path.join(__dirname,'codingBlog','dist','index.html');
    res.sendFile(index);    
  });


//HTTP request logger
app.use(morgan('tiny'))
app.use('/users', Users)

const Post = require('./model/post')
//API end point for fetching the list of blog posts. Since for db Mongo is used, Mongoose client added to connect the db with the app.
app.post('/api/post/getAllPost', (req, res) => {
    mongoose.connect(url, { useMongoClient: true }, { useUnifiedTopology: true },function(err){
      console.log(err - 'error here')
        if(err) throw err;
        console.log("connection established successfully")
        Post.find({},[],{ sort: { _id: -1 } },(err, doc) => {
            if(err) throw err;
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })
    });
})
//step3
if(process.env.NODE_ENV ==='production') {

}

app.listen(port, function() {
  console.log('Server is running successfully! ')
})





// require('./config/config')

// //const createError = require('http-errors');
// const express = require('express')
// const cors = require('cors')
// const bodyParser = require('body-parser')
// const mongoose = require('mongoose')
// const path = require ("path")
// const cookieParser = require('cookie-parser')
// const morgan = require('morgan')


// const app = express()
// //view engine setup
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(morgan('dev'));
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());
// app.use(cors({
//     origin:['http://localhost:4200', 'http://127.0.0.1:4200'],
//     credentials:true
// }));




 




// //passport

// const passport = require('passport');
// const session = require('express-session');
// const MongoStore = require('connect-mongo')(session);

// app.use(session({
//     name:'myname.sid',
//     resave:false,
//     saveUninitialized:false,
//     secret:'secret',
//     cookie:{
//       maxAge:36000000,
//       httpOnly:false,
//       secure:false
//     },
//     store: new MongoStore({ mongooseConnection: mongoose.connection })
//   }));
//   require('./passport-config');
//   app.use(passport.initialize());
//   app.use(passport.session());
  


// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());







// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// const User = require('./model/user');
// const Post = require('./model/post');
 




// app.use(bodyParser.urlencoded({ extended : false}))

// app.post('/api/user/login', (req, res) => {
//     mongoose.connect(url, { useNewUrlParser: true }, function(err){
//         if(err) throw err;
//         User.find({
//             username : req.body.username, password : req.body.password
//         }, function(err, user){
//             if(err) throw err;
//             if(user.length === 1){  
//                 return res.status(200).json({
//                     status: 'success',
//                     data: user
//                 })
//             } else {
//                 return res.status(200).json({
//                     status: 'fail',
//                     message: 'Login Failed'
//                 })
//             }
             
//         })
//     });
// })

// //REST API endpoint to update post details based on the ID of the post

// app.post('/api/post/updatePost', (req, res) => {
//     mongoose.connect(url, { useMongoClient: true }, function(err){
//         if(err) throw err;
//         Post.update(
//             {_id: req.body.id },
//             { title : req.body.title, description: req.body.description },
//             (err, doc) => {
//             if(err) throw err;
//             return res.status(200).json({
//                 status: 'success',
//                 data: doc
//             })
//         })
//     });
// })

// //REST API end point for adding the blog post to the MongoDB database.

// app.post('/api/post/createPost', (req, res) => {
//     // insert the details to MongoDB
//     //connect to the MongoDB database using the Mongoose client.
//     mongoose.connect(url, { useMongoClient: true }, function(err){
//         if(err) throw err;
//         console.log('connection established ');
//     //create a model object using the Post schema defined in the server/model/post.js file
//     const post = new Post({
//         title: req.body.title,
//         description: req.body.description
//     })
//     //Call the save method on the Post object to save the entry to MongoDB.
//     post.save((err, doc) => {
//         if(err) throw err;
//         return res.status(200).json({
//             status: 'success',
//             data: doc
//         })
//     })
//   });
// })

// //REST API end point to delete the blog post to the MongoDB database.

// app.post('/api/post/deletePost', (req, res) => {
//     mongoose.connect(url, { useMongoClient: true }, function(err){
//         if(err) throw err;
//         Post.findByIdAndRemove(req.body.id,
//             (err, doc) => {
//             if(err) throw err;
//             return res.status(200).json({
//                 status: 'success',
//                 data: doc
//             })
//         })
//     });
// })


// const AuthRoute = require( './routes/users')
// app.use('/users', AuthRoute)
// app.listen(3000, () => console.log('blog server running on port 3000!'))
