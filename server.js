const express = require('express')
const app = express()
const port = 3000

routes=require('./routes/route')
app.use(routes) 


var ejs=require('ejs')
var cors=require('cors')
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(cors({
    origin: '*'
}));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


/////C:\wamp\www\public\A-app-DEV\login_node_frame\_app_frame