const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')


app.use(cors())


app.get('/', (req, res) => { 
    let data = {
        labels: ['IDG 1', 'IDG 2', 'IDG 3', 'IDG 4', 'IDG 5'],
        data: [ 43, 41, 46, 42, 39 ]
    };

    res.send(data);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))