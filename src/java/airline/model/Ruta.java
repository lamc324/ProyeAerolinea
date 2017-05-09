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
public class Ruta implements Jsonable{
String identificador;
Ciudad lOrigen;
Ciudad lDestino;
String duracion;
Horario horario;
            
public Ruta(String id,Ciudad lOrigen,Ciudad lDestino,String duracion,Horario horario){
    this.identificador = id;
    this.lOrigen = lOrigen;
    this.lDestino=lDestino;
    this.duracion = duracion;
    this.horario = horario;
    }
}
