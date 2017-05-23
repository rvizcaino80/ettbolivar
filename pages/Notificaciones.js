var API = require("/Api.js");
var Observable = require("FuseJS/Observable");
var FileSystem = require("FuseJS/FileSystem");
var path = FileSystem.dataDirectory + "/" + "auth.tmp";

var name = Observable();
var email = Observable();
var password = Observable();
var aceptaNotificaciones = Observable(false);
var justSubscribed = Observable(false);
var isSubscribing = Observable(false);

function check(){
	FileSystem.exists(path)
	    .then(function(x) {
			FileSystem.readTextFromFile(path).then(function(contents) {
				var data = JSON.parse(contents);
				name.value = data.name;
				email.value = data.email;

				//loader.activate();

				API.notifications(email.value)
					.then(function(response){
						//loader.deactivate();

						if(response.acepta_notificaciones){
							aceptaNotificaciones.value = true;
						}else{
							aceptaNotificaciones.value = false;
						}
					});
			}, function(error) {
				console.log(error);
			});
	    }, function(error) {
	        console.log("Unable to check if file exists");
	    });
}


function goBack(){
	router.goBack();
}

function subscribe(){
	isSubscribing.value = true;
	API.notificationsSubscribe(email.value)
		.then(function(response){
			aceptaNotificaciones.value = true;
			isSubscribing.value = false;
			justSubscribed.value = true;
		});
}

module.exports = {
    aceptaNotificaciones: aceptaNotificaciones,
    goBack: goBack,
	check: check,
	subscribe: subscribe,
	justSubscribed: justSubscribed,
	isSubscribing: isSubscribing
};
