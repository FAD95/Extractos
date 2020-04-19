const express = require("express");
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
//initializations

const app = express();


//settings

app.set ('port',3000);

//middlewares

app.use(morgan('dev'));

const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/imageserver'),
    filename(req, file, cb){
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
})
app.use(multer((storage)).single('image'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes

app.use('/api/extracto', require('./routes/extracto.js'));
app.use('/api/administrador', require('./routes/administrador.js'));

//static files

app.use(express.static(path.join(__dirname,'public')));

//start the server

app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});

