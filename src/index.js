var express = require('express');
var app = express();
var morgan = require('morgan');




//settings
//create var port
//process.env.PORT -->validation port take port default the otehre server
app.set('port', process.env.PORT || 3000);


//middlerwares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//Routes
app.use('/test', require('./routes/index'));

//start server
app.listen(app.get('port'),()=>{
    console.log('Server on port: '+ app.get('port'));
});