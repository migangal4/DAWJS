var vec = new Array();

var op1 = [1,2];

var op2 = [3,4];

vec.push(op1);
vec.push(op2);

function test(){
    if ([1,2,3]){
    
        return("si");
    }
    return("no");
}

var Meses = {
    Nombre : [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", `junio`
    ],
    Duracion : [31,28,31,30,31],

    Festivos : [["Enero", 12], ["Marzo", 3]]

    }
    

function calendario(Meses, start){

    mat = matrix(7, 5);
    var inicial_order = Meses.Nombre;
    var inicial_order_d = Meses.Duracion;
    Meses = order_months(Meses, start);
    months = []

    for (i = 0; i < Meses.Nombre.length; i++){


        mat_actual = make_month(Meses.Duracion[i], mat);


        months.push(mat_actual)
    }

    months = add_festives(Meses, months);

    Meses.Nombre = inicial_order;
    Meses.Duracion = inicial_order_d;

    return months;
}

function matrix(row, col){

    var mat = [];

    if (typeof row == "number"){   
        

        if (typeof col == "number"){

            ret = matrix_create(mat, 0, row, col);
            
        }else{

            ret = matrix_create(mat, 0, row.length, col, row);

        }



    }else{


        if (typeof col == "number"){
            console.log("R");

            var mat = [row];

            ret = matrix_create(mat, 1, col, row.length);       

        }else{


            var mat = [row];

            ret = matrix_create(mat, 1, col.length, row.length, col);

        }

        

    }
    


    return ret;

}

function matrix_create(mat, x, row, col, first_col = 0){


    if (first_col){


        var z = 0;

        for (var i = x; i < row; i++){

            mat.push([]);

            mat[i].push(first_col[z]);
            
            z++;

            for (var j = 0; j < col; j++){

                mat[i].push(i + ' ' + j);

            }

        }
    
    }else{

        for (var i = x; i < row; i++){

            mat.push([]);
    
            for (var j = 0; j < col; j++){
    
                mat[i].push(i + ' ' + j);
    
            
    
    
            }

    }

    
    }

    return mat;
}

function make_month(mes, mat){

    for ( var i = 0; i < 5; i++){
        for (var j = 0; j < 7; j++){
            mat[i][j] = i*7 + j + 1;
        }
        
    }
    for ( var i = 0; i < 7; i++){

        if (28 + i >= mes){
            mat[4][i] = "";
        }

    }

    return mat;

}

function add_festives(mes, month){

    mes.Festivos.forEach(festivo => {

        for (var i = 0; i < mes.Nombre.length; i++){
            var name = mes.Nombre[i];
            var day = festivo[1];
            if (festivo[0] == name){
                var x = Math.floor(day/7);
                var y = day - (Math.floor(day/7) * 7);
                month[i][x][y] = month[i][x][y] + " Festivo";
            }
        }

        


        
    });

    return month;
}

function order_months(mes, start){

    if (start == 0){
        return mes;
    }
    var x = mes.Nombre.slice(start, mes.Nombre.length);
    var a = mes.Duracion.slice(start, mes.Duracion.length-1);
    var y = mes.Nombre.slice(0, start);
    var b = mes.Duracion.slice(0, start - 1);

    mes.Nombre = x.concat(y);
    mes.Duracion = a.concat(blur);

    
    return mes;
}

var cal = calendario(Meses, 1);
console.log(cal[4][1]);