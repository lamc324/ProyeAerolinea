 // funcion Vuelo
function Vuelo (identificador,avion,ruta){ 
  this.Vuelo(identificador,avion,ruta);
}

// prototype asociado a la funcion Vuelo
// solo metodos
Vuelo.prototype={ 
  Vuelo: function(identificador,avion,ruta){
    this.identificador=identificador;
    this.avion=avion;
	this.ruta=ruta;
  },
  completo: function (sep) { return this.identificador; }
  }