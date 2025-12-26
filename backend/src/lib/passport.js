import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";

import { ENV } from "./env.js";
import User from "../models/User.js";


passport.use(new GoogleStrategy({
    clientID: ENV.GOOGLE_CLIENT_ID,
    clientSecret: ENV.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
 async(accessToken, refreshToken, profile, cb) =>{
    console.log(profile);
    try{
       let  user=await User.findOne({ googleId: profile.id })
        if(!user){
            user=await User.create({
                googleId:profile.id,
                fullName:profile.displayName,
                email:profile.emails[0].value,
                avatar:profile.photos[0].value,
            })

        }   return cb(null,user) 
    }catch(err){
        return cb(err,null)
    }
    
  }
));