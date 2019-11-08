// var newDiv = $("<div>");

// newDiv.text("A pleasure to meet you!");

var nineAm = document.querySelector("#nineAm");
var submitButton = document.querySelector("#submit");

var todos = localStorage.getItem("todos");

todos = nineAm.value;

submitButton.addEventListener("click", function(){
    todos = nineAm.value;

    localStorage.setItem("todos", todos);
})



//when button clicked, save text