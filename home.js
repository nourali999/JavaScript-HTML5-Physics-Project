var output = document.getElementById("container-output");
var initialVelocity;
var height;
var angle;
var a;
var b;
var c;
var t;
var Vox;
var Voy = b;











function calculateChangeInX(){
    initialVelocity = document.getElementById("InV").value;
    height = document.getElementById("h").value;
    angle = document.getElementById("angl").value;

    if(isNaN(initialVelocity+height+angle)){

        document.getElementById("solution").innerHTML = 'Please enter a valid number'; 

    }else {

    a = -2.45;
    
    // b is equavalent to Voy 
    b = (initialVelocity*Math.sin(angle * Math.PI / 180));
    

    c = height;


    t = solve(a,b,c);
 

    Vox = (initialVelocity*Math.cos(angle * Math.PI /180));
    console.log(a, b, c, Vox);

    document.getElementById("solution").innerHTML = Math.round(Vox*t,2) + ' m';
    }
}







function solve(a , b, c) {
    var result = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    var result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    return Math.max(result,result2);
}