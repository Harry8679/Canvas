const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

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

const dbConnect = async () => {
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

const PORT = process.env.PORT || 5501;

dbConnect();

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