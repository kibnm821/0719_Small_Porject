const express = require('express')
const app = express()
const port = 3000

//app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const path = require('path');
const router = express.Router();

app.use(express.static('public'))

//ps.형 여기 인덱스로 들어가는거요 127.0.0.1:3000/주소일때 접속하는 주소
//분류 페이지 제가 만들어 놓을테니까 이거는 건드시지 마시고 나머지 주소 건드시면 됩니다.

//localhost domain

router.get('/', function (req, res) {
res.sendFile(path.join(__dirname + '/Views/index.html'));
});

router.get('/park', function (req, res) {
res.sendFile(path.join(__dirname + '/Views/Park/index.html'));
});

router.get('/Views/information_tab', function (req, res) {
res.sendFile(path.join(__dirname + '/Views/Park/information_tab.html'));
});

router.get('/Views/sign_up', function (req, res) {
res.sendFile(path.join(__dirname + '/Views/Park/sign_up.html'));
});

router.get('/Views/notice1', function (req, res) {
res.sendFile(path.join(__dirname + '/Views/Park/notice1.html'));
});

router.get('/Views/notice2', function (req, res) {
res.sendFile(path.join(__dirname + '/Views/Park/notice2.html'));
});

//request

router.get('/action', function (req, res) {
console.log(req.query);
res.send('Request id : '+req.query.id+'<br>Request password : '+req.query.pwd+
'<br>Request email : '+req.query.email+'<br>Request NickName : '+req.query.nc+
'<br>Request address1 : '+req.query.add1+'<br>Request addres2 : '+req.query.add2)
});

router.get('/signup', function (req, res) {
    console.log(req.query);
    res.send('<br>Request email : '+req.query.email+'<br>Request first name : '+req.query.firstname+
    '<br>Request last name : '+req.query.lastname+'<br>Request addres2 : '+req.query.passwd)
    });

router.get('/action_LOGIN', function (req, res) {
console.log(req.query);
res.send('Request id : '+req.query.id+'<br>Request password : '+req.query.pwd)
});

app.use('/', router);