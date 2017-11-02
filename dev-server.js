const path = require('path');
const express = require('express');
const app = express();

app.use('/dist', express.static('dist'));

app.get('/api/count', (req, res) => {
    res.contentType('application/json');
    const obj = {"amount": 100};
    setTimeout(() => res.json(obj), 500); //非同期感を出すために応答をわざと遅延させる。
    //res.status(400).json(obj); //for error testing
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/list', (req, res) => {
    const result = ['aaa', 'bbb', 'ccc']
    setTimeout(() => res.json(result), 500);
    //res.json(result)
});

app.get('/api/detail', (req, res) => {
    const result = ['あああ', 'いいい', 'ううう']
    const resultDetail = result[req.query.index]
    setTimeout(() => res.json(resultDetail), 500);
    //res.json(result)
});

app.get('/api/menu', (req, res) => {
    const result = [
        {
            path: '/station',
            title: '駅データ'
        },
        {
            path: 'profile',
            title: 'プロフィール'
        },
        {
            path: 'friend',
            title: 'フレンド'
        }
    ]
    setTimeout(() => res.json(result), 500);
    //res.json(result)
});

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("server start at port 3000")
});