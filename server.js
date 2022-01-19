var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const port = process.env.port || 8081 ;

var {db} = require('./config/db');  

require('./routes/user')(app);

app.listen(port,()=>{
    console.log(`server is reay to port on ${port}`);
});

module.exports = app ;