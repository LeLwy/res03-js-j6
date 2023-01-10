function exercice1()
{
    let canvasDom = document.getElementById("ex1");
    let  ctx  =  canvasDom.getContext('2d');
    
    ctx.fillStyle  =  "#FF0000";
    ctx.fillRect(200, 150, 200, 200);

}

function exercice2()
{
    let canvasDom = document.getElementById("ex2");
    let  ctx  =  canvasDom.getContext('2d');
    
    let circle = {
    color: "#1c39dd",
    radius:100,
    x:300,
    y:250
    
    };
    
    ctx.fillStyle = circle.color;
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fill();

}

function exercice3()
{
    let canvasDom = document.getElementById("ex3");
    let  ctx  =  canvasDom.getContext('2d');
    
    ctx.font = 'bold 68px Montserrat';
    ctx.fillStyle ='#000000';
    ctx.fillText('Geometry.io', 150, 250);

}

function exercice4()
{
    let canvasDom = document.getElementById("ex4");
    let ctx = canvasDom.getContext('2d');
    
    let circle = {
    color: "#1c39dd",
    radius:100,
    x:150,
    y:200,
    stop: null
    
    };
    
    circle.stop = setInterval(function(){

        
        if(circle.x < 300){
            
            ctx.clearRect(0, 0, canvasDom.width, canvasDom.height);
            
            ctx.fillStyle = circle.color;
            ctx.beginPath();
            ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
            ctx.fill();
            
            circle.x += 10;
            circle.y -= 5;
            
        }else{
            
            clearInterval(circle.stop);
        }
    
    }, 100);
}

function exercice5()
{
    let canvasDom = document.getElementById("ex5");
    let  ctx  =  canvasDom.getContext('2d');

}

function exercice6()
{
    let canvasDom = document.getElementById("ex6");
    let  ctx  =  canvasDom.getContext('2d');

}

function initCanvasSize()
{
    // setting the size of the canvas
    let canvasList = document.querySelectorAll("canvas");

    for(canvas of canvasList)
    {
        let section = canvas.parentNode;

        canvas.width = section.clientWidth;
        canvas.height = section.clientHeight;
    }
}

window.addEventListener("DOMContentLoaded", function(){
   initCanvasSize();
   exercice1();
   exercice2();
   exercice3();
   exercice4();
   exercice5();
   exercice6();
});