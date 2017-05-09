 // funcion Horario
function Horario (id,fechSalida,horaSalida,fechLlegada,horaLlegada,precio){ 
  this.Horario(id,fechSalida,horaSalida,fechLlegada,horaLlegada,precio);
}

// prototype asociado a la funcion Persona
// solo metodos
Horario.prototype={ 
  Horario: function(id,fechSalida,horaSalida,fechLlegada,horaLlegada,precio){
	this.id=id;
	this.horaSalida=horaSalida;
    this.horaLlegada=horaLlegada;
	this.fechSalida=fechSalida;
	this.fechLlegada=fechLlegada;
	this.precio=precio;
  }
};