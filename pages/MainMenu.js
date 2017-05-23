var Observable = require("FuseJS/Observable");

function gotoServicioGrua(){
	router.push("servicioGrua");
}

function gotoConsultaRunt(){
	router.push("consultaRunt");
}

function gotoConsultaSimit(){
	router.push("consultaSimit");
}

function gotoNotificaciones(){
	router.push("notificaciones");
}

module.exports = {
	gotoServicioGrua: gotoServicioGrua,
	gotoConsultaSimit: gotoConsultaSimit,
	gotoConsultaRunt: gotoConsultaRunt,
	gotoNotificaciones: gotoNotificaciones
};
