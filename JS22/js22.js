/*fetch('https://opentdb.com/api.php?amount=10').then(function(res){
	return res.json();
}).then(function(res){
	console.log(res);
})*/

//Showing loading and data on website.

/*var body = document.getElementById('body');
var img = document.createElement('img');
img.src= "https://cdn.dribbble.com/users/600626/screenshots/2944614/loading_12.gif"
img.id = "image-1"
body.appendChild(img);

var image = document.getElementById('image-1');
 
fetch('https://opentdb.com/api.php?amount=10000').then(function(res){
	return res.json()
}).then(function(res){
	console.log(res.results)
	image.remove();
	for(var i = 0; i < res.results.length; i++){
		var paragraph = document.createElement('p');
		paragraph.innerHTML = res.results[i].question;
		body.appendChild(paragraph)
	}
})*/


//Promise
function getQuizzes() {
	debugger;
	return new Promise(function(resolve, reject){
		fetch('https://opentdb.com/api.php?amount=10').then(function(res){
				return res.json();
		}).then(function(res){
			console.log(res);
			resolve(res);
		})
		
	})
}

getQuizzes().then(function(res){
	console.log('res from get quizzes', res);
});

console.log('han bhaui ********************')