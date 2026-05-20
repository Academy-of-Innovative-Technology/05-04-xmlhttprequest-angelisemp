const data = document.querySelector("#name");

const but1 = document.querySelector(".press");

but1.addEventListener("onclick", function(event) {

    console.log("Click successful!");

let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        console.log(JSON.parse(xhttp.responseText));
    }
};

var obj = {
firstName: name,
favoriteFood: food
}; 

console.log(JSON.stringify( obj ))
});

