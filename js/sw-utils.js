"use strict";
function actulizaCacheDinamico(dynamicCache, req, res) {
    if (res.ok) {
        return caches.open(dynamicCache).then((cache) => {
            cache.put(req, res.clone());
            return res.clone();
        });
    }
    else {
        return res;
    }
}
//# sourceMappingURL=sw-utils.js.map