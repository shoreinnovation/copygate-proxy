// Dependencies
const express = require('express');
const proxy = require('http-proxy-middleware');

// Config
const { routes } = require('./config.json');

const app = express();
/*
for (route of routes) {
    app.use(route.route,
        proxy({
            target: route.address,
            pathRewrite: (path, req) => {
                return path.split('/').slice(2).join('/'); // Could use replace, but take care of the leading '/'
            }
        })
    );
}
*/
/*
for (route of routes) {
    app.use(route.route, proxy({ target: route.address, changeOrigin: true, logLevel: 'debug' } ));
}
*/
app.use('/api', proxy('http://localhost:3000/api', { logLevel: 'debug'} ));
app.use('/public', proxy('http://localhost:3000/public', { logLevel: 'debug'} ));
app.use('/api-docs', proxy('http://localhost:3000/api-docs', { logLevel: 'debug'} ));
app.use('/', proxy('http://localhost:4200/', { logLevel: 'debug'} ));
// app.use('/', proxy('http://localhost:8000/', { logLevel: 'debug'} ));

app.listen(8080, () => {
    console.log('Proxy listening on port 8080');
});

