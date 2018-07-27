var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
};
firebase.initializeApp(config);
// getting messaging Object from firebase

const db = firebase.database();
let limit = 10;
let stopData = false;

console.time();
getData();


document.addEventListener('scroll', function (event) {
    console.log(document.body.scrollHeight - 20, document.body.scrollTop + window.innerHeight);

    if (document.body.scrollHeight - 20 <= 
        document.body.scrollTop +        
        window.innerHeight) {
            console.log('call');
            if(!stopData) {
                onScrollToBottom();
            }
    }
});

function getData() {
    const list = document.getElementById('list');
    stopData = true;
    db.ref('timePeriod').limitToFirst(limit).once('value', (snapshot) => {
        list.innerHTML = "";
        console.log('snapshot.val()');
        console.log(snapshot.val());

        const data = snapshot.val();
        for(var key in data) {
            const item = document.createElement('LI');

            item.innerHTML = `${data[key].name} | ${new Date(data[key].timeIn)}`

            list.appendChild(item);
        }
        stopData = false;
        console.timeEnd();
    });
}

function onScrollToBottom() {
    limit += 10;
    getData();
}


