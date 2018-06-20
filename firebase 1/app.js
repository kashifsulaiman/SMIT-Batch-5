
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

// db.collection("pokemon").add({
//     name: "Pikachu",
//     owner: "Ash"
// })
// .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
// });

db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.data());
        
        var tr = document.createElement('TR');
        var firstName = document.createElement('TD');
        var born = document.createElement('TD');
                    
        firstName.innerHTML = doc.data().first;
        born.innerHTML = doc.data().born;
        
        tr.appendChild(firstName);
        tr.appendChild(born);
        table.appendChild(tr);
    });
});