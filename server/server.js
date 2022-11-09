const express = require('express');

const app = express()

app.get('/api', (req, res) => {
    res.json({"users": ['example0', 'example1', 'example2']});
});

app.listen(5000, () => console.log('Server started on port 5000'));