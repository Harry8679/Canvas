const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const dbConnect = require('./config/database'); 

dotenv.config();

if (process.env.NODE_ENV === 'local') {
    app.use(cors({
        origin: 'http://localhost:3010',
        credentials: true,
    }));
} else {
    app.use(cors({
        credentials: true,
    }));
}

dbConnect();

// dbConnect();
const PORT = process.env.PORT || 5501;

console.log('process.env.PORT', process.env.PORT);

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
// Import Database
// mongoose.connect(process.env.MONGO_DB_URI)
//     .then(() => {
//         app.listen(PORT, () => {
//             console.log(`Database connected to ${PORT}`);
//         })
//     })
//     .catch((err) => console.log(err));