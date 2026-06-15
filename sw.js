// SM Shariah Calculator — Service Worker v1.2.0
const CACHE = 'sm-shariah-v1.2.0';
const FILES = [
  './', './index.html', './manifest.json',
  './icon-192.png', './icon-512.png',
  'https://cdn.jsdelivr.net/npm/jameel-noori@1.1.2/fonts/jameel-noori-nastaleeq4.woff2'
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(c => {
      const local = FILES.slice(0,5);
      const cdn   = FILES.slice(5);
      return c.addAll(local).then(() =>
        Promise.allSettled(cdn.map(u =>
          fetch(u,{mode:'cors'}).then(r => r.ok && c.put(u,r)).catch(()=>{})
        ))
      );
    })
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
      .then(() => {
        self.clients.claim();
        self.clients.matchAll({type:'window'}).then(cs =>
          cs.forEach(c => c.postMessage({type:'UPDATE_AVAILABLE',version:'1.1.0'}))
        );
      })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request)
      .then(r => {
        if(r && r.status===200 && e.request.method==='GET')
          caches.open(CACHE).then(c=>c.put(e.request,r.clone()));
        return r;
      })
      .catch(() => caches.match(e.request))
  );
});

self.addEventListener('message', e => {
  if(e.data && e.data.type==='SKIP_WAITING') self.skipWaiting();
});
