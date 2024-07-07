const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

dbConnect = async () => {
    try {
        if (process.env.NODE_ENV !== 'local') {
            await mongoose.connect(process.env.LOCAL_DB_URI);
            console.log('Local Database Is Connected');
        } else {
            await mongoose.connect(process.env.LOCAL_DB_URI);
            console.log('Production Database Is Connected');
        }
    } catch (error) {
        console.log('Database connection Failed');
    };
}

// dbConnect();

module.exports = dbConnect;