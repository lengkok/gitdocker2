const express = require('express');
const app = express ();
app.get('/user', (req, res) => {
    res.send({ "id": 11, "name": "Lengkok" });
});
app.listen(600, () => {
    console.log('Express Server is Running at port no 600...');
});