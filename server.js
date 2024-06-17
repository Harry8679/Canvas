const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

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

const PORT = process.env.PORT || 5501;

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));