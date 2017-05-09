
//Model
var rutas=[];
var busquedas;
var vuelos = [];
var slideIndex = 1;
var paginacion = 1;
var table;
var ciuOrigen = [];
var ciuDestino =[];
var ciudades=[];
var aviones=[];
var horarios = [];




function cargaOpcionesVuelo(v){ //view
	var origen = document.getElementById("origen");
	var destino = document.getElementById("destino");
	var precio = document.getElementById("precio");
  
	
	origen.options[0] = new Option(" ");
	destino.options[0] = new Option(" ");
	precio.options[0] = new Option(" ");
	
	for(j = 0; j < v.length; j++){
	   if (!encontrarOrigen(v[j].ruta.lOrigen.nombre))
		   ciuOrigen.push(v[j].ruta.lOrigen);
	   if (!encontrarDestino(v[j].ruta.lDestino.nombre))
		   	  ciuDestino.push(v[j].ruta.lDestino);
   }
   
	for(i = 0; i < ciuOrigen.length;i++){
		origen.options[i+1] = new Option(ciuOrigen[i].nombre);
	}
	
	for(i = 0; i < ciuDestino.length;i++){
		destino.options[i+1] = new Option(ciuDestino[i].nombre);
	}
	
	for(i = 0; i < v.length;i++){
		precio.options[i+1] = new Option(v[i].ruta.horario.precio);
	}
}

 function encontrarDestino(nombre){   
	 return ciuDestino.find(function(x) {return x.nombre == nombre;});
 }	
 
 function encontrarOrigen(nombre){   
	 return ciuOrigen.find(function(x) {return x.nombre == nombre;});
 }

function doBusqueda(event){ //buscar
    var origen = document.getElementById("origen");
    var destino = document.getElementById("destino");
    var salida = document.getElementById("date");
    var precio = document.getElementById("precio");
    var pagina = document.getElementById("pagination");
    var listado=document.getElementById("Busquedalistado");
    var idaVuelta = document.getElementById("idaVuelta");
    
    //Borra primero toda la tabla de busqueda
    var rows = table.rows().remove().draw();
	
	if(origen.value== "" && destino.value =="" && salida.value=="" && precio.value == ""){
		 if(idaVuelta.checked == true)
             buscarIdaVuelta(vuelos);
            else{
                for(i = 0; i<vuelos.length; i++)
                    insertaVuelo(vuelos[i]);
            }
	} 
	 else 
		valorVuelos(origen.value,destino.value,salida.value, precio.value, idaVuelta);
  }
  
  function valorVuelos(origen,destino,salida, precio, idaVuelta){
		aux=vuelos;
      
	 if(origen!="")
		  aux= porOrigen(origen,aux);
	  
	  if(destino!="")
		aux= porDestino(destino,aux);
	  
	  if(salida!="")	
		aux = porSalida(salida,aux);
      
       if(precio!="")	
		aux = porPrecio(precio,aux);
      
      if(idaVuelta.checked == true)
          buscarIdaVuelta(aux);
	
		else { 
        for(i = 0; i<aux.length; i++)
			insertaVuelo(aux[i]);
             }
  }

function buscarIdaVuelta(lista){
    var mismoDestino =[];
    var aux=[];
    for(i = 0; i<lista.length; i++){
        
        mismoDestino =porOrigen(lista[i].ruta.lDestino.nombre, lista); 
        if(mismoDestino){ 
            for(j = 0; j<mismoDestino.length; j++){
                if(mismoDestino[j].ruta.lDestino.nombre == lista[i].ruta.lOrigen.nombre){
                    if (porId(mismoDestino[j].identificador, aux) == "")
                        aux.push(mismoDestino[j]);
                    if (porId(lista[i].identificador, aux) == "")
                        aux.push(lista[i]);
                    
                }
            }
        }
    }
    
    for(n = 0; n<aux.length; n++)
        insertaVuelo(aux[n]);
}

  
function porId(id,aux) {
	  return aux.filter( (vls) => vls.identificador.indexOf(id) > -1 );
}

  function porSalida(salida,aux) {
	  return aux.filter( (vls) => vls.ruta.horario.fechSalida.indexOf(salida) > -1 );
    }
    
  function porPrecio(precio,aux) {
	  return aux.filter( (vls) => vls.ruta.horario.precio.indexOf(precio) > -1 );
    }
  
  function porOrigen(lOrigen,aux) {
	 return aux.filter( (vls) => vls.ruta.lOrigen.nombre.toLowerCase().indexOf(lOrigen.toLowerCase()) > -1 );
    }
  
  function porDestino(lDestino,aux) {
	 return aux.filter( (vls) => vls.ruta.lDestino.nombre.toLowerCase().indexOf(lDestino.toLowerCase()) > -1 );
  }
		

