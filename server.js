let express = require('express');
let app = express();
let proxyMiddleware = require('http-proxy-middleware');

// set the port of our application
// process.env.PORT lets the port be set by Heroku
let port = process.env.PORT || 8080;
let target = process.env.API || 'http://localhost:3003/api'

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/dist'));

console.log(target)
app.use('/api/', proxyMiddleware({target: target, changeOrigin: true}))

// set the home page route
app.get('/*', function(req, res) {
    // make sure index is in the right directory. In this case /app/index.html
    res.sendfile(__dirname +'/dist/index.html');
});


app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
