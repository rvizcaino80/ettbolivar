var ROOT_URL = "https://ettbolivar.com/api/";

function apiFetch(path, options) {
    var url = encodeURI(ROOT_URL + path);

    if(options === undefined) {
        options = {};
    }

    // If a body is provided, serialize it as JSON and set the Content-Type header
    if(options.body !== undefined) {
        options = Object.assign({}, options, {
            body: JSON.stringify(options.body),
            headers: Object.assign({}, options.headers, {
                "Content-Type": "application/json"
            })
        });
    }

    // Fetch the resource and parse the response as JSON
    return fetch(url, options)
        .then(function(response) {
            return response.json();
        }).
        then(function(responseObject){
            return responseObject;
        });
}

function login(email, password){
    return apiFetch("login", {
        method: 'POST',
        body: {
            email : email,
            password : password
        }
    });
}

function notifications(email){
    return apiFetch("notifications", {
        method: 'POST',
        body: {
            email : email
        }
    });
}

function notificationsSubscribe(email){
    return apiFetch("notifications/subscribe", {
        method: 'POST',
        body: {
            email : email
        }
    });
}


module.exports = {
    login: login,
    notifications: notifications,
    notificationsSubscribe: notificationsSubscribe
};
