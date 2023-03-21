const express = require('express');
const app = express();
const bodyParser = require('body-parser')
var jsonparser = bodyParser.json()

let users = [
    {id: 1, name: "John"},
    {id: 2, name: 'Jane'},
    {id: 3, name: 'Bob'}
];

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    var id = +req.params.id
    console.log(id);
    var user = users.find(u => u.id === id);
    console.log(user);
    res.send(user);
});

app.post('/users/:id', jsonparser, (req, res) => {
    const userId = parseInt(req.params.id);
    const updatedUser = req.body;
    users = users.map(user => user.id === userId ? updatedUser : user);
    res.status(200).json(updatedUser);
});

app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.filter(user => user.id !== userId);
    res.status(204).send();
});

app.listen(3000, () => {
    console.log('Serverm is listening on port 3000')
})

//in JSON directory
//git add.\example.js
//git status
//git commit -m "msg"
//git push origin main