function insertaVuelo(vuelo){
    var rowNode = table.row.add( [vuelo.ruta.lOrigen.nombre, vuelo.ruta.lDestino.nombre, 
                           vuelo.ruta.horario.fechSalida,
                           vuelo.ruta.horario.precio] ).draw().node();        
}
 
 function encontrarVuelo(origen,destino){   
	 return vuelos.find(function(x) {return (x.ruta.lDestino.nombre == destino) && (x.ruta.lOrigen.nombre == origen);});
 }	
 
 function encontrarVueloOrigen(nombre){   
	 return vuelos.find(function(x) {return x.ruta.lOrigen.nombre == nombre;});
 }	

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function generateRandom(number){
	return Math.floor((Math.random() * number-1) + 1);
}


function listRutas(ruts){
	var listado=document.getElementById("listado");
	var randomNumbers=[];
	var number;
	listado.innerHTML="";
	for (i=0;i<ruts.length;i++){
		number=generateRandom(ruts.length);
		if(listado != null){
			
			for(j=0;j<randomNumbers.length;j++){
				if(randomNumbers[j] == number){ 
					number=generateRandom(ruts.length);
					j=-1;
				}
			}
			
			listRuta(listado,ruts[number]);
			listado=document.getElementById("listado"+parseInt(i+1));
			randomNumbers[i]=number;
		}
	}
  }
  
  function listRutaOld(listado,rut){
		var tr =document.createElement("tr");
		var td;
		var textF;
		var img;
		
		td=document.createElement("td");
		td.appendChild(document.createTextNode(rut.identificador));
		tr.appendChild(td);
		
		td =document.createElement("td");
		td.appendChild(document.createTextNode(rut.lOrigen.nombre + " - " + rut.lDestino.nombre));
		tr.appendChild(td);
		
		td =document.createElement("td");
		td.appendChild(document.createTextNode(rut.horario.precio + "$"));
		tr.appendChild(td);
		
		listado.appendChild(tr);  
		
		tr = document.createElement("tr");
		td=document.createElement("td");
		tr.appendChild(td);
		
		td=document.createElement("td");
		boton = document.createElement("Button");
        boton.className = "btn btn-primary btn-md";
		var t = document.createTextNode("Comprar");
		boton.appendChild(t);
		td.appendChild(boton);
		tr.appendChild(td);
		listado.appendChild(tr);
  }
  
  function listBusquedas(vuelos){
	var listado=document.getElementById("listado");
	var randomNumbers=[];
	var number;
	listado.innerHTML="";
	for (i=0;i<vuelos.length;i++){
		number=generateRandom(vuelos.length);
		if(listado != null){
			
			for(j=0;j<randomNumbers.length;j++){
				if(randomNumbers[j] == number){ 
					number=generateRandom(vuelos.length);
					j=-1;
				}
			}
			
			listBusqueda(listado,vuelos[number]);
			listado=document.getElementById("listado"+parseInt(i+1));
			randomNumbers[i]=number;
		}
	}
  }
  
  function listBusqueda(listado,vuelo){
		var tr =document.createElement("tr");
		var td;
		var textF;
		var img;
		
		td=document.createElement("td");
		td.appendChild(document.createTextNode(vuelo.ruta.lOrigen.nombre + " - " + vuelo.ruta.lDestino.nombre));
		tr.appendChild(td);
		
		td =document.createElement("td");
		td.appendChild(document.createTextNode(vuelo.ruta.horario.fechSalida));
		tr.appendChild(td);
		
		td =document.createElement("td");
		td.appendChild(document.createTextNode(vuelo.ruta.horario.precio + "$"));
		tr.appendChild(td);
		
		listado.appendChild(tr);  
      
        tr = document.createElement("tr");
		td=document.createElement("td");
		tr.appendChild(td);
		
		td=document.createElement("td");
		boton = document.createElement("Button");
        boton.className = "btn btn-primary btn-md";
		var t = document.createTextNode("Comprar");
		boton.appendChild(t);
		td.appendChild(boton);
		tr.appendChild(td);
		listado.appendChild(tr);
  }


