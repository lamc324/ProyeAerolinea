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
		
		if (v instanceof Object && v._class == 'Ruta') {
			return new Ruta(v.identificador,v.lOrigen,v.lDestino,v.duracion,v.horario);
		}
		if (v instanceof Object && v._class == 'Horario') {
			return new Horario(v.id,v.fechSalida,v.horaSalida,v.fechLlegada,v.horaLlegada,v.precio);
		}
		return v;
	},

replacer: function (k,v) {

		
		if (v instanceof Ruta) {
			v._class="Ruta";
		}
		if (v instanceof Horario) {
			v._class="Horario";
		}
		return v;
	},
};


