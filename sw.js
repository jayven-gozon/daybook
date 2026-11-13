var C="daybook-v28",F=["./","index.html","manifest.webmanifest","icon-180.png","icon-192.png","icon-512.png"];
self.addEventListener("install",function(e){
  e.waitUntil(caches.open(C).then(function(c){
    return Promise.all(F.map(function(u){
      return fetch(new Request(u,{cache:"reload"})).then(function(r){if(!r.ok)throw new Error(u);return c.put(u,r)})
    }))
  }).then(function(){return self.skipWaiting()}))
});
self.addEventListener("activate",function(e){
  e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==C}).map(function(x){return caches.delete(x)}))}).then(function(){return self.clients.claim()}))
});
self.addEventListener("fetch",function(e){
  var rq=e.request;
  if(rq.method!=="GET"||new URL(rq.url).origin!==location.origin)return;
  var net=fetch(rq.url,{cache:"no-cache"}).then(function(r){
    if(r&&r.ok){var c=r.clone();caches.open(C).then(function(x){x.put(rq,c)})}
    return r
  });
  var wait=new Promise(function(res){setTimeout(function(){res(null)},4000)});
  e.respondWith(Promise.race([net.catch(function(){return null}),wait]).then(function(r){
    return r||caches.match(rq).then(function(m){return m||caches.match("index.html")||net})
  }))
});
