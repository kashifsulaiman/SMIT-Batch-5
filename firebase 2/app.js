
var table = document.getElementById('pokedex');

// var proxyURL = 'https://cors-anywhere.herokuapp.com/';
// fetch(proxyURL + 'http://pokeapi.co/api/v2/pokemon').then((res) => {
//     return res.json();
// }).then((res) => {
//     console.log(res);
//     res.results.map((elem) => {
//         fetch(proxyURL + elem.url).then((res) => {
//             return res.json();
//         }).then((res) => {
            
//             var tr = document.createElement('TR');
//             var avatar = document.createElement('TD');
//             var name = document.createElement('TD');
            
//             avatar.innerHTML = `<img src='${res.sprites.front_default}'/>`;
//             name.innerHTML = res.name;

//             tr.appendChild(avatar);
//             tr.appendChild(name);
//             table.appendChild(tr);
//         })
//     })
// })


// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// db.collection("users").add({
//     name: "Kashif",
//     age: 25
// })
// // .then(function(docRef) {
// //     console.log("Document written with ID: ", docRef.id);
// // })
// // .catch(function(error) {
// //     console.error("Error adding document: ", error);
// // });

db.collection("users").delete()

// db.collection("users")
//     .onSnapshot(function(querySnapshot) {
//         var cities = [];
//         querySnapshot.docChanges().forEach(function(change) {
//             if (change.type === "added") {
//                 console.log("New todo: ", change.doc.data());
//             }
//             if (change.type === "modified") {
//                 console.log("todo modified: ", change.doc.data());
//             }
//             if (change.type === "removed") {
//                 console.log("Removed city: ", change.doc.data());
//             }
//         });
//     });

db.collection("users")
    .onSnapshot(function(querySnapshot) {
        table.innerHTML = "";
        querySnapshot.forEach(function(doc) {
            var tr = document.createElement('TR');
            var name = document.createElement('TD');
            
            name.innerHTML = doc.data().name;

            tr.appendChild(name);
            table.appendChild(tr);
        });
    });


// db.collection("users").where("age", ">=", 25).get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(doc.id, doc.data());
//     });
// });