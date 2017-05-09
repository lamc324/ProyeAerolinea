package airline.model;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;



public class AirlineModel {
    public List<Ciudad> getCiudades(){
        Ciudad[] ciudades={
	new Ciudad("Costa Rica", -6),
	new Ciudad("Panama", -5),
	new Ciudad("Nueva York", -4),
        new Ciudad("Buenos Aires", -3),
	new Ciudad("Los Angeles", -7),
	new Ciudad("Mexico", -5)};
        
    return new ArrayList(Arrays.asList(ciudades));
    
    }

    public List<Avion> getAviones(){
        Avion[] aviones={ 
              new Avion("001","2002","200","Max-270",333,37,9),
	      new Avion("002","2012","210","Max-280",360,40,9),
	      new Avion("003","2013","300","Min-270",600,50,6),
        };
        return new ArrayList(Arrays.asList(aviones));
    }
    
    public List<Horario> getHorarios(){
        Horario[] horarios ={
            new Horario("001","2017-02-12","12:00pm","2017-02-12","4:oopm","$1400"),
            new Horario("002","2017-03-20","8:00am","2017-03-20","8:ooam","$800"),
            new Horario("003","2017-04-03","9:00am","2017-04-03","3:oopm","$600"),
            new Horario("004","2017-02-12","2:00pm","2017-02-12","6:oopm","$1000"),
            new Horario("005","2017-03-20","10:00am","2017-03-20","10:ooam","$800"),
            new Horario("006","2017-04-03","11:00am","2017-04-03","5:oopm","$3500"),
            new Horario("007","2017-05-03","9:00am","2017-05-03","3:oopm","$3000"),
            new Horario("008","2017-03-12","2:00pm","2017-03-12","6:oopm","$1200"),
            new Horario("009","2017-04-20","10:00am","2017-04-20","10:ooam","$800"),
            new Horario("010","2017-06-03","11:00am","2017-06-03","5:oopm","$600"),
            new Horario("011","2017-10-20","10:00am","2017-10-20","10:ooam","$2000"),
            new Horario("012","2017-10-21","11:00am","2017-10-21","5:oopm","$1500")};
        
        return new ArrayList(Arrays.asList(horarios));
    }
    
    public List<Ruta> getRutas(){
        
        Ruta[] rutas = {
            new Ruta("001", new Ciudad("Costa Rica", -6), new Ciudad("Nueva York", -4),"3hrs", new Horario("001","2017-02-12","12:00pm","2017-02-12","4:oopm","$1400")),
            new Ruta("002", new Ciudad("Costa Rica", -6),new Ciudad("Buenos Aires", -3),"12hrs", new Horario("002","2017-03-20","8:00am","2017-03-20","8:ooam","$800")),
            new Ruta("003",new Ciudad("Mexico", -5), new Ciudad("Nueva York", -4),"6hrs",  new Horario("003","2017-04-03","9:00am","2017-04-03","3:oopm","$600")),
            new Ruta("004",new Ciudad("Nueva York", -4),new Ciudad("Los Angeles", -7),"3hrs", new Horario("004","2017-02-12","2:00pm","2017-02-12","6:oopm","$1000")),
            new Ruta("005",new Ciudad("Costa Rica", -6),new Ciudad("Mexico", -5),"12hrs", new Horario("005","2017-03-20","10:00am","2017-03-20","10:ooam","$800")),
            new Ruta("006",new Ciudad("Panama", -5),new Ciudad("Buenos Aires", -3),"6hrs", new Horario("006","2017-04-03","11:00am","2017-04-03","5:oopm","$3500")),
            new Ruta("007",new Ciudad("Costa Rica", -6),new Ciudad("Nueva York", -4),"3hrs",   new Horario("007","2017-05-03","9:00am","2017-05-03","3:oopm","$3000")),
            new Ruta("008",new Ciudad("Costa Rica", -6),new Ciudad("Buenos Aires", -3),"12hrs", new Horario("008","2017-03-12","2:00pm","2017-03-12","6:oopm","$1200")),
            new Ruta("009",new Ciudad("Nueva York", -4), new Ciudad("Costa Rica", -6),"6hrs", new Horario("009","2017-04-20","10:00am","2017-04-20","10:ooam","$800")),
            new Ruta("010",new Ciudad("Los Angeles", -7),new Ciudad("Nueva York", -4),"3hrs",  new Horario("010","2017-06-03","11:00am","2017-06-03","5:oopm","$600")),
            new Ruta("011",new Ciudad("Panama", -5),new Ciudad("Buenos Aires", -3),"12hrs", new Horario("011","2017-10-20","10:00am","2017-10-20","10:ooam","$2000")),
            new Ruta("012",new Ciudad("Nueva York", -4),new Ciudad("Costa Rica", -6),"6hrs", new Horario("012","2017-10-21","11:00am","2017-10-21","5:oopm","$1500"))};
        
        return new ArrayList(Arrays.asList(rutas));
    }
    
