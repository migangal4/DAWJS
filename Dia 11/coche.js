class Historico {
    
    #historico = new Array();

    static update_historico(historico){

        this.#historico.push(historico);

    }

    static get_historico(){

        return this.#historico;

    }
}

class Coche {

    #matricula;
    #gasolina = 50; // (inicializado a 50)
    #dinero = 100; // (inicializado a 100)
    #consumo = 7; // (inicializado a 7 litros por cada 100 KM)
    #historico = new Array(); //de acciones (se guardará historico de viajes y repostajes junto con su fecha y hora)
    #num_viajes = 0;
    #num_repostajes = 0;

    constructor(matricula){
        this.#matricula = matricula.value; //(Se pedirá al usuario al cargar la página)
        //this.#gasolina = 50;
        //this.#dinero = 100;
        //this.#consumo = 7;
        
        
    }

    viajar (distance) {

        var gasto = this.#consumo * distance/100;

        var posible = this.#gasolina - gasto;
        if (posible >= 0){
            this.#num_viajes++;
            this.#actualizar_historico(distance, gasto, 1);
            this.#gasolina = posible;
            document.getElementById('distancia').innerHTML = "";
            document.getElementById('combustible').innerHTML = "Gasolina: " + this.#gasolina;
            return("Viaje hecho");
            
        }else{

            return("No se ha podido viajar, combustible insuficiente");

        }
        return;
        
    }

    repostar (gasto, precio) {

        var posible = this.#dinero - gasto;
        
        if (posible >= 0){
            var repostado = gasto / precio;
            this.#num_repostajes++;
            this.#actualizar_historico(repostado, gasto, 0);
            this.#dinero = posible;
            this.#gasolina = this.#gasolina + repostado;
            gasolinera.repostar(gasto, this.#matricula);
            document.getElementById('repostar').innerHTML = "";
            document.getElementById('combustible').innerHTML = "Gasolina: " + this.#gasolina;
            document.getElementById('dinero').innerHTML = "Dinero: " + this.#dinero;
            return("Respontaje hecho");
        }else{
            return("No se ha podido repostar, dinero insuficiente");
        }
    }

    get_historico(){
        return this.#historico;
    }

    #actualizar_historico(variable,  variable2, selector){

        if (selector){

            this.#historico.push(`</br>
            Coche con matricula ${this.#matricula}.</br>
            Viaje numero ${this.#num_viajes}.</br>
            En este viaje se han recorrido ${variable}Km y se han consumido ${variable2} litros de gasolina.</br>` );

        

        }else{

            this.#historico.push(`</br>
            Coche con matricula ${this.#matricula}.</br>
            Repostaje numero ${this.#num_repostajes}.</br>
            En este repostaje se han repostado ${variable} litros y se han gastado ${variable2}€.</br>` );

            
            }

        return;

    }

    static verificar_matricula(matricula){

        var test = /([0-9]{4}-[a-z]{3})|([a-z]{1,2}-[0-9]{4}-[a-z]{3})/i; //

        if (test.test(matricula.value)){
            return true;
        }

        return false;

    }


}

class Gasolinera {
    
    #gasolina = 500;
    #dinero = 0;
    #precio;
    #historico = new Array();

    constructor (precio){
        this.#precio = precio;
        this.date = new Date();
    }

    repostar(gasto, matricula){

            var repostado = gasto / this.#precio;
            this.#actualizar_historico(repostado, gasto, matricula);
            this.#dinero = this.#dinero + gasto;
            this.#gasolina = this.#gasolina - repostado;
            return;



    }

    get_precio(){
        return this.#precio;
    }

    get_historico(){
        return this.#historico;
    }


    #actualizar_historico(variable, variable2, matricula){

        
        
        this.#historico.push(`</br>

            Coche con matricula ${matricula}.</br>
            
            Dia del repostaje ${this.date.getDate()}/${this.date.getMonth()+1}/${this.date.getFullYear()}.</br>
            Hora del repostaje ${this.date.getHours()} : ${this.date.getMinutes()} : ${this.date.getSeconds()}.</br>
            En este repostaje se han repostado ${variable} litros y se han gastado ${variable2}€.</br>` );

        

    }
}



function start(verificado) {

    if (verificado){
        globalThis.coche = new Coche(matricula);
        document.getElementById("matgroup").style.display = "none";
        document.getElementById("gasgroup").style.display = "inline";
        return "Matricula creada";
    }else{
        return  "Matricula invalida";
    }
    
}

function  start2(precio) {

    globalThis.gasolinera = new Gasolinera(precio);
    document.getElementById("gasgroup").style.display = "none";
    document.getElementById("ingroup").style.display = "inline";
    return "Precio creada";
    
}

document.getElementById("ingroup").style.display = "none";
window.addEventListener("DOMContentLoaded", function (event) {


    
    
})