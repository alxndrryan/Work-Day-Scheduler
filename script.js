var currentDay = document.querySelector("#currentDay");


var nineAm = document.querySelector("#nineAm");
var nineButton = document.querySelector("#nine-submit");
var tenAm = document.querySelector("#tenAm");
var tenButton = document.querySelector("#ten-submit");
var eleAm = document.querySelector("#eleAm");
var eleButton = document.querySelector("#ele-submit");
var twePm = document.querySelector("#twePm");
var tweButton = document.querySelector("#twe-submit");
var onePm = document.querySelector("#onePm");
var oneButton = document.querySelector("#one-submit");
var twoPm = document.querySelector("#twoPm");
var twoButton = document.querySelector("#two-submit");
var threePm = document.querySelector("#threePm");
var threeButton = document.querySelector("#three-submit");
var fourPm = document.querySelector("#fourPm");
var fourButton = document.querySelector("#four-submit");
var fivePm = document.querySelector("#fivePm");
var fiveButton = document.querySelector("#five-submit");



renderToDo();


//RENDER FUNCTION

function renderToDo(){
    var ninetodos = localStorage.getItem("ninetodos");

    nineAm.textContent = ninetodos;

    var tentodos = localStorage.getItem("tentodos");

    tenAm.textContent = tentodos;
    
    var eletodos = localStorage.getItem("eletodos");

    eleAm.textContent = eletodos;

    var twetodos = localStorage.getItem("twetodos");

    twePm.textContent = twetodos;

    var onetodos = localStorage.getItem("onetodos");

    onePm.textContent = onetodos;

    var twotodos = localStorage.getItem("twotodos");

    twoPm.textContent = twotodos;

    var threetodos = localStorage.getItem("threetodos");

    threePm.textContent = threetodos;

    var fourtodos = localStorage.getItem("fourtodos");

    fourPm.textContent = fourtodos;

    var fivetodos = localStorage.getItem("fivetodos");

    fivePm.textContent = fivetodos;
};



//BUTTONS

nineButton.addEventListener("click", function(){
    ninetodos = nineAm.value;

    localStorage.setItem("ninetodos", ninetodos);
});

tenButton.addEventListener("click", function(){
    tentodos = tenAm.value;

    localStorage.setItem("tentodos", tentodos);
});

eleButton.addEventListener("click", function(){
    eletodos = eleAm.value;

    localStorage.setItem("eletodos", eletodos);
});

tweButton.addEventListener("click", function(){
    twetodos = twePm.value;

    localStorage.setItem("twetodos", twetodos);
});

oneButton.addEventListener("click", function(){
    onetodos = onePm.value;

    localStorage.setItem("onetodos", onetodos);
});

twoButton.addEventListener("click", function(){
    twotodos = twoPm.value;

    localStorage.setItem("twotodos", twotodos);
});

threeButton.addEventListener("click", function(){
    threetodos = threePm.value;

    localStorage.setItem("threetodos", threetodos);
});

fourButton.addEventListener("click", function(){
    fourtodos = fourPm.value;

    localStorage.setItem("fourtodos", fourtodos);
});

fiveButton.addEventListener("click", function(){
    fivetodos = fivePm.value;

    localStorage.setItem("fivetodos", fivetodos);
});

renderToDo();



//when button clicked, save text