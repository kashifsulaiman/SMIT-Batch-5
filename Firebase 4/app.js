

// // Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

db.collection('users').add({name: 'Kashif', age: 25})
db.collection('users').doc('123').set({name: 'Kashif', age: 25})

// users --> 123 --> {name: 'Kashif', age: 25, createdAt: 'date xyz'}
db.collection('users').doc('123').set({name: 'Javed'})
// users --> 123 --> {name: 'Javed'}

// users --> 123 --> {name: 'Kashif', age: 25, createdAt: 'date xyz'}
db.collection('users').doc('123').update({name: 'Javed', school: 'abc'})
// users --> 123 --> {name: 'Javed', age: 25, createdAt: 'date xyz', school: 'abc'}

db.collection('users').doc('123').delete();

//Getting data
db.collection('users').get()
.then((snapshot) => {
    snapshot.forEach((doc) => {
        console.log(doc.id)
    })
})

//Getting data but Real Time
db.collection('users')
.onSnapshot((snapshot) => {
    snapshot.forEach((doc) => {
        console.log(doc.data())
    })
})

//Getting data but Real Time with changes
db.collection('users')
.onSnapshot((snapshot) => {
    
})



// users --> 123 --> {name: 'Javed', age: 25, createdAt: 'date xyz', school: 'abc'}
//           xyz --> {name: 'Kashif', age: 25, createdAt: 'date xyz', school: 'abc'}

var auth = firebase.auth();

// function signUp() {
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var pwd = document.getElementById('pwd').value;

//     console.log(email, pwd);

    auth.createUserWithEmailAndPassword(email, pwd)
    .then(function(res) {
//         alert('Registered Successfully!');
//         console.log('res =>', res.user.uid);

//         db.collection('users').doc(res.user.uid).set({name, email})
//         .then(() => {
//             console.log('Added in db');
//         })
//         .catch((e) => {
//             console.log('error Adding in db');
//         })
    })
    .catch(function(error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         console.log(errorMessage);
//         // ...
      });
// }

// function signIn() {
//     var email = document.getElementById('email').value;
//     var pwd = document.getElementById('pwd').value;

    auth.signInWithEmailAndPassword(email, pwd)
    // .then((res) => {
//         console.log(res)

//         var serviceForm = document.getElementById('service-form');
//         serviceForm.className = "";
//     })
//     .catch(function(error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         console.log(errorMessage);
//         // ...
//       });
// }

// function addService() {
//     var name = document.getElementById('service-name').value;
//     var country = document.getElementById('service-country').value;

//     db.collection('services').add({name, country, uid: firebase.auth().currentUser.uid})
// }

// getServices();

// function getServices() {
//     var table = document.getElementById('services');

//     db.collection('services').where('age', '>', 25)
//     .onSnapshot((docs) => {
//         docs.forEach((doc) => {
//             console.log('docs ***', doc.data());
//             // var tr = document.createElement('tr');
//             // var td1 = document.createElement('td');
//             // var td2 = document.createElement('td');
//             // var td3 = document.createElement('td');
//             // var td4 = document.createElement('td');

//             // td1.innerHTML = doc.data().name;
//             // td2.innerHTML = doc.data().country;
//             // td3.innerHTML = doc.data().uid;

//             // tr.appendChild(td1);
//             // tr.appendChild(td2);
//             // tr.appendChild(td3);

//             // db.collection('users').doc(doc.data().uid).get()
//             // .then((res) => {
//             //     console.log(res.data());
//             //     td4.innerHTML = res.data().name;
//             //     tr.appendChild(td4);
//             // })

//             // table.appendChild(tr);
//         })
//     })
// }


//Callback

// function getSomething(callback) {
// 	var res;
// 	setTimeout(() => {
// 		res = {name: 'kashif', age: 24}
// 		callback(res);
// 	}, 4000)
// }

//Callback Hell

// getSomething(function(res) {
// 	console.log('res ==> ', res)
// 	getSomething(function(res) {
// 		console.log('res ==> ', res)
// 		getSomething(function(res) {
// 			console.log('res ==> ', res)
// 			getSomething(function(res) {
// 				console.log('res ==> ', res)
// 				getSomething(function(res) {
// 					console.log('res ==> ', res)
// 				});
// 			});
// 		});
// 	});
// });


//Promise

// function getSomething() {
// 	return new Promise((resolve, reject) => {
		
// 		setTimeout(() => {
// 			res = {name: 'kashif', age: 24}
// 			resolve(res);			
// 		}, 4000)
	
// 	})

// }


// getSomething()
// .then((res) => {
// 	console.log(res);
// })

//Fetch and Promises

// function getSomething() {
// 	return new Promise((resolve, reject) => {
		
// 		fetch('<url>').then((res) => {
// 			return res.json();
// 		}).then((res) => {
// 			resolve(res);
// 			if(res.name == "kashif"){
// 				resolve('Kashif mil gya...')
// 			} else {
// 				reject('Kashif nahi mil')
// 			}

// 		}).catch((e) => {
// 			reject(e);
// 		})
	
// 	})

// }


// getSomething()
// .then((res) => {
// 	console.log(res);
// }).catch((e) => {
// 	console.log(e)
// })
