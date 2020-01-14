var output = document.getElementById("container-output");














console.log('hello');














function calculateChangeInX(){
   let t = solve(-2.45,4,5);
   var initialVelocity = document.getElementById("InV").value;
   var height = document.getElementById("h").value;
   var angle = document.getElementById("angl").value;
   document.getElementById("solution").innerHTML = Math.round(6.9*t,2) + ' m ' + initialVelocity;
   
}







function solve(a, b, c) {
    var result = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    var result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    return Math.max(result,result2);
}