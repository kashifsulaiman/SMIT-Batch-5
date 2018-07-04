const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


exports.makeUppercase = functions.firestore
//messages/{messageId}
.document('users/{userId}').onWrite((change, context) => {
  console.log('change***', change.after.data());
  // Then return a promise of a set operation to update the count
  return change.after.ref.set({
    name: change.after.data().name.toUpperCase()
  }, {merge: true});
  //opponent userId notification push
});