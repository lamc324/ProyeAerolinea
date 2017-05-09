

var JsonUtils = JsonUtils || {};

JsonUtils.revive = function (k,v){
     if (v instanceof Object && v._class === 'Ruta') {
	return new Ruta(v.identificador,v.lOrigen,v.lDestino,v.duracion,v.horario);
    }
    
    if (v instanceof Object && v._class === 'Ciudad') {
        return new Ciudad(v.nombre,v.zonaHoraria);
    }
    
    if (v instanceof Object && v._class === 'Vuelo') {
        return new Vuelo(v.identificador,v.avion,v.ruta);
    }
    
    if (v instanceof Object && v._class === 'Horario') {
        return new Horario(v.id,v.fechSalida,v.horaSalida,v.fechLlegada,v.horaLlegada,v.precio);
    }
    
     if (v instanceof Object && v._class === 'Avion') {
        return new Avion(v.identificador,v.anno,v.modelo,v.marca,v.cantPas,v.cantFilas,v.cantAsientos);
    }
    
    return v;
},

JsonUtils.replacer = function (k,v) {
    
    if (v instanceof Ciudad) {
        v._class="Ciudad";
    }
    
    if (v instanceof Ruta) {
        v._class="Ruta";
    }
    
    if (v instanceof Horario) {
        v._class="Horario";
    }
    
    if (v instanceof Vuelo) {
        v._class="Vuelo";
    }
                
    if (v instanceof Avion) {
        v._class="Avion";
    }
		
    return v;

};
