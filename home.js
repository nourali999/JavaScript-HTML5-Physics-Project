console.log('hello');



function addAge(){
    var inputVal = document.getElementById('InV');
    console.log('My age is : ' + inputVal);
}


function calculateChangeInX(){
   let t = solve(-2.45,4,5);
   document.getElementById("solution").innerHTML = Math.round(6.9*t,2) + ' m';
}

function solve(a, b, c) {
    var result = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    var result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    return Math.max(result,result2);
}