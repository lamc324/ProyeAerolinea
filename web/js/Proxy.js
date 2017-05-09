


var Proxy = Proxy || {};

Proxy.getRutas = function (callBack){
    var AJAX_req = new XMLHttpRequest();
    url="/ProyectoAerolinea/AirlineService?action=RutaListAll";
    AJAX_req.open("GET", url, true);
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    AJAX_req.onreadystatechange = function(){
        if(AJAX_req.readyState === 4 && AJAX_req.status === 200){
            var object = JSON.parse(AJAX_req.responseText, JsonUtils.revive);
            callBack(object);
        }
    };
    
    AJAX_req.send();
};

Proxy.getVuelos = function(callBack){
var AJAX_req = new XMLHttpRequest();
    url="/ProyectoAerolinea/AirlineService?action=VuelosListAll";
    AJAX_req.open("GET", url, true);
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    AJAX_req.onreadystatechange = function(){
        if(AJAX_req.readyState === 4 && AJAX_req.status === 200){
            var object = JSON.parse(AJAX_req.responseText, JsonUtils.revive);
            callBack(object);
        }
    };
    
    AJAX_req.send();
};
Proxy.getAviones = function(callBack){
  var AJAX_req = new XMLHttpRequest();
    url="/ProyectoAerolinea/AirlineService?action=AvionesListAll";
    AJAX_req.open("GET", url, true);
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    AJAX_req.onreadystatechange = function(){
        if(AJAX_req.readyState === 4 && AJAX_req.status === 200){
            var object = JSON.parse(AJAX_req.responseText, JsonUtils.revive);
            callBack(object);
        }
    };
    
    AJAX_req.send();
};


Proxy.vuelosSearch = function(origen, destino, precio, salida, callBack){
    var AJAX_req = new XMLHttpRequest();
    url="/ProyectoAerolinea/AirlineService?action=vueloListSearch";
    AJAX_req.open("POST", url, true);
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    AJAX_req.onreadystatechange = function(){
        if(AJAX_req.readyState === 4 && AJAX_req.status === 200){
            var object = JSON.parse(AJAX_req.responseText, JsonUtils.revive);
            callBack(object);
        }
    };
    
    AJAX_req.send("origen="+origen+"&destino="+destino+"&precio="+precio+"&salida="+salida);
};

