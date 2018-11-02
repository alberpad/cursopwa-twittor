function actulizaCacheDinamico(dynamicCache: string, req: Request, res: Response) {
  if (res.ok) {
    return caches.open(dynamicCache).then((cache) => {
      cache.put(req, res.clone());
      return res.clone();
    });
  } else {
    return res;
  }
}
