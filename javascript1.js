let button= document.getElementById("btn");
button.addEventListener("click", function() {
    let word= document.getElementById("str").value;
    let count=word.length;
    let outPut = document.getElementById("output");
    outPut.innerHTML = `<h1>${count}</h1>`;
})