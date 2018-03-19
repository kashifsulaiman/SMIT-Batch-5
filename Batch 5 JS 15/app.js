debugger;
/*var totalP = document.getElementsByTagName("p");
console.log(totalP.length);

for(var i = 0; i < totalP.length; i++){
    totalP[i].innerHTML = ""
}*/

var div1 = document.getElementById("div1");
//var puranaNaam = div1.getAttribute('fathersName');
//div1.setAttribute('', puranaNaam + 'Pappa');

/*var img1 = document.getElementById('img1');
var newAttributes = ["kaka", "font-size: 14px"];


for(var i = 0; i < img1.attributes.length; i++){
    img1.attributes[i].value = newAttributes[i];
}*/


/*var checkBefore = img1.hasAttribute('src');
console.log('checkBefore');
console.log(checkBefore);

img1.setAttribute("src", "abc.jpg");

var checkAfter = img1.hasAttribute('src');
console.log('checkAfter');
console.log(checkAfter);

var checkStyle = img1.getAttribute('style');
console.log(checkStyle);
*/


//var newElement = document.createElement("form");
//console.log(newElement);
//div1.appendChild(newElement);
//
//var firstElement = div1.childNodes[2];
//div1.insertAfter(newElement, firstElement);

/*var parentDiv = document.getElementById("div1");
var newParagraph = document.createElement("p");

var t = document.createTextNode("Hello world!");
newParagraph.appendChild(t);

var paragraph1 = parentDiv.firstChild;
parentDiv.insertBefore(newParagraph, paragraph1);
*/


//todolist
function addItem(){
    var value = document.getElementById('input').value;
    var body = document.getElementById('body');

    var newItem = document.createElement("input");
    newItem.value = value;
    body.appendChild(newItem);
}
