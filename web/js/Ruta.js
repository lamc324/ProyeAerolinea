
function Ruta (identificador,lOrigen,lDestino,duracion,horario){ 
  this.Ruta(identificador,lOrigen, lDestino,duracion,horario);
}

Ruta.prototype={ 
  Ruta: function(identificador,lOrigen,lDestino,duracion, horario){
    this.identificador=identificador;
    this.lOrigen=lOrigen;
	this.lDestino=lDestino;
	this.duracion=duracion;
	this.horario=horario;
  },
  completo: function (sep) { return this.identificador; }
}