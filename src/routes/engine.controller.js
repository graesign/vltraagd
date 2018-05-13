const request = require('request');

exports.send_something = function (req, res, next) {
    const SomethingID = req.body.something;
    Something.findById(SomethingID, function(err, something) {
        if (err) {
            res.status(404).json({
                title: 'Something not found',
                error: {message: 'Something went wrong'}
            });
        }
        request({
            url: app.get('amazon-API:port/method'),
            method: "POST",
            json: something
        }, function (error, response, body) {
            // console.log(error) <--- returns null or error
            // console.log(response.statusCode <--- returns 200 / 403 / w.e
            // console.log(body) <--- returns response pure html
            res.status(200).json({
                message: 'Something successfully sent',
                response: body,
                status: response.statusCode
            });
        });
    })
};