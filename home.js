var output = document.getElementById("container-output");
var initialVelocity;
var height;
var angle;
var a;
var b;
var c;
var t;
var Vox;
var Voy =b;



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

   

    outputString();
   


    }
}







function solve(a , b, c) {
    var result = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    var result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    return Math.max(result,result2);
}



function outputString(){
    var word = "";

    word+= "<p> Given  </p>" + " $\\Delta_y = $"+ " "+ height +" "+ " "+ "$V_{0y} = $ "+" "+ b+ "  ";

    word+= "$\\frac{1}{2} g_{x} =$"+ " "+a + "<br/>" + "<br/>" + "<hr>";

    word+= "$ \\Delta_y = V_{0y} - \\frac{1}{2} g_{x} t^{2}  $" + "<br/> ";

    word+= "<p>  Rearranging  we get,  </p>"         +              "<br/>";

    word+= "$ 0 =  - \\frac{1}{2} g_{x} t^{2} + V_{0y}  - \\Delta_y$ " + "<br/> <br/>";

    word+= "<p>Substituting we have, <p/>"+ "<br/>"; 
    
    word+= "$0 = $" + "  " + a +" " + "$t^{2}$"+ " "+ " $+$" + b+"$t$" +" " + "$+$" +" "+c;
    word+= "<br/> <br/>";

    word+= "$$t = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$" + "<br/>" + "<p>Substituing in for the quadratic formula we have , </p>"+" <br/> ";

    word+= "$t =  $" + "$-$" + b + " "+  "$\\pm$";





   document.getElementById("container-output").innerHTML = word;

   MathJax.Hub.Queue(["Typeset",MathJax.Hub,"container-output"]);


}

  