document.addEventListener("DOMContentLoaded",pageLoad);

var rutas=[];
var busquedas;
var vuelos = [];
var slideIndex = 1;
var paginacion = 1;
var table;
var ciuOrigen = [];
var ciuDestino =[];
var ciudades=[];
var aviones=[];
var horarios = [];



function pageLoad(event){
    $(document).ready( function () {
    table = $('#BusquedalistadoT').DataTable();
    } );
	
    agregarCiudad();
    agregarHorarios();
    agregarRutas();
    agregarAviones();
    agregarVuelos();
    listBusquedas(vuelos);
	cargaOpcionesVuelo(vuelos);
    
	var origen = document.getElementById("origen");
	var destino = document.getElementById("destino");
	var salida = document.getElementById("salida");
	var precio = document.getElementById("precio");
	var botonBuscar = document.getElementById("botonBuscar");
	
	botonBuscar.addEventListener("click", doBusqueda);
	
	//origen.addEventListener("click",consultaOrigen);
	
	/*rutas = Storage.retrieve("rutas");
	vuelos = Storage.retrieve("vuelos");
   
   if (rutas == null){
		rutas=[];
		Storage.store("rutas",rutas);
	}
	
	if (vuelos == null){
		vuelos=[];
		Storage.store("vuelos",vuelos);
	}*/
	
	
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
    
    ciudad = new Ciudad('Mexico', '-5');
	ciudades.push(ciudad);
	   

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
	  
	  ruta = new Ruta("003",ciudades[5],ciudades[0],"6hrs", horarios[2]);
	  rutas.push(ruta);
      
      ruta = new Ruta("004",ciudades[2],ciudades[4],"3hrs", horarios[3]);
	  rutas.push(ruta);
	  
	  ruta = new Ruta("005",ciudades[0],ciudades[5],"12hrs", horarios[4]);
	  rutas.push(ruta);
	  
	  ruta = new Ruta("006",ciudades[1],ciudades[0],"6hrs", horarios[5]);
	  rutas.push(ruta);
      
      ruta = new Ruta("007",ciudades[0],ciudades[2],"3hrs", horarios[6]);
	  rutas.push(ruta);
	  
	  ruta = new Ruta("008",ciudades[0],ciudades[3],"12hrs", horarios[7]);
	  rutas.push(ruta);
	  
	  ruta = new Ruta("009",ciudades[2],ciudades[0],"6hrs", horarios[8]);
	  rutas.push(ruta);
      
      ruta = new Ruta("010",ciudades[4],ciudades[2],"3hrs", horarios[9]);
	  rutas.push(ruta);
	  
	  ruta = new Ruta("011",ciudades[1],ciudades[3],"12hrs", horarios[10]);
	  rutas.push(ruta);
	  
	  ruta = new Ruta("012",ciudades[2],ciudades[0],"6hrs", horarios[11]);
	  rutas.push(ruta);
  }
 
 function agregarHorarios(){
	  horario = new Horario("001","2017-02-12","12:00pm","2017-02-12","4:oopm","$1400");
	  horarios.push(horario);
	  
	  horario = new Horario("002","2017-03-20","8:00am","2017-03-20","8:ooam","$800");
	  horarios.push(horario);
	  
	  horario = new Horario("003","2017-04-03","9:00am","2017-04-03","3:oopm","$600");
	  horarios.push(horario);
     
      horario = new Horario("004","2017-02-12","2:00pm","2017-02-12","6:oopm","$1000");
	  horarios.push(horario);
	  
	  horario = new Horario("005","2017-03-20","10:00am","2017-03-20","10:ooam","$800");
	  horarios.push(horario);
	  
	  horario = new Horario("006","2017-04-03","11:00am","2017-04-03","5:oopm","$3500");
	  horarios.push(horario);
     
      horario = new Horario("007","2017-05-03","9:00am","2017-05-03","3:oopm","$3000");
	  horarios.push(horario);
     
      horario = new Horario("008","2017-03-12","2:00pm","2017-03-12","6:oopm","$1200");
	  horarios.push(horario);
	  
	  horario = new Horario("009","2017-04-20","10:00am","2017-04-20","10:ooam","$800");
	  horarios.push(horario);
	  
	  horario = new Horario("010","2017-06-03","11:00am","2017-06-03","5:oopm","$600");
	  horarios.push(horario);
     
      horario = new Horario("011","2017-10-20","10:00am","2017-10-20","10:ooam","$2000");
	  horarios.push(horario);
	  
	  horario = new Horario("012","2017-10-21","11:00am","2017-10-21","5:oopm","$1500");
	  horarios.push(horario);
  }
 
 function agregarVuelos(){
	vuelo = new Vuelo("001", aviones[0],rutas[0]);
	vuelos.push(vuelo);
	
	vuelo = new Vuelo("002", aviones[1],rutas[1]);
	vuelos.push(vuelo);
	
	vuelo = new Vuelo("003", aviones[2],rutas[2]);
	vuelos.push(vuelo);
     
    vuelo = new Vuelo("004", aviones[0],rutas[3]);
	vuelos.push(vuelo);
	
	vuelo = new Vuelo("005", aviones[1],rutas[4]);
	vuelos.push(vuelo);
	
	vuelo = new Vuelo("006", aviones[2],rutas[5]);
	vuelos.push(vuelo);
     
    vuelo = new Vuelo("007", aviones[0],rutas[6]);
	vuelos.push(vuelo);
	
	vuelo = new Vuelo("008", aviones[1],rutas[7]);
	vuelos.push(vuelo);
	
	vuelo = new Vuelo("009", aviones[2],rutas[8]);
	vuelos.push(vuelo);
     
    vuelo = new Vuelo("010", aviones[0],rutas[9]);
	vuelos.push(vuelo);
	
	vuelo = new Vuelo("011", aviones[1],rutas[10]);
	vuelos.push(vuelo);
	
	vuelo = new Vuelo("012", aviones[2],rutas[11]);
	vuelos.push(vuelo);
 }

