//Fetch and Promises
function getBikes() {
return new Promise(function(resolve, reject) {
	fetch('http://api.citybik.es/v2/networks').then((res) => {
	return res.json()
}).then((res) => {
	resolve(res);
}).catch((e) => {
	reject(e);
})	
})
}

getBikes().then(function(result) {
	console.log('my result', result)
}).catch(function(e){
	console.log('error', e)
})

//Arrrow function
function Student(name, age) {
	this.name = name;
	this.age = age;
	this.calcAge = function() {
		debugger
		console.log('this***', this);
		var xyz = () => {
			console.log('this from xyz', this)
// 			this.age = age * 2;
		}
		xyz();
	}
}

var student1 = new Student("Kashif", 45);

//template literal
var text = "wow";
`hello world ${text} to Pakistan`;

//Default Parameters
function multiply(x = 5, y = 1) {
	return x * y
}
multiply();
multiply(3);

//Array.map
var arr = [23, 42, 53, 65, 75];
var list = arr.map(function(elem, index){
	return elem * 2;
})
console.log(list);