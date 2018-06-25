

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

function signUp() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var pwd = document.getElementById('pwd').value;

    console.log(email, pwd);

    firebase.auth().createUserWithEmailAndPassword(email, pwd)
    .then(function(res) {
        alert('Registered Successfully!');
        console.log('res =>', res.user.uid);

        db.collection('users').doc(res.user.uid).set({name, email})
        .then(() => {
            console.log('Added in db');
        })
        .catch((e) => {
            console.log('error Adding in db');
        })
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        // ...
      });
}

function signIn() {
    var email = document.getElementById('email').value;
    var pwd = document.getElementById('pwd').value;

    firebase.auth().signInWithEmailAndPassword(email, pwd)
    .then((res) => {
        console.log(res)

        var serviceForm = document.getElementById('service-form');
        serviceForm.className = "";
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        // ...
      });
}

function addService() {
    var name = document.getElementById('service-name').value;
    var country = document.getElementById('service-country').value;

    db.collection('services').add({name, country, uid: firebase.auth().currentUser.uid})
}

getServices();

function getServices() {
    var table = document.getElementById('services');

    db.collection('services').get()
    .then((res) => {
        res.forEach((doc) => {
            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');
            var td4 = document.createElement('td');

            td1.innerHTML = doc.data().name;
            td2.innerHTML = doc.data().country;
            td3.innerHTML = doc.data().uid;

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);

            db.collection('users').doc(doc.data().uid).get()
            .then((res) => {
                console.log(res.data());
                td4.innerHTML = res.data().name;
                tr.appendChild(td4);
            })

            table.appendChild(tr);
        })
    })
}