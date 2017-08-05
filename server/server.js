const express = require('express');

let app = express();

app.get('/', (req, res) => {
   res.send('Hello world!');
});

app.get('/users', (req, res) => {
    res.send([{
       name: 'Mike',
       age: 30
    }, {
       name: 'John',
       age: 25
    }, {
       name: 'James',
       age: 35
    }]);
});

app.listen(3000);
module.exports.app = app;