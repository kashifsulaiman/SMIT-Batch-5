const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.sendNotification = functions.firestore.document('rooms/{roomId}/messages/{messageId}')
.onWrite((event) => {
    const payload = {
        notification: {
            title: 'New Message from',
            body: 'New Message Body',
            status: 'Wohoo its work',
        }
    }
//userId that will receive message
    console.info(payload)

    console.info('event***', event.after.data());

    const receiverId = event.after.data().receiverId;

    return admin.firestore().collection(`users`).doc(receiverId).get().then((res) => {

        if (!res.data()) return;

        const snapshot = res.data();
        const token = snapshot.token;

        return admin.messaging().sendToDevice(token, payload);
    });
})