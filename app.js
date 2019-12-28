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
app.use('/api', proxy('http://localhost:8080/api', { logLevel: 'debug'} ));
app.use('/api-docs', proxy('http://localhost:8080/api-docs', { logLevel: 'debug'} ));
app.use('/', proxy('http://localhost:8100/', { logLevel: 'debug'} ));

app.listen(9443, () => {
    console.log('Proxy listening on port 9443');
});

