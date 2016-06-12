console.log('Started', self);
self.addEventListener('install', function(event) {
  self.skipWaiting();
  console.log('Installed', event);
});
self.addEventListener('activate', function(event) {
  console.log('Activated', event);
});
self.addEventListener('push', function(event) {
  console.log('Push message received', event);
  // TODO
});

// 342911236320
// AIzaSyDkf2PMmKIETOliNnq1GNcKA7jZG57ZzYA
// ce3sTXB4DeE:APA91bHwgN67bVDgJ0b1XDPaPe9mm_7bsxrms2jVvuhLSAdSn6VVZu3ntiRB2RWKilDMrvLKTUu_C1Ozch7tCgMM9srk7ju4wD5Iu9OHfkPIw4mpIYg-OVQiQfLQE-nkxGl2iobrLfBM