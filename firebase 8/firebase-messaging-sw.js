console.log('... Service Worker File Running ...');

// Listner for Push Notification
self.addEventListener('push', function (event) {
  console.log('Received a push message', event);

  var notification = event.data.json().notification
  console.log(notification)
  var title = notification.title || 'Yay a message.';
  var body = notification.body || 'We have received a push message.';
  var icon = '/images/icon-192x192.png';
  // var tag = 'simple-push-demo-notification-tag';

  event.waitUntil(
    self.registration.showNotification(title, {
      body: body,
      icon: icon,
      // tag: tag
    })
  );

});