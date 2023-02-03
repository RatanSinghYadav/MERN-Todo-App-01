const { Router } = require('express');
const Register = require('./createdata');
const Delete = require('./deleteuser');
const getData = require('./getdata');
const Update = require('./updateuser');
const viewData = require('./viewuser');


const route = Router();


route.post('/register', Register);
route.get('/getdata', getData);
route.get('/getuser/:id', viewData);
route.patch('/edituser/:id',Update);
route.delete('/deleteuser/:id',Delete);


module.exports = route;