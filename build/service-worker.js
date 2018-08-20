importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

workbox.routing.registerRoute(
  new RegExp('https://js.arcgis.com/3.24/dijit/themes/tundra/tundra.css'),
  workbox.strategies.cacheFirst({
    cacheName: 'tundra',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30,
      }),
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      }),
    ],
  }),
);

workbox.routing.registerRoute(
  new RegExp('https://js.arcgis.com/3.24/esri/css/esri.css'),
  workbox.strategies.cacheFirst({
    cacheName: 'esri',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30,
      }),
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      }),
    ],
  }),
);


workbox.routing.registerRoute(
  new RegExp('https://js.arcgis.com/3.24/'),
  workbox.strategies.cacheFirst({
    cacheName: 'arcgis',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30,
      }),
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      }),
    ],
  }),
);

workbox.routing.registerRoute(
  /.*(?:arcgisonline|arcgis)\.com.*$/,
  workbox.strategies.staleWhileRevalidate(),
);

var CACHE_NAME = 'static-cache';
var urlsToCache = [
  '.',
  'index.html',
  'js/dataFile.js',
  'js/loadMap.js',
  'images/optimized_image1.jpg',
  'images/optimized_image2.jpg',
  'images/optimized_image3.jpg',
  'images/optimized_image4.jpg',
  'style.css'
];


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      return response || fetchAndCache(event.request);
    })
  );
});

function fetchAndCache(url) {
  return fetch(url)
  .then(function(response) {
    // Check if we received a valid response
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return caches.open(CACHE_NAME)
    .then(function(cache) {
      cache.put(url, response.clone());
      return response;
    });
  })
  .catch(function(error) {
    console.log('Request failed:', error);
    // You could return a custom offline 404 page here
  });
}


} else {
  console.log(`Boo! Workbox didn't load 😬`);
}


