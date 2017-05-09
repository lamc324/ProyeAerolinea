 var reservados =[];
  function pageLoad(event){
	  
	cFilas=35;
	cAsientos=9;	
	
	
	listCheck(cFilas,cAsientos);
	
	var comprar = document.getElementById("comprar");
    comprar.addEventListener("click", comprarTiq);
  }
  
  function listLetras(tr, i){
	
	 var td;
		 td= document.createElement("td");
		 
  		 td.innerHTML=cambiarLetra(i);
		 tr.appendChild(td); 
			
		listado.appendChild(tr);

  }
  
  function cambiarLetra(i){
	  switch(i){
		case 1:  return 'A';
			break;
		case 2:  return 'B';
			break;
		case 3:  return 'C';
			break;
		case 4:  return 'D';
			break;
		case 5:  return 'E';
			break;
		case 6:  return 'F';
			break;
		case 7:  return 'G';
			break;
		case 8:  return 'H';
			break;
		case 9:  return 'I';
			break;
	  }
	  
  }
  
  function listCheck(cfilas,cAsientos){
	var listado=document.getElementById("listado");
	listado.innerHTML="";
	
	listNumeros(listado,cFilas);
	
	for (i=0;i<cAsientos;i++){
	  cargarBotones(listado, cfilas,i);  
	 
	 if ((i+1)%3==0 && (i+1)!=cAsientos){
		 espacio(cFilas);
	  }
	}
  }

  function listNumeros(listado,cFilas){
	var tr =document.createElement("tr");
	var td;
	
	for (l=0; l<cFilas+1; l++){
		
		td= document.createElement("td");
		td.innerHTML=l;
		if(l==0){
			td.innerHTML=" ";
		}
		tr.appendChild(td); 		
	}		
	listado.appendChild(tr);
  }
 
  function espacio(cFilas){
	   var tr =document.createElement("tr");
		var td;
		for (l=0; l<cFilas+1; l++){
		 td= document.createElement("td");
		 
  		 td.innerHTML=" ";
		 if(l==0){
			td.innerHTML="-";
		}
		 tr.appendChild(td); 
		}
		listado.appendChild(tr);
  }

  function cargarBotones(listado, cFilas,i){
	var f = parseInt(cFilas);
	var tr =document.createElement("tr");
	var td;
	
	for (l=0; l<f; l++){	
		if(l==0){
			listLetras(tr, i+1);
		}
		td= document.createElement("td");
		td.name = "td";
		boton = document.createElement('input');
		boton.setAttribute('type', 'button');
		boton.size="1";
		boton.classList.add("displonible");
		boton.addEventListener("click",reservar);
		td.appendChild(boton);
		tr.appendChild(td); 		
	}		
	listado.appendChild(tr);
	
  }
  
  function reservar(){
	  
	var td = this.offsetParent; //Localizamos el TD
	var tr = td.parentElement;  //LLegamos hasta el TR
	
	td.children[0].classList.remove("displonible");
	td.children[0].classList.add("reservado");

	reservados.push(td.children[0]);
	
	}
 
  function comprarTiq(){
	  
	  for(i = 0; i<=reservados.length; i++){
		  reservados[i].classList.remove("reservado");
		  reservados[i].classList.add("ocupado");
	  }
		
	}
 document.addEventListener("DOMContentLoaded",pageLoad)
 