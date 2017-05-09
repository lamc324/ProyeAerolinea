 function Ciudad (nombre,zonaHoraria){ 
  this.Ciudad(nombre,zonaHoraria);
}

Ciudad.prototype={ 
  Ciudad: function(nombre,zonaHoraria){
	this.nombre=nombre;
    this.zonaHoraria=zonaHoraria;
  },
}