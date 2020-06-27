const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')

const User = require('../model/User')
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register', (req, res) => {
  const today = new Date()
  const userData = {
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    created: today
  }

  User.findOne({
    email: req.body.email
  })
    //TODO bcrypt
    .then(user => {
      if (!user) {
        User.create(userData)
          .then(user => {
            const payload = {
              _id: user._id,
              username: user.username,
              email: user.email
            }
            let token = jwt.sign(payload, process.env.SECRET_KEY, {
              expiresIn: 1440
            })
            res.json({ token: token })
          })
          .catch(err => {
            res.send('error: ' + err)
          })
      } else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.post('/login', (req, res) => {
  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (user) {
        const payload = {
          _id: user._id,
          email: user.email,
          password: user.password
        }
        let token = jwt.sign(payload, process.env.SECRET_KEY, {
          expiresIn: 1440
        })
        res.json({ token: token })
      } else {
        alert("Such user does not exist, please check your credentials and try again")
        res.json({ error: 'User does not exist' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.get('/home', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  User.findOne({
    _id: decoded._id
  })
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = users


// const express = require('express')
// const users = express.Router()
// const cors = require('cors')
// const jwt = require('jsonwebtoken')
// const bcrypt = require ('bcryptjs')
// const User = require('../model/user')
// users.use(cors())

// process.env.SECRET_KEY = 'secret'

// // const AuthController = require('../controllers/AuthController')

// // const passport = require('passport');
// /* GET users listing. */
// // router.get('/', function(req, res, next) {
// //   res.send('respond with a resource');
// // });


// users.post('/register', (req, res) => {
//   const today = new Date()
//   const userData = {
//     email: req.body.email,
//     username: req.body.username,
//     password: req.body.password,
//     created: today
//   }

//   User.findOne({
//     email: req.body.email
//   })
//   .then(user => {
//     if(!user) {
//       bcrypt.hash(req.body.password, 10,(err, hash) => {
//         userData.password = User.create(userData)
//         .then(user => {
//           res.json({status: user.email + 'Registered'})
//         })
//         .catch(err => {
//           res.send('error: ' + err)
//         })
//     })
//   } else {
//     res.json({error: 'User already exists'})
//   }
//  })
//  .catch(err => {
//    res.sent('error: ' + err)
//  })
// })



// // async function addToDB(req, res) {
// //     const user = new User({
// //         email: req.body.email,
// //         username: req.body.username,
// //         password: User.hashPassword(req.body.password),
// //         creation_dt: Date.now()

// //     });

// //     try{
// //         doc = await user.save();
// //         return res.status(201).json(doc);

// //     }
// //     catch(err) {
// //         return res.status(501).json(err);
// //     }
// // }

// users.post('/login',function(req,res,next){
//     passport.authenticate('local', function(err, user, info) {
//       if (err) { return res.status(501).json(err); }
//       if (!user) { return res.status(501).json(info); }
//       req.logIn(user, function(err) {
//         if (err) { return res.status(501).json(err); }
//         return res.status(200).json({message:'Login Success'});
//       });
//     })(req, res, next);
//   });
  
//   users.get('/user',isValidUser,function(req,res,next){
//     return res.status(200).json(req.user);
//   });
  
//   users.get('/logout',isValidUser, function(req,res,next){
//     req.logout();
//     return res.status(200).json({message:'Logout Success'});
//   })
  
//   function isValidUser(req,res,next){
//     if(req.isAuthenticated()) next();
//     else return res.status(401).json({message:'Unauthorized Request'});
//   }
  
// module.exports = users; 