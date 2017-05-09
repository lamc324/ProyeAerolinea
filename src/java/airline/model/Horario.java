package airline.model;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author John
 */
public class Horario implements Jsonable{
    String id;
    String fechSalida;
    String horaSalida;
    String fechLlegada;
    String horaLlegada;
    String precio;
    
    
    public Horario(String id, String fechSalida, String horaSalida, String fechLlegada, String horaLlegada, String precio){
        this.id=id;
        this.fechSalida = fechSalida;
        this.horaSalida = horaSalida;
        this.fechLlegada = fechLlegada;
        this.horaLlegada = horaLlegada;
        this.precio = precio;
        
    }
}
