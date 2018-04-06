//ternary operator
"hello" != "hello" ? alert("True") : alert("False")

//timeout
var timer = setTimeout(function(){
	alert("timeout ran")
}, 5000)

var input = prompt("Enter 0 to stop the timer");
if(input == "0"){
	alert("timeout stopped");
	clearTimeout(timer);
}

//interval
var counter = 10;
var myInterval = setInterval(function(){
	counter--
	console.log(counter)
	if(counter == 0){
		clearInterval(myInterval)
	}
}, 1000)

//localstorage
var user = {
	name: "kashif",
	password: "123456"
}
localStorage.setItem("user_reg", JSON.stringify(user))

var user = localStorage.getItem("user_reg");
user = JSON.parse(user);