function cargaOpcionesVuelo(v){
	var origen = document.getElementById("origen");
	var destino = document.getElementById("destino");
	var precio = document.getElementById("precio");
  
	
	origen.options[0] = new Option(" ");
	destino.options[0] = new Option(" ");
	precio.options[0] = new Option(" ");
	
	for(j = 0; j < v.length; j++){
	   if (!encontrarOrigen(v[j].ruta.lOrigen.nombre))
		   ciuOrigen.push(v[j].ruta.lOrigen);
	   if (!encontrarDestino(v[j].ruta.lDestino.nombre))
		   	  ciuDestino.push(v[j].ruta.lDestino);
   }
   
	for(i = 0; i < ciuOrigen.length;i++){
		origen.options[i+1] = new Option(ciuOrigen[i].nombre);
	}
	
	for(i = 0; i < ciuDestino.length;i++){
		destino.options[i+1] = new Option(ciuDestino[i].nombre);
	}
	
	for(i = 0; i < v.length;i++){
		precio.options[i+1] = new Option(v[i].ruta.horario.precio);
	}
}

 function encontrarDestino(nombre){   
	 return ciuDestino.find(function(x) {return x.nombre == nombre;});
 }	
 
 function encontrarOrigen(nombre){   
	 return ciuOrigen.find(function(x) {return x.nombre == nombre;});
 }

