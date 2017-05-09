 var aviones;
  var avion;
  function pageLoad(event){
	  
    var id=document.getElementById("id"); 
    var anno=document.getElementById("anno");
	var modelo=document.getElementById("modelo");
	var marca=document.getElementById("marca");
    var cantFilas=document.getElementById("cantFilas");
	var opciones=document.getElementById("opciones");

	
	
	id.addEventListener("focus",doFocus);
    id.addEventListener("blur",doBlur);
	
	anno.addEventListener("focus",doFocus);
    anno.addEventListener("blur",doBlur);
	
	modelo.addEventListener("focus",doFocus);
    modelo.addEventListener("blur",doBlur);
	
	marca.addEventListener("focus",doFocus);
    marca.addEventListener("blur",doBlur); 

    cantFilas.addEventListener("focus",doFocus);
    cantFilas.addEventListener("blur",doBlur);	
	
	opciones.addEventListener("focus",doFocus);
    opciones.addEventListener("blur",doBlur);
	
	
	var formulario=document.getElementById("formulario");
    formulario.addEventListener("submit",doValidate);
	
	aviones = Storage.retrieve("aviones");
   
   if (aviones == null){
		aviones=[];
		Storage.store("aviones",aviones);
	}
	
		listAviones(aviones);
	
  }
 
  function doFocus(event){
    event.target.classList.add("focus");
  }

  function doBlur(event){
    event.target.classList.remove("focus");
  }

  function doValidate(event){
    var id=document.getElementById("id"); 
    var anno=document.getElementById("anno");
	var modelo=document.getElementById("modelo");
	var marca=document.getElementById("marca");
	var cantFilas=document.getElementById("cantFilas");
	var opciones=document.getElementById("opciones");
	var error=false;
	
	id.classList.remove("invalid");
	if (id.value.length==0){
		id.classList.add("invalid");
		error=true;
	}
	
	anno.classList.remove("invalid");
	if (anno.value.length==0){
		anno.classList.add("invalid");
		error=true;
	}
	
	anno.classList.remove("invalid");
	if (anno.value.length==0){
		anno.classList.add("invalid");
		error=true;
	}

	modelo.classList.remove("invalid");
	if (modelo.value.length==0){
		modelo.classList.add("invalid");
		error=true;
	}

	marca.classList.remove("invalid");
	if (marca.value.length==0){
		marca.classList.add("invalid");
		error=true;
	}
	

	
	cantFilas.classList.remove("invalid");
	if (cantFilas.value.length==0){
		cantFilas.classList.add("invalid");
		error=true;
	}
	
	opciones.classList.remove("invalid");
	if (opciones.value.length==0){
		opciones.classList.add("invalid");
		error=true;
	}
		
	
	if(encontrarAvion(id.value)){
			error=true;
			window.alert("Ya hay un Avion con ese id");
		}
	
	if (error){event.preventDefault();}  
  }

  
  function doSubmit(){
    
	var id=document.getElementById("id"); 
	var anno=document.getElementById("anno"); 
    var modelo=document.getElementById("modelo");
    var marca=document.getElementById("marca");	
	var cantFilas=document.getElementById("cantFilas");	
	var opciones=document.getElementById("opciones");
	var cantPas=opciones.value * cantFilas.value;
	

	avion = new Avion(id.value,anno.value,modelo.value,marca.value,cantPas,cantFilas.value,opciones.value);
	aviones.push(avion);
	Storage.store("aviones",aviones);
	
	
    var listado=document.getElementById("listado");
	listAvion(listado,avion);
	
	
	
	window.alert("Data sent: "+avion.completo("-"));
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
 

 function encontrarAvion(id){
	 return aviones.find(function(x) {return x.identificador == id;});
 }	
 
  function listAviones(avis){
	var listado=document.getElementById("listado");
	listado.innerHTML="";
	for (i=0;i<avis.length;i++){
	  listAvion(listado,avis[i]);
	}
  }

  function listAvion(listado,avi){
	var tr =document.createElement("tr");
	//tr.addEventListener("click",showAvion);
	tr.id = avi.id;
	var td;
	
	td=document.createElement("td");
	td.appendChild(document.createTextNode(avi.identificador));
	tr.appendChild(td);
	
	td=document.createElement("td");
	td.appendChild(document.createTextNode(avi.anno));
	tr.appendChild(td);
	
	td =document.createElement("td");
	td.appendChild(document.createTextNode(avi.modelo));
	tr.appendChild(td);
	
	td =document.createElement("td");
	td.appendChild(document.createTextNode(avi.marca));
	tr.appendChild(td);
	
	td =document.createElement("td");
	td.appendChild(document.createTextNode(avi.cantFilas));
	tr.appendChild(td);
	
	td =document.createElement("td");
	td.appendChild(document.createTextNode(avi.cantAsientos));
	tr.appendChild(td);
	
	td =document.createElement("td");
	td.appendChild(document.createTextNode(avi.cantPas));
	tr.appendChild(td);
	
	
	td= document.createElement("td");
    img= document.createElement("img");
    img.src="imagenes/delete.png";
	img.title="Eliminar"
    img.addEventListener("click", function(e){doDelete(avi);});
    td.appendChild(img);
    tr.appendChild(td);
	
	
	listado.appendChild(tr);  
  }
 
 function doDelete(avi){
	if (!confirm("Esta Seguro?")) return;
	var index = aviones.findIndex(function(x){return x.identificador==avi.identificador; });
    if (index != -1){
	    aviones.splice(index,1);
		Storage.store("aviones",aviones);
		listAviones(aviones);
	}
	
  }
 
 
 document.addEventListener("DOMContentLoaded",pageLoad)
 