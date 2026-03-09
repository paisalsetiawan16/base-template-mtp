# API Integration Guide

Panduan untuk integrasi API dalam project ini.

## Configuration

API configuration ada di `src/config/api.ts`:

```typescript
export const API_CONFIG = {
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  timeout: 30000,
}
```

## Axios Instance

Axios instance dengan interceptors ada di `src/services/api.ts`:

```typescript
import api from '@services/api'

// GET request
const response = await api.get('/users')

// POST request
const response = await api.post('/users', data)

// PUT request
const response = await api.put('/users/1', data)

// DELETE request
const response = await api.delete('/users/1')
```

## Creating Services

### Example: User Service

Create `src/services/userService.ts`:

```typescript
import api from './api'
import { ENDPOINTS } from '@config/api'

export interface User {
  id: string
  name: string
  email: string
}

export const userService = {
  getAll: async (): Promise<User[]> => {
    const response = await api.get(ENDPOINTS.users.list)
    return response.data
  },

  getById: async (id: string): Promise<User> => {
    const response = await api.get(ENDPOINTS.users.detail(id))
    return response.data
  },

  create: async (data: Omit<User, 'id'>): Promise<User> => {
    const response = await api.post(ENDPOINTS.users.create, data)
    return response.data
  },

  update: async (id: string, data: Partial<User>): Promise<User> => {
    const response = await api.put(ENDPOINTS.users.update(id), data)
    return response.data
  },

  delete: async (id: string): Promise<void> => {
    await api.delete(ENDPOINTS.users.delete(id))
  },
}
```

### Using Service in Component

```typescript
import { useState, useEffect } from 'react'
import { userService, User } from '@services/userService'

export default function UserList() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadUsers()
  }, [])

  const loadUsers = async () => {
    try {
      setLoading(true)
      const data = await userService.getAll()
      setUsers(data)
    } catch (err) {
      setError('Failed to load users')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <Spinner />
  if (error) return <Alert type="error" message={error} />

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}
```

## Authentication

### Login Flow

```typescript
// src/services/authService.ts
import api from './api'

export const authService = {
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password })
    const { token, user } = response.data
    
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(user))
    
    return { token, user }
  },

  logout: () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  },

  getCurrentUser: () => {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null
  },
}
```

### Protected Routes

```typescript
// src/components/ProtectedRoute.tsx
import { Navigate } from 'react-router-dom'
import { authService } from '@services/authService'

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const user = authService.getCurrentUser()

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}
```

## Error Handling

### Global Error Handler

```typescript
// src/utils/errorHandler.ts
export const handleApiError = (error: any) => {
  if (error.response) {
    // Server responded with error
    const status = error.response.status
    const message = error.response.data?.message || 'An error occurred'

    switch (status) {
      case 400:
        return 'Bad request'
      case 401:
        return 'Unauthorized'
      case 403:
        return 'Forbidden'
      case 404:
        return 'Not found'
      case 500:
        return 'Server error'
      default:
        return message
    }
  } else if (error.request) {
    // Request made but no response
    return 'Network error'
  } else {
    // Something else happened
    return error.message
  }
}
```

### Usage

```typescript
try {
  await userService.create(data)
} catch (error) {
  const errorMessage = handleApiError(error)
  setError(errorMessage)
}
```

## Request/Response Types

### Define Types

```typescript
// src/types/api.ts
export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
}

export interface ApiError {
  message: string
  errors?: Record<string, string[]>
}
```

### Usage

```typescript
const response = await api.get<ApiResponse<User[]>>('/users')
const users = response.data.data
```

## File Upload

```typescript
export const uploadFile = async (file: File) => {
  const formData = new FormData()
  formData.append('file', file)

  const response = await api.post('/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    onUploadProgress: (progressEvent) => {
      const progress = (progressEvent.loaded / progressEvent.total!) * 100
      console.log(`Upload progress: ${progress}%`)
    },
  })

  return response.data
}
```

## Caching Strategy

### Simple Cache

```typescript
// src/utils/cache.ts
const cache = new Map<string, { data: any; timestamp: number }>()

export const getCached = <T>(key: string, maxAge: number = 5 * 60 * 1000): T | null => {
  const cached = cache.get(key)
  if (!cached) return null

  const age = Date.now() - cached.timestamp
  if (age > maxAge) {
    cache.delete(key)
    return null
  }

  return cached.data
}

export const setCache = (key: string, data: any) => {
  cache.set(key, { data, timestamp: Date.now() })
}
```

### Usage with Service

```typescript
export const userService = {
  getAll: async (): Promise<User[]> => {
    const cacheKey = 'users-list'
    const cached = getCached<User[]>(cacheKey)
    
    if (cached) return cached

    const response = await api.get('/users')
    setCache(cacheKey, response.data)
    
    return response.data
  },
}
```

## WebSocket Integration

```typescript
// src/services/websocket.ts
export class WebSocketService {
  private ws: WebSocket | null = null

  connect(url: string) {
    this.ws = new WebSocket(url)

    this.ws.onopen = () => {
      console.log('WebSocket connected')
    }

    this.ws.onmessage = (event) => {
      const data = JSON.parse(event.data)
      this.handleMessage(data)
    }

    this.ws.onerror = (error) => {
      console.error('WebSocket error:', error)
    }

    this.ws.onclose = () => {
      console.log('WebSocket disconnected')
      // Reconnect logic
      setTimeout(() => this.connect(url), 5000)
    }
  }

  send(data: any) {
    if (this.ws?.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(data))
    }
  }

  private handleMessage(data: any) {
    // Handle incoming messages
  }

  disconnect() {
    this.ws?.close()
  }
}
```

## Testing API Calls

```typescript
// Mock API for testing
import { rest } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
  rest.get('/api/users', (req, res, ctx) => {
    return res(
      ctx.json([
        { id: '1', name: 'John Doe', email: 'john@example.com' }
      ])
    )
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
```
