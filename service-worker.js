/* 高岛易断 PWA Service Worker - 离线缓存 */
const CACHE_NAME = 'gaodao-yiduan-v2025.6.12';
const PRECACHE_URLS = [
    './',
    './index.html',
    './style.css',
    './guaData.js',
    './main.js',
    './manifest.json'
];

// 安装：预缓存核心资源
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(PRECACHE_URLS))
            .then(() => self.skipWaiting())
            .catch(() => {})
    );
});

// 激活：清理旧版本缓存
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((keys) => Promise.all(
                keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
            ))
            .then(() => self.clients.claim())
    );
});

// 请求拦截：优先缓存，失败再回网络
self.addEventListener('fetch', (event) => {
    const req = event.request;
    if (req.method !== 'GET') return;

    event.respondWith(
        caches.match(req).then((cached) => {
            if (cached) return cached;
            return fetch(req).then((resp) => {
                // 只缓存同源的 GET 请求
                if (resp && resp.status === 200 && resp.type === 'basic') {
                    const clone = resp.clone();
                    caches.open(CACHE_NAME).then((c) => c.put(req, clone)).catch(() => {});
                }
                return resp;
            }).catch(() => caches.match('./index.html'));
        })
    );
});
