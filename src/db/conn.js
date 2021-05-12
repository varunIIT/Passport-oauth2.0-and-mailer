const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost/passport-oauth20', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(()=>{
    console.log('db connected successfully')
})
.catch(()=>{
    console.log('db connection unsuccessful')
})