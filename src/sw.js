import { precacheAndRoute } from "workbox-precaching";

// self.addEventListener('install', (event) =>{
//     const cacheKey = cacheName;
// }
//     event.waitUntil(caches.open(cacheKey).then((cache) =>{
//         return cache.addAll();
//     }))
// )

precacheAndRoute([
  {
    revision: "d41d8cd98f00b204e9800998ecf8427e",
    url: "app/app.component.css",
  },
  {
    revision: "ce774991705941b3296473163f519a72",
    url: "app/app.component.html",
  },
  {
    revision: "c360385be8097588bac29c5ca39e3d73",
    url: "app/app.component.spec.ts",
  },
  { revision: "da406fa768b50e2cd1d8fc4baa7fa2d4", url: "app/app.component.ts" },
  { revision: "96337840ea419398aa5aa7d59d973578", url: "app/app.module.ts" },
  {
    revision: "d41d8cd98f00b204e9800998ecf8427e",
    url: "app/components/add-restaurant/add-restaurant.component.css",
  },
  {
    revision: "d6240487a3051a3a25134fa45271e5a7",
    url: "app/components/add-restaurant/add-restaurant.component.html",
  },
  {
    revision: "5cbd56cffbf83600a7607916c59a699f",
    url: "app/components/add-restaurant/add-restaurant.component.spec.ts",
  },
  {
    revision: "afc7b665b2ee8d8ab1de9d998dbd2249",
    url: "app/components/add-restaurant/add-restaurant.component.ts",
  },
  {
    revision: "d41d8cd98f00b204e9800998ecf8427e",
    url: "app/components/button/button.component.css",
  },
  {
    revision: "0ad2fb1de25688d921d362fc83de768c",
    url: "app/components/button/button.component.html",
  },
  {
    revision: "f99c651e43dff6ac1e3457405ec254ff",
    url: "app/components/button/button.component.spec.ts",
  },
  {
    revision: "369432af4d5a144181a1ce3d5884cad6",
    url: "app/components/button/button.component.ts",
  },
  {
    revision: "9c1d26e0c99a55b28255624f462144d4",
    url: "app/components/header/header.component.css",
  },
  {
    revision: "f6512b09e5ba86edaa0da6e1436f05ed",
    url: "app/components/header/header.component.html",
  },
  {
    revision: "e1818ffc04ec55b97e53d8d288861194",
    url: "app/components/header/header.component.spec.ts",
  },
  {
    revision: "d6f7e07f80b4fd5f98cdc2b9f8f0ca1c",
    url: "app/components/header/header.component.ts",
  },
  {
    revision: "58f9eb4e93c256da52079ee8aa22e44d",
    url: "app/components/restaurant-item/restaurant-item.component.css",
  },
  {
    revision: "5f3b9147cc0c4904820d3ba5a35d82b9",
    url: "app/components/restaurant-item/restaurant-item.component.html",
  },
  {
    revision: "7b121e0f2303709451d83efb24620c29",
    url: "app/components/restaurant-item/restaurant-item.component.spec.ts",
  },
  {
    revision: "1791ce2c9c8b80a9b3db4c23f1893aea",
    url: "app/components/restaurant-item/restaurant-item.component.ts",
  },
  {
    revision: "d41d8cd98f00b204e9800998ecf8427e",
    url: "app/components/restaurants/restaurants.component.css",
  },
  {
    revision: "7edae6fa3179b0cd7d63787707c01c43",
    url: "app/components/restaurants/restaurants.component.html",
  },
  {
    revision: "09b3835501d3549d0bf2a8db58f2882f",
    url: "app/components/restaurants/restaurants.component.spec.ts",
  },
  {
    revision: "f889aa24ccb189cd29e20e4ed260a888",
    url: "app/components/restaurants/restaurants.component.ts",
  },
  {
    revision: "43c18b2e2fe2dcc07d90b909885b1281",
    url: "app/services/restaurant.service.spec.ts",
  },
  {
    revision: "d68b3ee91b497c95ba92b094360e08fc",
    url: "app/services/restaurant.service.ts",
  },
  {
    revision: "93a8aaf2fe9bd07466ec1f390f824c8d",
    url: "app/services/ui.service.spec.ts",
  },
  {
    revision: "626b3fdaecc7c550c6793ea30762948a",
    url: "app/services/ui.service.ts",
  },
  { revision: "3561fccc3f29e324f9cd0eb24f2d5da3", url: "index.html" },
  { revision: "921b28076cc72654b6dac600f202419d", url: "main.ts" },
  { revision: "064f2417ca942874f5563a42074eba79", url: "Restaurant.ts" },
  { revision: "613214a5a2150265225eb2c8de93ff7e", url: "styles.css" },
]);
