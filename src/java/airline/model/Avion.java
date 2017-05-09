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
public class Avion implements Jsonable{
    String identificador;
    String anno;
    String modelo;
    String marca;
    int cantPas;
    int cantFilas;
    int cantAsientos;
    
    public Avion( String id, String anno, String modelo, String marca, int cantPas, int cantFilas, int cantAsientos){
        this.identificador=id;
        this.anno=anno;
	this.modelo=modelo;
	this.marca=marca;
	this.cantPas=cantPas;
	this.cantFilas=cantFilas;
	this.cantAsientos=cantAsientos;
    
    }
}
