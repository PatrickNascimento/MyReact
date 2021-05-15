var request = require('request');

request.post(
    'http://10.1.1.117:8080/api/authenticate', {
        json: {
            email: 'patrick@microvision.com.br',
            password: '123456',
            company_uuid: "37.005.623/0001-67"
        }
    },
    function(error, response, body) {
        if (!error && response.statusCode == 200) {
            // console.log(body.token)

            const options = {
                url: 'http://10.1.1.117:8080/api/seller',
                method: 'GET',
                headers: {
                    'x-access-token': body.token
                }
            };

            request(options, function(err, res, body) {
                let json = JSON.parse(body);
                console.log(json);
            });

        } else {
            console.log('Error ', response.statusCode);
        }
    }
);
