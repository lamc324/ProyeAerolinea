Storage = {
store : function (id, object){
			return localStorage.setItem(id, JSON.stringify(object,this.replacer));
		},

retrieve: function (id){
			  var jsonObject = localStorage.getItem(id);
			  if(jsonObject === null){
				return null;
			  }
			  else{
				 return JSON.parse(jsonObject,this.revive);
			  }
		},

revive: function (k,v) {
		
		if (v instanceof Object && v._class == 'Avion') {
			return new Avion(v.identificador,v.anno,v.modelo,v.marca,v.cantPas,v.cantFilas,v.cantAsientos);
		}
		
		return v;
	},

replacer: function (k,v) {
	
		if (v instanceof Avion) {
			v._class="Avion";
		}
		return v;
	},
	
};

