function calcular(){

    var fecha = document.getElementById("fecha");
    var answer = document.getElementById("answer");

    if (isNaN(parseInt(fecha.value))){
        answer.innerHTML = "Por favor escriba un numero";
        fecha.value = "";
        fecha.focus();
        return;
    }

    if ( (fecha.value / 4) % 1 == 0 && (fecha.value / 100) % 1 != 0 || (fecha.value / 400) % 1 == 0 ){
        document.getElementById("answer").innerHTML = ` El año ${fecha.value} es bisiesto`;
        
    }else{
        document.getElementById("answer").innerHTML = ` El año ${fecha.value} no es bisiesto`;
    }
    fecha.value = "";
    fecha.focus();
}