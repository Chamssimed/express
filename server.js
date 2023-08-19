const express=require('express')

// initialisation server
const app=express()
const port =5000
// creation server
app.listen(port,err=> err? console.log(err): console.log('server running in ${port}'))





