const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.use('/', express.static('./public'));

app.get('/api/whoami', function (req, res, next) {
    console.log(req.get('accept-language').split(',')[0]);
    console.log(req.get('user-agent').match(/\(.*?(?=\))/)[0].slice(1));
    console.log(req.connection.remoteAddress);
    //console.log(req.params.id);
    
    const response = {};
    response.ipaddress = req.connection.remoteAddress;
    response.language = req.get('accept-language').split(',')[0];
    response.software = req.get('user-agent');
    // response.software = req.get('user-agent').match(/\(.*?(?=\))/)[0].slice(1);
    
    res.send(response)
});

app.listen(port);