function doBusqueda(event){
	var origen = document.getElementById("origen");
	var destino = document.getElementById("destino");
	var salida = document.getElementById("date");
	var precio = document.getElementById("precio");
    var pagina = document.getElementById("pagination");
    var listado=document.getElementById("Busquedalistado");
    var idaVuelta = document.getElementById("idaVuelta");
    
    //Borra primero toda la tabla de busqueda
    var rows = table.rows().remove().draw();
	
	if(origen.value== "" && destino.value =="" && salida.value=="" && precio.value == ""){
		 if(idaVuelta.checked == true)
             buscarIdaVuelta(vuelos);
            else{
                for(i = 0; i<vuelos.length; i++)
                    insertaVuelo(vuelos[i]);
            }
	} 
	 else 
		valorVuelos(origen.value,destino.value,salida.value, precio.value, idaVuelta);
  }
  
  function valorVuelos(origen,destino,salida, precio, idaVuelta){
		aux=vuelos;
      
	 if(origen!="")
		  aux= porOrigen(origen,aux);
	  
	  if(destino!="")
		aux= porDestino(destino,aux);
	  
	  if(salida!="")	
		aux = porSalida(salida,aux);
      
       if(precio!="")	
		aux = porPrecio(precio,aux);
      
      if(idaVuelta.checked == true)
          buscarIdaVuelta(aux);
	
		else { 
        for(i = 0; i<aux.length; i++)
			insertaVuelo(aux[i]);
             }
  }

function buscarIdaVuelta(lista){
    var mismoDestino =[];
    var aux=[];
    for(i = 0; i<lista.length; i++){
        
        mismoDestino =porOrigen(lista[i].ruta.lDestino.nombre, lista); 
        if(mismoDestino){ 
            for(j = 0; j<mismoDestino.length; j++){
                if(mismoDestino[j].ruta.lDestino.nombre == lista[i].ruta.lOrigen.nombre){
                    if (porId(mismoDestino[j].identificador, aux) == "")
                        aux.push(mismoDestino[j]);
                    if (porId(lista[i].identificador, aux) == "")
                        aux.push(lista[i]);
                    
                }
            }
        }
    }
    
    for(n = 0; n<aux.length; n++)
        insertaVuelo(aux[n]);
}

  
function porId(id,aux) {
	  return aux.filter( (vls) => vls.identificador.indexOf(id) > -1 );
}

  function porSalida(salida,aux) {
	  return aux.filter( (vls) => vls.ruta.horario.fechSalida.indexOf(salida) > -1 );
    }


  function porPrecio(precio,aux) {
	  return aux.filter( (vls) => vls.ruta.horario.precio.indexOf(precio) > -1 );
    }
  
  function porOrigen(lOrigen,aux) {
	 return aux.filter( (vls) => vls.ruta.lOrigen.nombre.toLowerCase().indexOf(lOrigen.toLowerCase()) > -1 );
    }
  
  function porDestino(lDestino,aux) {
	 return aux.filter( (vls) => vls.ruta.lDestino.nombre.toLowerCase().indexOf(lDestino.toLowerCase()) > -1 );
  }
		
	
	
    /*for(i = 0; i < vuelos.length; i++){
        if((vuelos[i].ruta.lOrigen.nombre == origen.value) && (vuelos[i].ruta.lDestino.nombre == destino.value)){
            
            //Dibuja en la tabla la informacion del vuelo
            insertaVuelo(vuelos[i]);
        }
    }*/

