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
public class Vuelo implements Jsonable{
    String identificador;
    Avion avion;
    Ruta ruta;
            
public Vuelo(String id, Avion avion, Ruta ruta){
    this.identificador = id;
    this.avion = avion;
    this.ruta=ruta;
    }
}
