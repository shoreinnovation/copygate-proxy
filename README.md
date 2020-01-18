# copygate-proxy
Proxy server to redirect inbound requests to API, web app etc

This proxy app sets up a proxy with two URLs
http://localhost:80/api -> http://localhost:8080/api/
http://localhost:80/ -> http://localhost:8100/

This allows the web browser to call the proxy hostname:port only
which avoids issues with CORS.

Start the proxy using:
sudo node app.js
or 
sudo node appRemote.js



