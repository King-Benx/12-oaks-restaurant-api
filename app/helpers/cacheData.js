import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 1200 });

export const storeCache = (key, data) => cache.set(key, data);

export const getFromCache = (key) => cache.get(key);

export const exists = (key) => cache.has(key);
