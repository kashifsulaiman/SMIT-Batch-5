function changeTheText(){
	var text = document.getElementById('text');
	//console.log(text.innerHTML)
	text.innerHTML = "World Hello";
}

function readMore(){
	var text = document.getElementById('text');
	//console.log(text.innerHTML)
	text.innerHTML = "Hello World Mohammad Kashif Sulaiman!";

	var less = document.getElementById("less");
	less.style.display = "block";

	var more = document.getElementById("more");
	more.style.display = "none";
}

function readMoreByClass(){
	var text = document.getElementById('text');
	//console.log(text.innerHTML)
	text.innerHTML = "Hello World Mohammad Kashif Sulaiman!";

	var less = document.getElementById("less");
	less.className = "show";

	var more = document.getElementById("more");
	more.className = "hidden";
}

function add(){
	var input1 = document.getElementById('input-text1');
	var input2 = document.getElementById('input-text2');

	console.log(input1.value);
	console.log(input2.value);
}