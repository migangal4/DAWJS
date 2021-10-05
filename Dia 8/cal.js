

class Cal {

    #v1;
    #v2;

    constructor(){
        this.#v1 = 0;
        this.#v2 = 0;

        var operations = ['+', '-', '*', '/', '!'];
        var botonera = document.getElementById('botonera');

        operations.forEach(operator => {
            var button1 = document.createElement("button");
            button1.setAttribute("onclick", `cal.operate(document.getElementById('v1').value, document.getElementById('v2').value, '${operator}')`);
            button1.innerHTML = operator;
            botonera.appendChild(button1);
            
        });
        /*
        var button1 = document.createElement("button");
        button1.setAttribute("onclick", `cal.operate(document.getElementById('v1').value, document.getElementById('v2').value, '+')`);
        button1.innerHTML = "Sumar";
        var botonera = document.getElementById('botonera');
        botonera.appendChild(button1);*/
    }

    #add_values(v1, v2){
        this.#v1 = parseInt(v1);
        this.#v2 = parseInt(v2);
    }

    operate(v1,v2,op){

        if (op == '!'){
            if (v1 == false){
                document.getElementById("answer").innerHTML = "Datos insuficientes";
                return;
            }
            v2 = '0';
        }else{

            if (v1 == false || v2 == false){
                document.getElementById("answer").innerHTML = "Datos insuficientes";
                return;
        }}
        

        this.#add_values(v1, v2);
        var answer = this.#add_operator(op);
        document.getElementById("answer").innerHTML = answer;
        document.getElementById("v1").value = "";
        document.getElementById("v1").focus();
        document.getElementById("v2").value = "";


    }

    #add_operator(op){
        
        switch (op){
            case "+":
                return(this.#suma());
            
            case "-":
                return(this.#resta());

            case "*":
                return(this.#mult());

            case "/":
                return(this.#div());

            case "!":
                return(this.#fac());

            default:

                console.log("Operacion no valida");
                return "No value";
        }
    }

    #suma(){

        return this.#v1 + this.#v2;

    }

    #resta(){

        return this.#v1 - this.#v2;

    }

    #mult(){

        return this.#v1 * this.#v2;

    }

    #div(){
        if (this.#v2 == 0){
            return "You can not divide by 0";
        }
        return this.#v1 / this.#v2;

    }
    #fac(){
        var sol = 1;
        for (var i = 2; i <= this.#v1; i++){

            sol = sol * i;

        }
        return sol;

    }

}
window.onload = cal = new Cal();

function carga(){

    cal = new Cal();
    return cal;
}





