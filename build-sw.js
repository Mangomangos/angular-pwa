const { injectManifest } = require('workbox-build');

const swSrc = './sw.js';
const swDest = 'dist/angular-blog/sw.js';
injectManifest({
  swSrc,
  swDest,
  globDirectory: 'dist/angular-blog'
}).then(({count, size}) => {
  console.log(`Generated ${swDest}, which will precache ${count} files, totaling ${size} bytes.`);
});