const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const {google}=require('./key')
const {UserModel}=require('../db/userModel')

passport.use(
    new GoogleStrategy(
        {
            clientID: google.clientID,
            clientSecret: google.clientSecret,
            callbackURL: "/google/redirect"
        },
        async function (accessToken, refreshToken, profile, done) {
       //console.log(profile)
       const currentUser=await UserModel.findOne({googleId:profile.id})
       //if user already exists
       if(currentUser){
        done(null, currentUser);
       }
       else{
            const newUser=await UserModel.create({googleId:profile.id, userName:profile.name.givenName, userEmail:profile.emails[0].value})
            done(null, newUser);
       }
    }

))

passport.serializeUser((user, done) => {
    done(null, user.id);
  });

passport.deserializeUser((id, done) => {
    UserModel.findById(id).then(user => {
      done(null, user);
    });
  });


module.exports={passport}