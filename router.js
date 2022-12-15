function router(handle, pathname, response, reviewData) {
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, reviewData);
    } else {
        var notFoundResponse =
            '<!DOCTYPE html>' +
            '<html lang="en">' +
            '<head>' +
            '<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />' +
            '<meta http-equiv="X-UA-Compatible" content="IE=edge" />' +
            '<meta name="viewport" content="width=device-width, initial-scale=1.0" />' +
            '</head>' +
            '<body>' +
            '<p>Page not found</p>' +
            '</body>' +
            '</html>';
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.write(notFoundResponse);
        response.end();
    }
}
exports.router = router;