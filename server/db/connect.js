const mongoose = require('mongoose');

const url = process.env.DATABASE

mongoose.connect(url, {
    dbName: 'School',
    useNewUrlParser: true,
    useUnifiedTopology: true,
   },
   (error)=>{
    (error)
    ?
    console.log(error)
    :
    console.log("server is conected to mognoDB")

   }

);

