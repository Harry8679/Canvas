const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// console.log('process.env.MONGO_DB_URI', process.env.MONGO_DB_URI);

const connectDatabase = () => { 
    mongoose.connect(process.env.MONGO_DB_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Database connected to ${process.env.PORT}`);
        })
    })
    .catch((err) => console.log(err));
}

module.exports = connectDatabase;