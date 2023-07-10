const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Harsha Vardhan!');
});

app.listen(4000, () => {
    console.log('Server running on port 3000');
});

