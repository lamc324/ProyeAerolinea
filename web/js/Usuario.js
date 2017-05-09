 // funcion Persona
function Usuario (usuario,contraseña, nombre ,apellidos, email, fechaNac, telefono, celular, direccion){ 
  this.Usuario(usuario,contraseña, nombre ,apellidos, email, fechaNac, telefono, celular, direccion);
}

// prototype asociado a la funcion Estudiante
// solo metodos
Usuario.prototype={ 
  Usuario: function(usuario,contraseña, nombre ,apellidos, email, fechaNac, telefono, celular, direccion){
    this.usuario=usuario;
    this.contraseña=contraseña;
	this.nombre=nombre;
	this.apellidos=apellidos;
	this.email=email;
	this.fechaNac=fechaNac;
	this.telefono=telefono;
	this.celular=celular;
	this.direccion=direccion;
	},
  completo: function (sep) { return this.nombre + sep + this.apellidos + sep + this.usuario; }
}