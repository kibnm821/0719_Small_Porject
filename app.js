const express = require('express')
const app = express()
const port = 3000

//app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const path = require('path');
const router = express.Router();

app.use(express.static('public'))

router.get('/', function (req, res) {
res.sendFile(path.join(__dirname + '/Views/Park/index.html'));
});

router.get('/Views/information_tab', function (req, res) {
res.sendFile(path.join(__dirname + '/Views/Park/information_tab.html'));
});

router.get('/Views/sign_up', function (req, res) {
res.sendFile(path.join(__dirname + '/Views/Park/sign_up.html'));
});

app.use('/', router);