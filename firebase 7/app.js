const messaging = firebase.messaging();

messaging.requestPermission().then(function() {
	console.log('Notification permission granted.');
	return messaging.getToken()
}).then(function(currentToken) {
	console.log('currentToken****');
	console.log(currentToken)
}).catch(function(err) {
	console.log('Unable to get permission to notify.', err);
});

messaging.onMessage((payload) => {
	console.log('payload****')
	console.log(payload)
})


//Way to push notification using fetch!


//var key = 'AIzaSyAor9xjGx6Lf29F8fo9Lg-CMg9sncNtf64';
//var to = 'fvsGRkiUX0k:APA91bHiyBU5hGD_9_iyJnXFic2tL3NeekqyYn_oKvXlp-Q_UOKPdtowXPRYKJXPAgk-xOa98uTZPEm3mnYIdwqzNX0hP7Q_dtxy17HRG_YZQ0AICLng99Do7ZzOZudPZku9VXE67rE4';
//var notification = {
//	'title': 'Portugal vs. Denmark',
//	'body': '5 to 1'
//};
//
//fetch('https://fcm.googleapis.com/fcm/send', {
//	'method': 'POST',
//	'headers': {
//		'Authorization': 'key=' + key,
//		'Content-Type': 'application/json'
//	},
//	'body': JSON.stringify({
//		'notification': notification,
//		'to': to
//	})
//}).then(function(response) {
//	console.log(response);
//}).catch(function(error) {
//	console.error(error);
//});