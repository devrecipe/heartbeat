let express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    request = require('request')

let app = express(),
    port = process.env.PORT || 1337

let nodes = require('./config.json')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('tiny'))
app.use(express.static('public'))

const Request = function (url) {
    return new Promise((resolve, reject) => {
        request.get(url, (err, response, body) => {
            resolve(response && response.statusCode)
        })
    })
}

app.get('/api/heartbeat', async (req, res) => {
    let resps = []

    for (let i = 0; i < nodes.length; i++) {
        let resp = await Request('http://' + nodes[i].address)
        resps.push({
            name: nodes[i].name,
            server: nodes[i].address,
            status: resp == 200 ? 'healthy' : (resp != undefined ? 'unhealthy' : 'dead')
        })
    }

    res.json(resps)
})

app.listen(port)