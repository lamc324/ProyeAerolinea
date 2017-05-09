  var rutas;
  var ruta;
  var horarios;
  var horario;
  var ciudad;
  var ciudades = [];
  
  function pageLoad(event){
	  
	agregarCiudad();
	verCiudad();
	
    var id=document.getElementById("id"); 
    id.addEventListener("focus",id);
    id.addEventListener("blur",id); 
	
	var duracion=document.getElementById("duracion"); 
    duracion.addEventListener("focus",duracion);
    duracion.addEventListener("blur",duracion); 
	
	var precio=document.getElementById("precio"); 
    precio.addEventListener("focus",doFocus);
    precio.addEventListener("blur",doBlur); 
	
	var formulario=document.getElementById("formulario");
    formulario.addEventListener("submit",doValidate);
   
	rutas = Storage.retrieve("rutas");
   
   if (rutas == null){
		rutas=[];
		Storage.store("rutas",rutas);
	}
	
	listRutas(rutas);
	
  }
 
  function doFocus(event){
    event.target.classList.add("focus");
  }

  function doBlur(event){
    event.target.classList.remove("focus");
  }

  function agregarCiudad(){
	
	ciudad = new Ciudad('Costa Rica', '-6');
	ciudades.push(ciudad);
	
	ciudad = new Ciudad('Panama', '-5');
	ciudades.push(ciudad);
	
	ciudad = new Ciudad('Nueva York', '-4');
	ciudades.push(ciudad);
	
	ciudad = new Ciudad('Buenos Aires', '-3');
	ciudades.push(ciudad);
	
	ciudad = new Ciudad('Los Angeles', '-7');
	ciudades.push(ciudad);
	   

  }
  
  function verCiudad(){
	var lOrigen=document.getElementById("lOrigen"); 
	var lDestino=document.getElementById("lDestino");
   
   for(i = 0; i < ciudades.length; i++){
		lDestino.options[i] = new Option(ciudades[i].nombre);
		lOrigen.options[i] = new Option(ciudades[i].nombre);
	} 
  }
  
  function doValidate(event){
    var id=document.getElementById("id"); 
	var duracion=document.getElementById("duracion");
    var precio=document.getElementById("precio"); 
    var fechSalida=document.getElementById("fechSalida");	
	var horaSalida=document.getElementById("horaSalida");	
		
	var error=false;
	
	id.classList.remove("invalid");
	if (id.value.length==0){
		id.classList.add("invalid");
		error=true;
	}
	
	precio.classList.remove("invalid");
	if (precio.value.length==0){
		precio.classList.add("invalid");
		error=true;
	}

	lOrigen.classList.remove("invalid");
	if (lOrigen.value.length==0){
		lOrigen.classList.add("invalid");
		error=true;
	}

	lDestino.classList.remove("invalid");
	if (lDestino.value.length==0){
		lDestino.classList.add("invalid");
		error=true;
	}
	
	duracion.classList.remove("invalid");
	if (duracion.value.length==0){
		duracion.classList.add("invalid");
		error=true;
	}
	
	fechSalida.classList.remove("invalid");
	if (fechSalida.value.length==0){
		fechSalida.classList.add("invalid");
		error=true;
	}
	
	horaSalida.classList.remove("invalid");
	if (horaSalida.value.length==0){
		horaSalida.classList.add("invalid");
		error=true;
	}
	
	
	if(encontrarRuta(id.value)){
			error=true;
			window.alert("Ya existe una ruta con ese id");
		}
	
	if (error){event.preventDefault();}  
  }
  
  function encontrarRuta(id){
	 return rutas.find(function(x) {return x.identificador == id;});
 }	
 
  function encontrarCiudad(nombre){
	 return ciudades.find(function(x) {return x.nombre == nombre;});
 }	
 
  function doSubmit(){
    
	var id=document.getElementById("id"); 
    var lOrigen=document.getElementById("lOrigen");
    var lDestino=document.getElementById("lDestino");
	var duracion=document.getElementById("duracion");	
	var dur=document.getElementById("dur");
	var precio=document.getElementById("precio"); 
    var fechSalida=document.getElementById("fechSalida");
	var horaSalida=document.getElementById("horaSalida");	
	
	origen = encontrarCiudad(lOrigen.value);
	destino = encontrarCiudad(lDestino.value);
	
	horLleg = calcularllegada(origen,destino);
	
    horario = new Horario(id.value, fechSalida.value,horaSalida.value,fechSalida.value,horLleg,precio.value);
		
	ruta = new Ruta(id.value,origen,destino, duracion.value +" "+dur.value, horario);
	rutas.push(ruta);
	Storage.store("rutas",rutas);

	var listado=document.getElementById("listado");
	listRuta(listado,ruta);
	
	window.alert("Ruta agregada ");
    var formulario=document.getElementById("formulario");
    formulario.reset();	
	
  }
 
  function calcularllegada(origen,destino){
	  var dur=document.getElementById("dur");
	  horaSalida = document.getElementById("horaSalida");
	  duracion = document.getElementById("duracion");
	  var lorigen = parseInt(origen.zonaHoraria);
	  var ldestino = parseInt(destino.zonaHoraria);
	  var horSalida = parseInt(horaSalida.value.substr(0,2));
	  var minSalida = parseInt(horaSalida.value.substr(3,2));
	  var horaLleg, minLleg, dif;
	  var hrs = parseInt(duracion.value);
	  	 
	  dif =  parseInt(lorigen - ldestino);
	   	
	  if(lorigen == ldestino){
		horaLleg= horSalida;
	  } else{
		  horaLleg= horSalida-dif; 
	  }

	 
	  if(dur.value == "min"){
		  minLleg = minSalida+hrs;
		  if(minLleg >= 60){
			  horaLleg++;
			  minLleg = minLleg - 60;
		  }		  
	  }
	  else{
		  horaLleg = horaLleg+hrs;
		  minLleg = minSalida;
		  
	  }
	  
	  if(minLleg<10)
		  minLleg= "0"+minLleg;
	 
	  return (horaLleg+ ":"+minLleg);
  }
  
  function listRutas(rts){
	var listado=document.getElementById("listado");
	listado.innerHTML="";
	for (i=0;i<rts.length;i++){
	  listRuta(listado,rts[i]);
	}
  }

  function listRuta(listado,rt){
	var tr =document.createElement("tr");
	//tr.addEventListener("click",showRuta);
	var td;
	
	td=document.createElement("td");
	td.appendChild(document.createTextNode(rt.identificador));
	tr.appendChild(td);
	
	td=document.createElement("td");
	td.appendChild(document.createTextNode(rt.lOrigen.nombre));
	tr.appendChild(td);
	
	td =document.createElement("td");
	td.appendChild(document.createTextNode(rt.lDestino.nombre));
	tr.appendChild(td);
	
	td=document.createElement("td");
	td.appendChild(document.createTextNode(rt.horario.fechSalida));
	tr.appendChild(td);
	
	td =document.createElement("td");
	td.appendChild(document.createTextNode(rt.horario.horaSalida));
	tr.appendChild(td);
	
	td=document.createElement("td");
	td.appendChild(document.createTextNode(rt.horario.fechLlegada));
	tr.appendChild(td);
	
	td =document.createElement("td");
	td.appendChild(document.createTextNode(rt.horario.horaLlegada));
	tr.appendChild(td);
	
	td=document.createElement("td");
	td.appendChild(document.createTextNode(rt.duracion));
	tr.appendChild(td);
	
	
	td =document.createElement("td");
	td.appendChild(document.createTextNode(rt.horario.precio));
	tr.appendChild(td);
	
	td= document.createElement("td");
    img= document.createElement("img");
    img.src="images/delete.png";
	img.title="Eliminar" //para que aparezca en el navegador
    img.addEventListener("click", function(e){doDelete(rt);});
    td.appendChild(img);
    tr.appendChild(td);
	
	
	listado.appendChild(tr);  
  }

 
   function doDelete(rt){
	if (!confirm("Esta Seguro?")) return;
	var index = rutas.findIndex(function(x){return x.identificador==rt.identificador; }); //busca la posicion en la tabla de la persona
    if (index != -1){
	    rutas.splice(index,1); //toma uno y lo elimina
		Storage.store("rutas",rutas);
		listRutas(rutas);
	}
   }
 document.addEventListener("DOMContentLoaded",pageLoad)
 