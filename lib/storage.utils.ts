'use client'

const PREFIX = process.env.PROJECT
const specifyKey = (key: string) => `${PREFIX}-${key}`

const isBrowser = typeof window !== 'undefined'

export const storageLocal = {
  setItem: (key: string, value: string) =>
    isBrowser && localStorage.setItem(specifyKey(key), value),
  getItem: (key: string) =>
    isBrowser ? localStorage.getItem(specifyKey(key)) : null,
  setObject: function <T>(key: string, value: T) {
    return isBrowser && storageLocal.setItem(key, JSON.stringify(value))
  },
  getObject: function <T>(key: string): T | null {
    return isBrowser
      ? (JSON.parse(String(storageLocal.getItem(key))) as T)
      : null
  },
  removeItem: (key: string) =>
    isBrowser && localStorage.removeItem(specifyKey(key)),
}

export const storageSession = {
  setItem: (key: string, value: string) =>
    isBrowser && sessionStorage.setItem(specifyKey(key), value),
  getItem: (key: string) =>
    isBrowser ? sessionStorage.getItem(specifyKey(key)) : null,
  setObject: function <T>(key: string, value: T) {
    return isBrowser && storageSession.setItem(key, JSON.stringify(value))
  },
  getObject: function <T>(key: string): T | null {
    return isBrowser
      ? (JSON.parse(String(storageSession.getItem(key))) as T)
      : null
  },
  removeItem: (key: string) =>
    isBrowser && sessionStorage.removeItem(specifyKey(key)),
}