function insertaVuelo(vuelo){
    var rowNode = table.row.add( [vuelo.ruta.lOrigen.nombre, vuelo.ruta.lDestino.nombre, 
                           vuelo.ruta.horario.fechSalida,
                           vuelo.ruta.horario.precio] ).draw().node();        
}
 
 function encontrarVuelo(origen,destino){   
	 return vuelos.find(function(x) {return (x.ruta.lDestino.nombre == destino) && (x.ruta.lOrigen.nombre == origen);});
 }	
 
 function encontrarVueloOrigen(nombre){   
	 return vuelos.find(function(x) {return x.ruta.lOrigen.nombre == nombre;});
 }	

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function generateRandom(number){
	return Math.floor((Math.random() * number-1) + 1);
}



function listRutas(ruts){
	var listado=document.getElementById("listado");
	var randomNumbers=[];
	var number;
	listado.innerHTML="";
	for (i=0;i<ruts.length;i++){
		number=generateRandom(ruts.length);
		if(listado != null){
			
			for(j=0;j<randomNumbers.length;j++){
				if(randomNumbers[j] == number){ 
					number=generateRandom(ruts.length);
					j=-1;
				}
			}
			
			listRuta(listado,ruts[number]);
			listado=document.getElementById("listado"+parseInt(i+1));
			randomNumbers[i]=number;
		}
	}
  }
  
  function listRutaOld(listado,rut){
		var tr =document.createElement("tr");
		var td;
		var textF;
		var img;
		
		td=document.createElement("td");
		td.appendChild(document.createTextNode(rut.identificador));
		tr.appendChild(td);
		
		td =document.createElement("td");
		td.appendChild(document.createTextNode(rut.lOrigen.nombre + " - " + rut.lDestino.nombre));
		tr.appendChild(td);
		
		td =document.createElement("td");
		td.appendChild(document.createTextNode(rut.horario.precio + "$"));
		tr.appendChild(td);
		
		listado.appendChild(tr);  
		
		tr = document.createElement("tr");
		td=document.createElement("td");
		tr.appendChild(td);
		
		td=document.createElement("td");
		boton = document.createElement("Button");
        boton.className = "btn btn-primary btn-md";
		var t = document.createTextNode("Comprar");
		boton.appendChild(t);
		td.appendChild(boton);
		tr.appendChild(td);
		listado.appendChild(tr);
  }
  
  function listBusquedas(vuelos){
	var listado=document.getElementById("listado");
	var randomNumbers=[];
	var number;
	listado.innerHTML="";
	for (i=0;i<vuelos.length;i++){
		number=generateRandom(vuelos.length);
		if(listado != null){
			
			for(j=0;j<randomNumbers.length;j++){
				if(randomNumbers[j] == number){ 
					number=generateRandom(vuelos.length);
					j=-1;
				}
			}
			
			listBusqueda(listado,vuelos[number]);
			listado=document.getElementById("listado"+parseInt(i+1));
			randomNumbers[i]=number;
		}
	}
  }
  
  function listBusqueda(listado,vuelo){
		var tr =document.createElement("tr");
		var td;
		var textF;
		var img;
		
		td=document.createElement("td");
		td.appendChild(document.createTextNode(vuelo.ruta.lOrigen.nombre + " - " + vuelo.ruta.lDestino.nombre));
		tr.appendChild(td);
		
		td =document.createElement("td");
		td.appendChild(document.createTextNode(vuelo.ruta.horario.fechSalida));
		tr.appendChild(td);
		
		td =document.createElement("td");
		td.appendChild(document.createTextNode(vuelo.ruta.horario.precio + "$"));
		tr.appendChild(td);
		
		listado.appendChild(tr);  
      
        tr = document.createElement("tr");
		td=document.createElement("td");
		tr.appendChild(td);
		
		td=document.createElement("td");
		boton = document.createElement("Button");
        boton.className = "btn btn-primary btn-md";
		var t = document.createTextNode("Comprar");
		boton.appendChild(t);
		td.appendChild(boton);
		tr.appendChild(td);
		listado.appendChild(tr);
  }


document.addEventListener("DOMContentLoaded",pageLoad)

