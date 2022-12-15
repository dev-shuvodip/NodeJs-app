var http = require('http');
var url = require('url');

function startServer(router, handle) {
    function onRequest(request, response) {
        var reviewData = '';
        var pathname = url.parse(request.url).pathname;
        request.setEncoding('utf8');
        request.addListener('data', function (chunk) {
            reviewData += chunk;
        })
        request.addListener('end', function () {
            router(handle, pathname, response, reviewData);
        })
    }
    http.createServer(onRequest).listen(8888);
}
exports.startServer = startServer;