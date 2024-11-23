const express = require('express');
const path = require('path');
const app = express();

// Your other routes
app.get('/', (req, res) => {
    res.send('Home Page');
});

// 404 error handling
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
