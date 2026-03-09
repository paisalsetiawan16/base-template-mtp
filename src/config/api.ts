export const API_CONFIG = {
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  timeout: 30000,
}

export const ENDPOINTS = {
  auth: {
    login: '/auth/login',
    logout: '/auth/logout',
    register: '/auth/register',
    refresh: '/auth/refresh',
  },
  users: {
    list: '/users',
    detail: (id: string) => `/users/${id}`,
    create: '/users',
    update: (id: string) => `/users/${id}`,
    delete: (id: string) => `/users/${id}`,
  },
}
