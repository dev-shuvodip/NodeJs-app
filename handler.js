var querystring = require('querystring')

function home(response) {
    var htmlResponse =
        '<!DOCTYPE html>' +
        '<html lang="en">' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />' +
        '<meta http-equiv="X-UA-Compatible" content="IE=edge" />' +
        '<meta name="viewport" content="width=device-width, initial-scale=1.0" />' +
        '</head>' +
        '<body>' +
        '<form action="/review" method="post">' +
        '<label for="home_textarea">Enter review</label>' +
        '<br />' +
        '<textarea name="text" id="home_textarea" cols="30" rows="10"></textarea>' +
        '<br />' +
        '<button type="submit">Submit</button>' +
        '<br />' +
        '</form>' +
        '</body>' +
        '</html>';
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(htmlResponse);
    response.end();
}
function review(response, reviewData) {
    var htmlResponse =
        '<!DOCTYPE html>' +
        '<html lang="en">' +
        '<head>' +
        '<meta http-equiv="X-UA-Compatible" content="IE=edge" />' +
        '<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />' +
        '<meta name="viewport" content="width=device-width, initial-scale=1.0" />' +
        '</head>' +
        '<body>' +
        '<label for="review_input">Your review</label>' +
        '<br />' +
        `<input id="review_input" type="text" value="${querystring.parse(reviewData).text}"/>` +
        '</body>' +
        '</html>';
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(htmlResponse);
    response.end();
}
exports.home = home;
exports.review = review;
