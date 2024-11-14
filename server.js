require('dotenv').config();
const express = require('express');
const cors = require('cors');
const countryRoutes = require('./src/routes/countryRoutes')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/countries', countryRoutes);

app.listen(PORT, () => {
    console.log(`Server on port: ${PORT}`);
});

