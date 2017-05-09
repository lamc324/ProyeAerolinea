  var usuarios;
  var usuario;
  function pageLoad(event){
	  
    var usuario=document.getElementById("usuario"); 
    var contrasena=document.getElementById("contrasena");
	var contrasena2=document.getElementById("contrasena2");
	var nombre=document.getElementById("nombre");
	var apellidos=document.getElementById("apellidos");
	var email=document.getElementById("email"); 
    var fechaNac=document.getElementById("fechaNac");
	var telefono=document.getElementById("telefono");
	var celular=document.getElementById("celular");
	var direccion=document.getElementById("direccion");
	
	
	usuario.addEventListener("focus",doFocus);
    usuario.addEventListener("blur",doBlur);
	
	contrasena.addEventListener("focus",doFocus);
    contrasena.addEventListener("blur",doBlur);
	
	contrasena2.addEventListener("focus",doFocus);
    contrasena2.addEventListener("blur",doBlur);
	
	nombre.addEventListener("focus",doFocus);
    nombre.addEventListener("blur",doBlur); 
	
    apellidos.addEventListener("focus",doFocus);
    apellidos.addEventListener("blur",doBlur); 
	
    email.addEventListener("focus",doFocus);
    email.addEventListener("blur",doBlur);	
	
	fechaNac.addEventListener("focus",doFocus);
    fechaNac.addEventListener("blur",doBlur);
	
	telefono.addEventListener("focus",doFocus);
    telefono.addEventListener("blur",doBlur);	
	
	celular.addEventListener("focus",doFocus);
    celular.addEventListener("blur",doBlur);

	direccion.addEventListener("focus",doFocus);
    direccion.addEventListener("blur",doBlur);
	
	var formulario=document.getElementById("formulario");
    formulario.addEventListener("submit",doValidate);
	
	usuarios = Storage.retrieve("usuarios");
   
   if (usuarios == null){
		usuarios=[];
		Storage.store("usuarios",usuarios);
	}
	
	
	
  }
 
  function doFocus(event){
    event.target.classList.add("focus");
  }

  function doBlur(event){
    event.target.classList.remove("focus");
  }

  function doValidate(event){
    var usuario=document.getElementById("usuario"); 
    var contrasena=document.getElementById("contrasena");
	var contrasena2=document.getElementById("contrasena2");
	var nombre=document.getElementById("nombre");
    var apellidos=document.getElementById("apellidos");	
	var email=document.getElementById("email");
	var fechaNa=document.getElementById("fechaNac");
	var celular=document.getElementById("celular");	
	var direccion=document.getElementById("direccion");
	var error=false;
	
	usuario.classList.remove("invalid");
	if (usuario.value.length==0){
		usuario.classList.add("invalid");
		error=true;
	}
	

	
	contrasena2.classList.remove("invalid");
	contrasena.classList.remove("invalid");
	if (contrasena2.value!=contrasena.value){
		contrasena.classList.add("invalid");
		contrasena2.classList.add("invalid");
		error=true;
	}
	
	contrasena.classList.remove("invalid");
	if (contrasena.value.length==0){
		contrasena.classList.add("invalid");
		error=true;
	}
	
	if (contrasena2.value.length==0){
		contrasena2.classList.add("invalid");
		error=true;
	}

	nombre.classList.remove("invalid");
	if (nombre.value.length==0){
		nombre.classList.add("invalid");
		error=true;
	}

	apellidos.classList.remove("invalid");
	if (apellidos.value.length==0){
		apellidos.classList.add("invalid");
		error=true;
	}
	
	email.classList.remove("invalid");
	if (email.value.length==0){
		email.classList.add("invalid");
		error=true;
	}
	
	fechaNac.classList.remove("invalid");
	if (fechaNac.value.length==0){
		fechaNac.classList.add("invalid");
		error=true;
	}
	
	celular.classList.remove("invalid");
	if (celular.value.length==0){
		celular.classList.add("invalid");
		error=true;
	}
	
  direccion.classList.remove("invalid");
	if (direccion.value.length==0){
		direccion.classList.add("invalid");
		error=true;
	}
	
	
	if(encontrarUsuario(usuario.value)){
			error=true;
			window.alert("Ya hay alguien con ese Usuario");
		}
	
	if (error){event.preventDefault();}  
  }

  
  function doSubmit(){
    
	var usuario=document.getElementById("usuario"); 
	var contrasena=document.getElementById("contrasena"); 
    var nombre=document.getElementById("nombre");
    var apellidos=document.getElementById("apellidos");	
	var email=document.getElementById("email");	
	var fechaNac=document.getElementById("fechaNac");	
	var telefono=document.getElementById("telefono");
	var celular=document.getElementById("celular");	
	var direccion=document.getElementById("direccion");	
	

	usuario = new Usuario(usuario.value,contrasena.value, nombre.value ,apellidos.value, email.value, fechaNac.value, telefono.value, celular.value, direccion.value);
	usuarios.push(usuario);
	Storage.store("usuarios",usuarios);
	
	

	
	window.alert("Data sent: "+usuario.completo("-"));
    var formulario=document.getElementById("formulario");
    formulario.reset();	
  }


  
 /*function actualizarDatos() {
		var carnet=document.getElementById("carnet");
		var apellidos=document.getElementById("apellidos");
		var nombre=document.getElementById("nombre");
		var est = encontrarEstudiante(carnet.value);
		if(est) {
			est.apellidos=apellidos.value;
			est.nombre=nombre.value;
			Storage.store("estudiantes",estudiantes);
			listEstudiantes(estudiantes);
		}
	}*/
 

 function encontrarUsuario(usuario){
	 return usuarios.find(function(x) {return x.usuario == usuario;});
 }	
 
 
 document.addEventListener("DOMContentLoaded",pageLoad)
 