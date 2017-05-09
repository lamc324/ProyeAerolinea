/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package airline.service;

import airline.model.AirlineModel;
import airline.model.Avion;
import airline.model.Ciudad;
import airline.model.Horario;
import airline.model.Jsonable;
import airline.model.Ruta;
import airline.model.Vuelo;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.typeadapters.RuntimeTypeAdapterFactory;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Neni
 */
@WebServlet(name = "AirlineService", urlPatterns = {"/AirlineService"})
public class AirlineService extends HttpServlet {
AirlineModel model;
    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            response.setContentType("text/xml");
        RuntimeTypeAdapterFactory<Jsonable> rta = RuntimeTypeAdapterFactory.of(Jsonable.class, "_class")
         .registerSubtype(Ciudad.class,"Ciudad")
         .registerSubtype(Horario.class,"Horario")
         .registerSubtype(Avion.class,"Avion")
         .registerSubtype(Ruta.class,"Ruta")
         .registerSubtype(Vuelo.class, "Vuelo");
        Gson gson = new GsonBuilder().registerTypeAdapterFactory(rta).setDateFormat("yyyy/mm/dd").create();
        String json;
        String accion = request.getParameter("action");
        
System.out.println(accion);
        List<Ciudad> ciudades;
        List<Vuelo> vuelos;
        List<Horario> horarios;
        List<Ruta> rutas;
        List<Avion> aviones;
        
        switch(accion){
            case "RutaListAll":
                rutas=model.getRutas();
                json = gson.toJson(rutas);
                out.write(json);
                break;
                
            case "VuelosListAll":
                 vuelos = model.getVuelos();
                 json = gson.toJson(vuelos);
                 out.write(json);
                 break;
                 
            case "AvionesListAll":
                 aviones = model.getAviones();
                 json = gson.toJson(aviones);
                 out.write(json);
                 break;
                 
            case "vueloListSearch":{
                String origen = request.getParameter("origen");
                String destino = request.getParameter("destino");
                String precio = request.getParameter("precio");
                String salida = request.getParameter("salida");
                    vuelos = model.getVuelos(origen,destino,precio,salida);
                    json = gson.toJson(vuelos);
                    out.write(json);
                    break;
            }
        }
        
    
    } catch(Exception e) {System.out.print(e);}   
}
    
  @Override
public void init() throws ServletException {
    super.init();
    model = new AirlineModel();
}  

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
