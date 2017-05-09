  var aviones =[];
  var avion;
  var rutas =[];
  var ruta;
  var horario;
  var horarios=[];
  var vuelo;
  var vuelos=[];
  var ciuOrigen=[];
  var ciuDestino=[];
  var ciudades=[];
  
  function pageLoad(event){
	document.getElementById('o').style.display='none';
	document.getElementById('p').style.display='none';
	
	inputAviones();
	inputRutas();
	inputHorarios();
	inputVuelo();
	
	agregarAviones();
	agregarCiudad();
	agregarHorarios();
	agregarRutas();
	verCiudad();
	
	var buscarAvion = document.getElementById("buscarAvion");
    buscarAvion.addEventListener("click", buscarAviones);
	
	var buscarRuta = document.getElementById("buscarRuta");
    buscarRuta.addEventListener("click", buscarRutas);
		
	var formulario=document.getElementById("formulario");
    formulario.addEventListener("submit",doValidate);
 
	var regresarD = document.getElementById("regresarD");
    regresarD.addEventListener("click", regresar);
		
	listAviones(aviones);
	listRutas(rutas);
	
	vuelos = Storage.retrieve("vuelos");
   
   if (vuelos == null){
		vuelos=[];
		Storage.store("vuelos",vuelos);
	}
	
	listVuelos(vuelos);
	
  }
  function regresar(){
	document.getElementById('o').style.display='none';
	document.getElementById('p').style.display='none';
	
  }
  function inputVuelo(){
	
	var avionV=document.getElementById("avionV"); 
    var rutaV=document.getElementById("rutaV");
	var idVuelo=document.getElementById("idVuelo");
	
	avionV.addEventListener("focus",doFocus);
    avionV.addEventListener("blur",doBlur); 
	rutaV.addEventListener("focus",doFocus);
    rutaV.addEventListener("blur",doBlur); 
    idVuelo.addEventListener("focus",doFocus);
    idVuelo.addEventListener("blur",doBlur); 
  }
 
 function inputAviones(){
	
	var idAvion=document.getElementById("idAvion"); 
    var marcaAv=document.getElementById("marcaAv");
	var modAvion=document.getElementById("modAvion");
	var cantPasAv=document.getElementById("cantPasAv");
	
	idAvion.addEventListener("focus",doFocus);
    idAvion.addEventListener("blur",doBlur); 
	marcaAv.addEventListener("focus",doFocus);
    marcaAv.addEventListener("blur",doBlur); 
    modAvion.addEventListener("focus",doFocus);
    modAvion.addEventListener("blur",doBlur); 
	cantPasAv.addEventListener("focus",doFocus);
    cantPasAv.addEventListener("blur",doBlur); 
	
	
  }
  
  function inputRutas(){
	
	var idRuta=document.getElementById("idRuta"); 
    var lugarOr=document.getElementById("lugarOr");
	var lugarDes=document.getElementById("lugarDes");
	
	idRuta.addEventListener("focus",doFocus);
    idRuta.addEventListener("blur",doBlur); 
  }
  
  function inputHorarios(){
	
	var diaSalida=document.getElementById("diaSalida"); 
    var horaSalida=document.getElementById("horaSalida");
	var diaLlegada=document.getElementById("diaLlegada");
	var horaLlegada=document.getElementById("horaLlegada");
	
	diaSalida.addEventListener("focus",doFocus);
    diaSalida.addEventListener("blur",doBlur); 
	horaSalida.addEventListener("focus",doFocus);
    horaSalida.addEventListener("blur",doBlur); 
    diaLlegada.addEventListener("focus",doFocus);
    diaLlegada.addEventListener("blur",doBlur); 
	horaLlegada.addEventListener("focus",doFocus);
    horaLlegada.addEventListener("blur",doBlur); 
	
	
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

   lOrigen.options[0] = new Option(" ");
   lDestino.options[0] = new Option(" ");
		
   for(j = 0; j < rutas.length; j++){
	   if (!encontrarOrigen(rutas[j].lOrigen.nombre))
		   ciuOrigen.push(rutas[j].lOrigen);
	   if (!encontrarDestino(rutas[j].lDestino.nombre))
		   	  ciuDestino.push(rutas[j].lDestino);
   }
    
   for(i = 0; i < ciuOrigen.length; i++){
		lOrigen.options[i+1] = new Option(ciuOrigen[i].nombre);
		
	} 
	
	 for(i = 0; i < ciuDestino.length; i++){
		lDestino.options[i+1] = new Option(ciuDestino[i].nombre);
	} 
  }
 
 function agregarAviones(){
	  avion = new Avion("001","2002","200","Max-270","333","37","9");
	  aviones.push(avion);
	  
	  avion = new Avion("002","2012","210","Max-280","360","40","9");
	  aviones.push(avion);
	  
	  avion = new Avion("003","2013","300","Min-270","600","50","6");
	  aviones.push(avion);
  }
  
  function agregarRutas(){
	  ruta = new Ruta("001",ciudades[0],ciudades[2],"3hrs", horarios[0]);
	  rutas.push(ruta);
	  
	  ruta = new Ruta("002",ciudades[0],ciudades[3],"12hrs", horarios[1]);
	  rutas.push(ruta);
	  
	  ruta = new Ruta("003",ciudades[4],ciudades[0],"6hrs", horarios[2]);
	  rutas.push(ruta);
	  
	  ruta = new Ruta("004",ciudades[0],ciudades[4],"6hrs", horarios[2]);
	  rutas.push(ruta);
  }
 
 function agregarHorarios(){
	  horario = new Horario("001","2018-02-12","12:00pm","2018-02-12","4:oopm","$400");
	  horarios.push(horario);
	  
	  horario = new Horario("002","2017-06-29","8:00am","2017-06-30","8:ooam","$800");
	  horarios.push(horario);
	  
	  horario = new Horario("003","2017-10-03","9:00am","2017-10-03","3:oopm","$600");
	  horarios.push(horario);
  }
 
  function doFocus(event){
    event.target.classList.add("focus");
  }

  function doBlur(event){
    event.target.classList.remove("focus");
  }

  //Aviones
  function encontrarAvion(id){   
	 return aviones.find(function(x) {return x.identificador == id;});
 }	
  
  function buscarAviones(event) {
      var id = document.getElementById("idAvion").value;
      if(id!="")
		  listAviones(porIdAvion(id));
	  
	  var marca = document.getElementById("marcaAv").value;
      if(marca!="")
		listAviones(porMarca(marca));
	  
	  var modelo = document.getElementById("modAvion").value;
	  if(modelo!="")	
		listAviones(porModelo(modelo));
	  
	  var cantidad = document.getElementById("cantPasAv").value;
      if(cantidad!="")
		listAviones(porCantidad(cantidad));
	 
	 if(id =="" && marca =="" && modelo=="" && cantidad=="")
	  listAviones(aviones);
	
	var formulario=document.getElementById("formulario");
    formulario.reset();	
	  
  }
  
  function porIdAvion(id) {
	  return aviones.filter( (av) => av.identificador.indexOf(id) > -1 );
    }
  
  function porMarca(marca) {
	 return aviones.filter( (av) => av.marca.toLowerCase().indexOf(marca.toLowerCase()) > -1 );
    }
  
  function porModelo(modelo) {
		return aviones.filter( (av) => av.modelo.toLowerCase().indexOf(modelo.toLowerCase()) > -1 );
    }
  
  function porCantidad(cantidad) {
	  
		return aviones.filter( (av) => av.cantPas.indexOf(cantidad) > -1 );
    }
  
  //Horarios
  
  function encontrarHorario(id){   
	 return horarios.find(function(x) {return x.id == id;});
 }	
 
  function porIdHorario(id,aux) {
	  return aux.filter( (rts) => rts.horario.id.indexOf(id) > -1 );
    }
  
  function pordiaSalida(diaSal,aux) {
	  return aux.filter( (rts) => rts.horario.fechSalida.indexOf(diaSal) > -1 );
    }
  
  function porhoraSalida(horaSal,aux) {
	 return aux.filter( (rts) =>rts.horario.horaSalida.toLowerCase().indexOf(horaSal.toLowerCase()) > -1 );
    }
  
  function pordiaLlegada(diaLleg,aux) {
		return aux.filter( (rts) => rts.horario.fechLlegada.toLowerCase().indexOf(diaLleg.toLowerCase()) > -1 );
    }
  
  function porhoraLlegada(horaLleg, aux) {
	  return aux.filter( (rts) => rts.horario.horaLlegada.toLowerCase().indexOf(horaLleg.toLowerCase()) > -1 );
    }
	  
	//Rutas
  function encontrarRuta(id){   
	 return rutas.find(function(x) {return x.identificador == id;});
 }	
 
 function encontrarDestino(nombre){   
	 return ciuDestino.find(function(x) {return x.nombre == nombre;});
 }	
 
 function encontrarOrigen(nombre){   
	 return ciuOrigen.find(function(x) {return x.nombre == nombre;});
 }	
 
 function buscarRutas(event) {
      var id = document.getElementById("idRuta").value;
      var lugarOr = document.getElementById("lOrigen").value;
      var lugarDes = document.getElementById("lDestino").value;
	  var diaSal = document.getElementById("diaSalida").value; 
	  var horaSal = document.getElementById("horaSalida").value; 
	  var diaLleg = document.getElementById("diaLlegada").value;
	  var horaLleg = document.getElementById("horaLlegada").value;
   
     if(id =="" && lugarOr =="" && lugarDes=="" && diaSal =="" && horaSal =="" && horaLleg=="" && diaLleg=="")
	    listRutas(rutas);
		
	  else 
		valorRutas(id,lugarOr,lugarDes,diaSal,horaSal,diaLleg,horaLleg);

  }
  
  function valorRutas(id,lugarOr,lugarDes,diaSal,horaSal,diaLleg,horaLleg){
		aux=rutas;
	 if(id!="")
		  aux= porIdRuta(id,aux);
	  
	  if(lugarOr!="")
		aux= porOrigen(lugarOr,aux);
	  
	  if(lugarDes!="")	
		aux = porDestino(lugarDes,aux);
	
	  if(diaSal!="")
		aux= pordiaSalida(diaSal,aux);
	  
	  if(horaSal!="")
		aux= porhoraSalida(horaSal,aux);
	  
	  if(diaLleg!="")	
		aux = pordiaLlegada(diaLleg,aux);
	
	 if(horaLleg!="")	
		aux = porhoraLlegada(horaLleg,aux);
	
		listRutas(aux);
  }
  
  function porIdRuta(id,aux) {
	  return rutas.filter( (rts) => rts.identificador.indexOf(id) > -1 );
    }
  
  function porOrigen(lOrigen,aux) {
	 return aux.filter( (rts) => rts.lOrigen.nombre.toLowerCase().indexOf(lOrigen.toLowerCase()) > -1 );
    }
  
  function porDestino(lDestino,aux) {
	 return aux.filter( (rts) => rts.lDestino.nombre.toLowerCase().indexOf(lDestino.toLowerCase()) > -1 );
   
  }
	  
	//Listas

 function listAviones(avs){
	var listadoAvion=document.getElementById("listadoAvion");
	listadoAvion.innerHTML="";
	for (i=0;i<avs.length;i++){
	  listAvion(listadoAvion,avs[i]);
	}
  }
  
  function listRutas(rts){
	var listadoRuta=document.getElementById("listadoRuta");
	listadoRuta.innerHTML="";
	for (i=0;i<rts.length;i++){
	  listRuta(listadoRuta,rts[i]);
	}
  }

  function listAvion(listado,av){
	  
	var tr =document.createElement("tr");
	tr.id = av.identificador;
	tr.addEventListener("click", llenarAvion);
	var td;

	
	td=document.createElement("td");
	td.appendChild(document.createTextNode(av.identificador));
	tr.appendChild(td);
	
	td=document.createElement("td");
	td.appendChild(document.createTextNode(av.marca));
	tr.appendChild(td);
	
	td =document.createElement("td");
	td.appendChild(document.createTextNode(av.modelo));
	tr.appendChild(td);
	
	td=document.createElement("td");
	td.appendChild(document.createTextNode(av.anno));
	tr.appendChild(td);
	
	td=document.createElement("td");
	td.appendChild(document.createTextNode(av.cantPas));
	tr.appendChild(td);
	
	td =document.createElement("td");
	td.appendChild(document.createTextNode(av.cantFilas));
	tr.appendChild(td);
	
	td =document.createElement("td");
	td.appendChild(document.createTextNode(av.cantAsientos));
	tr.appendChild(td);
	
	listadoAvion.appendChild(tr);  
  }
 
 function listRuta(listado,rts){
	var tr =document.createElement("tr");
	tr.id = rts.identificador;
	tr.addEventListener("click", llenarRuta);
	
	var td;
	
	td=document.createElement("td");
	td.appendChild(document.createTextNode(rts.identificador));
    tr.appendChild(td);
	
	td=document.createElement("td");
	td.appendChild(document.createTextNode(rts.lOrigen.nombre + " - "+ rts.lDestino.nombre));
	tr.appendChild(td);
	
	td=document.createElement("td");
	td.appendChild(document.createTextNode(rts.horario.fechSalida));
	tr.appendChild(td);
	
	td=document.createElement("td");
	td.appendChild(document.createTextNode(rts.horario.horaSalida));
	tr.appendChild(td);
	
	td=document.createElement("td");
	td.appendChild(document.createTextNode(rts.horario.fechLlegada));
	tr.appendChild(td);
	
	td =document.createElement("td");
	td.appendChild(document.createTextNode(rts.horario.horaLlegada));
	tr.appendChild(td);
	
	td=document.createElement("td");
	td.appendChild(document.createTextNode(rts.duracion));
	tr.appendChild(td);
	
	td=document.createElement("td");
	td.appendChild(document.createTextNode(rts.horario.precio));
	tr.appendChild(td);
	
	listadoRuta.appendChild(tr); 
  }
 
 
 //Vuelo
 function doValidate(event){
    var avionV=document.getElementById("avionV"); 
    var horarioV=document.getElementById("horarioV");
    var rutaV=document.getElementById("rutaV");	
	var idVuelo=document.getElementById("idVuelo"); 
	var error=false;
	
	idVuelo.classList.remove("invalid");
	if (idVuelo.value.length==0){
		idVuelo.classList.add("invalid");
		error=true;
	}

	avionV.classList.remove("invalid");
	if (avionV.value.length==0){
		avionV.classList.add("invalid");
		error=true;
	}
	
	rutaV.classList.remove("invalid");
	if (rutaV.value.length==0){
		rutaV.classList.add("invalid");
		error=true;
	}
	
	if(encontrarVuelo(idVuelo.value)){
			error=true;
			window.alert("Ya existe un alumno con este Vuelo");
		}
	
	if (error){event.preventDefault();}  
  }
 
 function encontrarVuelo(id){   
	 return vuelos.find(function(x) {return x.identificador == id;});
 }	
 
 function llenarAvion(e){
	var avionId= e.target.parentNode.id;
	var av=encontrarAvion(avionId);
	//window.alert(avionId);
		if(av) {
			var avionV=document.getElementById("avionV");
			avionV.value=av.identificador;
			//avionV.innerHTML=av.identificador;
		}
}

 function llenarRuta(e){
    var rutaId = e.target.parentNode.id;
	
	var rt=encontrarRuta(rutaId);
	window.alert("llenar "+rutaId);
	
		if(rt) {
			var rutaV=document.getElementById("rutaV");
			rutaV.value=rt.identificador;
		}
}

 function doSubmit(){
    
	var avionV=document.getElementById("avionV"); 
    var horarioV=document.getElementById("horarioV");
    var rutaV=document.getElementById("rutaV");	
	var idVuelo=document.getElementById("idVuelo"); 
		
	ruta = encontrarRuta(rutaV.value);
	avionN = encontrarAvion(avionV.value);
	
	vuelo = new Vuelo(idVuelo.value,avionN,ruta);
	vuelos.push(vuelo);
	Storage.store("vuelos",vuelos);
	
	
	var listadoVuelo=document.getElementById("listadoVuelo");
	listVuelo(listadoVuelo,vuelo);
	
	window.alert("Data sent: "+vuelo.completo("-"));
	var formulario=document.getElementById("formulario");
    formulario.reset();	
  }

  function listVuelos(vls){
	var listadoVuelo=document.getElementById("listadoVuelo");
	listadoVuelo.innerHTML="";
	for (i=0;i<vls.length;i++){
	  listVuelo(listadoVuelo,vls[i]);
	}
  }

  function listVuelo(listado,vl){
	var tr =document.createElement("tr");
	var td;
	
	td=document.createElement("td");
	td.appendChild(document.createTextNode(vl.identificador));
	tr.appendChild(td);
	
	td=document.createElement("td");
	td.appendChild(document.createTextNode(vl.avion.identificador));
	tr.appendChild(td);
	
	td =document.createElement("td");
	td.appendChild(document.createTextNode(vl.ruta.identificador));
	tr.appendChild(td);
	
    td= document.createElement("td");
    img= document.createElement("img");
    img.src="imagenes/ver2.jpg";
	img.title="Ver detalles" 	
    img.setAttribute('class', 'imagen');
    img.addEventListener("click", function(e){verDetalles(vl);});
    td.appendChild(img);
    tr.appendChild(td);
	
	listadoVuelo.appendChild(tr);  
  }
  
  function verDetalles(vl){
    var listadoDetalles=document.getElementById("listadoDetalles");
	listadoDetalles.innerHTML="";
	
	var tr =document.createElement("tr");
	var td;
	document.getElementById('o').style.display='block';
    document.getElementById('p').style.display='block';
 
	tr.id ='vuelo';
	td=document.createElement("td");
	tr.appendChild(td);
	
	td=document.createElement("td");
	tr.appendChild(td);
	
	td=document.createElement("td");
	tr.appendChild(td);
	
	td=document.createElement("td");
	tr.appendChild(td);
	
	td=document.createElement("td");
	td.appendChild(document.createTextNode('Vuelo # '+vl.identificador));
	tr.appendChild(td);
	
	td=document.createElement("td");
	tr.appendChild(td);
	
	td=document.createElement("td");
	tr.appendChild(td);
	
	td=document.createElement("td");
	tr.appendChild(td);
	
	td=document.createElement("td");
	tr.appendChild(td);
	
	listadoDetalles.appendChild(tr); 
	
	var tr =document.createElement("tr");
	var td;

	td=document.createElement("td");
	td.appendChild(document.createTextNode('Avion #'+ vl.avion.identificador));
	tr.appendChild(td);
	
	td=document.createElement("td");
	td.appendChild(document.createTextNode('Marca: '+ vl.avion.marca));
	tr.appendChild(td);
	
	td =document.createElement("td");
	td.appendChild(document.createTextNode('Modelo: '+ vl.avion.modelo));
	tr.appendChild(td);
	
	td=document.createElement("td");
	td.appendChild(document.createTextNode('Año: '+ vl.avion.anno));
	tr.appendChild(td);
	
	td=document.createElement("td");
	td.appendChild(document.createTextNode('#Pasajeros: '+ vl.avion.cantPas));
	tr.appendChild(td);
	
	td =document.createElement("td");
	td.appendChild(document.createTextNode('#Filas: '+ vl.avion.cantFilas));
	tr.appendChild(td);
	
	td =document.createElement("td");
	td.appendChild(document.createTextNode('#Asientos: '+ vl.avion.cantAsientos));
	tr.appendChild(td);
	
	td=document.createElement("td");
	tr.appendChild(td);
	
	td=document.createElement("td");
	tr.appendChild(td);
	
	listadoDetalles.appendChild(tr); 
	
	var tr =document.createElement("tr");
	var td;
	
	td =document.createElement("td");
	td.appendChild(document.createTextNode("Ruta # " +vl.ruta.identificador));
	tr.appendChild(td);
	
	td=document.createElement("td");
	td.appendChild(document.createTextNode("Origen: " +vl.ruta.lOrigen.nombre));
	tr.appendChild(td);
	
	td=document.createElement("td");
	td.appendChild(document.createTextNode("Destino: "+ vl.ruta.lDestino.nombre));
	tr.appendChild(td);
	
   td=document.createElement("td");
	td.appendChild(document.createTextNode('Fecha de Salida: '+vl.ruta.horario.fechSalida));
	tr.appendChild(td);
	
	td=document.createElement("td");
	td.appendChild(document.createTextNode('Hora: '+vl.ruta.horario.horaSalida));
	tr.appendChild(td);
	
	td=document.createElement("td");
	td.appendChild(document.createTextNode('Fecha de Llegada: '+vl.ruta.horario.fechLlegada));
	tr.appendChild(td);
	
	td =document.createElement("td");
	td.appendChild(document.createTextNode('Hora: '+vl.ruta.horario.horaLlegada));
	tr.appendChild(td);
	
	td=document.createElement("td");
	td.appendChild(document.createTextNode("Duracion: " +vl.ruta.duracion));
	tr.appendChild(td);
	
	td=document.createElement("td");
	td.appendChild(document.createTextNode('Precio: '+vl.ruta.horario.precio));
	tr.appendChild(td);
	
	listadoDetalles.appendChild(tr); 
  }
 
 document.addEventListener("DOMContentLoaded",pageLoad)
 