function changeTheValueByTagName(){
	var tags = document.getElementsByTagName("input");
	tags[1].value = "";
	debugger;
}


function changeTheText(){
	var div = document.getElementById("my-div");
	var pTag = div.getElementsByTagName("p");
	for(var i = 0; i < pTag.length; i++){
		pTag[i].innerHTML = "*********";
	}
	debugger;
}