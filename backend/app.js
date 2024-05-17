const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const csurf = require('csurf');
const routes = require('./routes');
const { environment } = require('./config');
const isProduction = environment === 'production';

const app = express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());

if(!isProduction) {
    app.use(cors());
}


app.use(helmet({
    crossOriginResourcePolicy: { policy: "cross-origin"}
}));


app.use(csurf({
    cookie: {
        secure: isProduction,
        sameSite: isProduction && "Lax",
        httpOnly: true
    }
}));


app.use(routes);

app.use((req, res, next) => {
    const err = new Error('The requested resource could not be found');
    err.title = 'Resource Not Found';
    err.errors = ["The requested resource couldn't be found."];
    err.status = 404;
    next(err);
});


const { ValidationError } = require('sequelize');
app.use((err, req, res, next) => {
    if (err instanceof ValidationError) {
        err.errors = err.errors.map(e => e.message);
        err.title = 'Validation error';
    }
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    console.error(err);
    res.json({
        title: err.title || 'Server Error',
        message: err.message,
        errors: err.errors,
        stack: isProduction ? null : err.stack,
    });
});


module.exports = app;
