const express=require('express')
const app=express()
require('./db/conn')
const {authRoutes}=require('./Routes/authRoutes')
const {passport}=require('./passportConfig/passportSetUp')
const session=require('express-session')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(
    session({
      resave: true,
      saveUninitialized: true,
      secret: '24knb6k247b2k7b2k7bk247hb2kh7b2',
    })
  )
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine','hbs')

app.use('/',authRoutes)
app.get("/google", passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: 'select_account'
  }));
app.get("/google/redirect",passport.authenticate('google'),(req,res)=>{
    res.redirect('/profile')
});

app.listen('3001',()=>{
    console.log('listening at http://localhost:3001')
})