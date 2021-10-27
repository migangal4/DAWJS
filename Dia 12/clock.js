class Clock{

    #ctx;
    #canvas;
    #pi;
    #radio;
    #x;
    #y;
    #date;

    constructor(){

        this.#canvas = document.getElementById('clock');
        this.#ctx = this.#canvas.getContext('2d');

        this.#pi = Math.PI;

        this.#x = 250;
        this.#y = 250;

        this.#radio = 200;

        
        
        
        this.#ctx.strokeStyle = 'black';
        this.#ctx.beginPath();
        this.#ctx.arc(this.#x, this.#y, this.#radio, 0, 2 * this.#pi);
        this.#ctx.stroke();
        this.#ctx.closePath();


        var angle = 2 * this.#pi / 60;

        

        for (var i = 0; i < 60; i++){

            this.#ctx.beginPath();
            this.#ctx.strokeStyle = 'red';
            var cart = this.#polares_cartesianas(angle*i, this.#radio - 5);
            var cart_final = this.#polares_cartesianas(angle*i);
            this.#ctx.moveTo(cart[0],cart[1]);
            this.#ctx.lineTo(cart_final[0],cart_final[1]);
            this.#ctx.closePath();
            this.#ctx.stroke();
        }

        angle = this.#pi / 6;

        for (var i = 0; i < 12; i++){

            this.#ctx.beginPath();
            this.#ctx.strokeStyle = 'red';
            var cart = this.#polares_cartesianas(angle*i, this.#radio - 20);
            var cart_final = this.#polares_cartesianas(angle*i);
            this.#ctx.moveTo(cart[0],cart[1]);
            this.#ctx.lineTo(cart_final[0],cart_final[1]);
            this.#ctx.closePath();
            this.#ctx.stroke();
        }

        
        
        
    }

    #polares_cartesianas(z, rad = this.#radio){
        var x = rad * Math.cos(z) + this.#x;
        var y = rad * Math.sin(z) + this.#y;
        return [x,y];
    }

    draw_hour(){
        
        this.#clear();

        var date = new Date();

        var angulo = 2 * this.#pi / 12;

            

        // Horas
            this.#ctx.beginPath();
            this.#ctx.strokeStyle = 'blue';
            this.#ctx.lineWidth = 4;
            
            var cart_final = this.#polares_cartesianas(angulo * (date.getHours() % 12 + 9), this.#radio - 100);
            this.#ctx.moveTo(this.#x, this.#y);
            this.#ctx.lineTo(cart_final[0],cart_final[1]);
            this.#ctx.closePath();
            this.#ctx.stroke();

        angulo = 2 * this.#pi / 60;

        // Minutos
            this.#ctx.beginPath();
            this.#ctx.strokeStyle = 'green';

            var cart_final = this.#polares_cartesianas(angulo * (date.getMinutes() % 60 + 45), this.#radio - 40);
            this.#ctx.moveTo(this.#x, this.#y);
            this.#ctx.lineTo(cart_final[0],cart_final[1]);
            this.#ctx.closePath();
            this.#ctx.stroke();


        // Segundos
            this.#ctx.beginPath();
            this.#ctx.strokeStyle = 'black';

            var cart_final = this.#polares_cartesianas(angulo * (date.getSeconds() % 60 + 45), this.#radio - 25);
            this.#ctx.moveTo(this.#x, this.#y);
            this.#ctx.lineTo(cart_final[0],cart_final[1]);
            this.#ctx.closePath();
            this.#ctx.stroke();

            

    }

    #clear(){

        this.#ctx.beginPath();
        this.#ctx.fillStyle = 'white';
        this.#ctx.arc(this.#x, this.#y, this.#radio - 20, 0, 2 * this.#pi);
        this.#ctx.fill();
        this.#ctx.closePath();

    }
}
var clock = new Clock();

let timerId = setInterval(function(){clock.draw_hour()}, 1000);


