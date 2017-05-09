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
public class Ciudad implements Jsonable{
String nombre;
int zonaHoraria;
    


public Ciudad (String nombre, int zonaHoraria){
this.nombre = nombre;
this.zonaHoraria = zonaHoraria;

}
}
