var usuarios;
  var usuario;
  function pageLoad(event){
	  
    var user=document.getElementById("user"); 
    var contrasena=document.getElementById("contrasena");

	user.addEventListener("focus",doFocus);
    user.addEventListener("blur",doBlur);
	
	contrasena.addEventListener("focus",doFocus);
    contrasena.addEventListener("blur",doBlur);
	
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
    var usuario=document.getElementById("user"); 
    var contrasena=document.getElementById("contrasena");
	
	usuario.classList.remove("invalid");
	if (usuario.value.length==0){
		usuario.classList.add("invalid");
		error=true;
	}
	
	contrasena.classList.remove("invalid");
	if (contrasena.value.length==0){
		contrasena.classList.add("invalid");
		error=true;
	}
		
/*	if(encontrarUsuario(usuario.value)){
			error=true;
			window.alert("Ya hay alguien con ese Usuario");
		}
	
	if (error){event.preventDefault();}  
  */
  }

  
  function doSubmit(){
    var user=document.getElementById("user");
	usuario = encontrarUsuario(user.value);
    if (usuario != null){
		window.alert("Puede acceder al sitio");
	}
	else{
		window.alert("Nombre de usuario o clave incorrectas");
	}
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