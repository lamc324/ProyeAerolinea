 // funcion Avion
function Avion (identificador,anno,modelo,marca,cantPas,cantFilas,cantAsientos){ 
  this.Avion(identificador,anno,modelo,marca,cantPas,cantFilas,cantAsientos);
}

// prototype asociado a la funcion Persona
// solo metodos
Avion.prototype={ 
  Avion: function(identificador,anno,modelo,marca,cantPas,cantFilas,cantAsientos){
    this.identificador=identificador;
    this.anno=anno;
	this.modelo=modelo;
	this.marca=marca;
	this.cantPas=cantPas;
	this.cantFilas=cantFilas;
	this.cantAsientos=cantAsientos;
  },
  completo: function (sep) { return this.identificador; }
}