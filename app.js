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

router.get('/action', function (req, res) {
console.log(req.query);
res.send('Request email : '+req.query.email+'<br>Request password '+req.query.pwd+
'<br>Request nickname'+req.query.nick+'<br>Request address1'+req.query.add1+'<br>Request addres2'+req.query.add2)
});

app.use('/', router);