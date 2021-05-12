const authRoutes=require('express').Router()
const {mailer}=require('../controllers/mailerSetUp/mailer')
authRoutes.get('/',(req,res)=>{
    res.render('home')
})

authRoutes.get('/profile',(req,res)=>{
    res.render('profile',{userName:req.user.userName})
    mailer(req.user.userEmail,req.user.userName)
})
authRoutes.get('/logout',(req,res)=>{
   // console.log(req.user,req.session)
    req.logout();
    res.redirect('/');
})



module.exports={authRoutes}