importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.4/workbox-sw.js");

workbox.routing.registerRoute(/https:\/\/localhost:4100, new workbox.strategies.NetworkFirst());