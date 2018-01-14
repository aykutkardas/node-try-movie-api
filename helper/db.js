const mongoose = require('mongoose');


module.exports= () => {

    mongoose.connect('mongodb://movie_user:a1b2c3@ds251827.mlab.com:51827/movie-api', { useMongoClient: true });
    
    mongoose.connection.on('open', () => {
        console.log('MongoDB: Connected');
    });

    mongoose.connection.on('error', (err) => {
        console.log('MongoDB Error: \n', err);
    });


};