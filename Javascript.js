function add(){
    var num1=document.getElementById("first").value;
    var num2=document.getElementById("second").value;
    var result=parseInt(num1) + parseInt(num2);
    console.log(result);
    document.getElementsByClassName("output")[0].innerHTML= "Adition is =" +result;
}
function sub(){
    var num1 = document.getElementById("first").value;
    var num2 = document.getElementById("second").value;
    var result = parseInt(num1) - parseInt(num2);
    console.log(result);
    document.getElementsByClassName("output")[0].innerHTML= "Subtraction is =" + result;
}

function mult(){
    var num1 = document.getElementById("first").value;
    var num2 = document.getElementById("second").value;
    var result = parseInt(num1) * parseInt(num2);
    console.log(result);
    document.getElementsByClassName("output")[0].innerHTML="Multiplication is =" + result; result;
}
function div(){
    var num1 = document.getElementById("first").value;
    var num2 = document.getElementById("second").value;
    var result = parseInt(num1) / parseInt(num2);
    console.log(result);
    document.getElementsByClassName("output")[0].innerHTML ="Division is =" +result;
}