     public List<Vuelo> getVuelos(){
        
        Vuelo[] vuelos = {
             new Vuelo("001", new Avion("001","2002","200","Max-270",333,37,9),new Ruta("001", new Ciudad("Costa Rica", -6), new Ciudad("Nueva York", -4),"3hrs", new Horario("001","2017-02-12","12:00pm","2017-02-12","4:oopm","$1400"))),
            new Vuelo("002", new Avion("002","2012","210","Max-280",360,40,9),new Ruta("002", new Ciudad("Costa Rica", -6),new Ciudad("Buenos Aires", -3),"12hrs", new Horario("002","2017-03-20","8:00am","2017-03-20","8:ooam","$800"))),
            new Vuelo("003", new Avion("003","2013","300","Min-270",600,50,6),new Ruta("003",new Ciudad("Mexico", -5), new Ciudad("Nueva York", -4),"6hrs",  new Horario("003","2017-04-03","9:00am","2017-04-03","3:oopm","$600"))),
            new Vuelo("004", new Avion("001","2002","200","Max-270",333,37,9),new Ruta("004",new Ciudad("Nueva York", -4),new Ciudad("Los Angeles", -7),"3hrs", new Horario("004","2017-02-12","2:00pm","2017-02-12","6:oopm","$1000"))),
            new Vuelo("005", new Avion("002","2012","210","Max-280",360,40,9),new Ruta("005",new Ciudad("Costa Rica", -6),new Ciudad("Mexico", -5),"12hrs", new Horario("005","2017-03-20","10:00am","2017-03-20","10:ooam","$800"))),
            new Vuelo("006", new Avion("003","2013","300","Min-270",600,50,6),new Ruta("006",new Ciudad("Panama", -5),new Ciudad("Buenos Aires", -3),"6hrs", new Horario("006","2017-04-03","11:00am","2017-04-03","5:oopm","$3500"))),
            new Vuelo("007", new Avion("001","2002","200","Max-270",333,37,9),new Ruta("007",new Ciudad("Costa Rica", -6),new Ciudad("Nueva York", -4),"3hrs",   new Horario("007","2017-05-03","9:00am","2017-05-03","3:oopm","$3000"))),
            new Vuelo("008", new Avion("002","2012","210","Max-280",360,40,9),new Ruta("008",new Ciudad("Costa Rica", -6),new Ciudad("Buenos Aires", -3),"12hrs", new Horario("008","2017-03-12","2:00pm","2017-03-12","6:oopm","$1200"))),
            new Vuelo("009", new Avion("003","2013","300","Min-270",600,50,6),new Ruta("009",new Ciudad("Nueva York", -4), new Ciudad("Costa Rica", -6),"6hrs", new Horario("009","2017-04-20","10:00am","2017-04-20","10:ooam","$800"))),
            new Vuelo("010", new Avion("001","2002","200","Max-270",333,37,9),new Ruta("010",new Ciudad("Los Angeles", -7),new Ciudad("Nueva York", -4),"3hrs",  new Horario("010","2017-06-03","11:00am","2017-06-03","5:oopm","$600"))),
            new Vuelo("011", new Avion("002","2012","210","Max-280",360,40,9),new Ruta("011",new Ciudad("Panama", -5),new Ciudad("Buenos Aires", -3),"12hrs", new Horario("011","2017-10-20","10:00am","2017-10-20","10:ooam","$2000"))),
            new Vuelo("012", new Avion("003","2013","300","Min-270",600,50,6),new Ruta("012",new Ciudad("Nueva York", -4),new Ciudad("Costa Rica", -6),"6hrs", new Horario("012","2017-10-21","11:00am","2017-10-21","5:oopm","$1500")))};
            
        return new ArrayList(Arrays.asList(vuelos));
    }
     
     public List<Vuelo> getVuelos(String origen, String destino, String precio, String salida){
        
         ArrayList<Vuelo> result = new ArrayList();
         this.getVuelos().stream().filter((v) -> (v.ruta.lOrigen.nombre.contains(origen) && v.ruta.lDestino.nombre.contains(destino) && v.ruta.horario.precio.contains(precio) && v.ruta.horario.fechSalida.contains(salida))).forEachOrdered((v) -> {
             result.add(v);
        });
         return result;
     }
    
}
