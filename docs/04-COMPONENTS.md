# Components Documentation

Dokumentasi lengkap untuk semua komponen reusable dalam project ini.

## Alert

Komponen untuk menampilkan pesan notifikasi.

```tsx
import { Alert } from '@components'

<Alert 
  type="success" 
  title="Success!" 
  message="Data berhasil disimpan"
  onClose={() => console.log('closed')}
/>
```

Props:
- `type`: 'success' | 'error' | 'warning' | 'info'
- `title`: string (optional)
- `message`: string (required)
- `onClose`: function (optional)

## Badge

Komponen untuk menampilkan label atau status.

```tsx
import { Badge } from '@components'

<Badge variant="success" size="md">Active</Badge>
```

Props:
- `variant`: 'primary' | 'success' | 'warning' | 'danger' | 'info'
- `size`: 'sm' | 'md'

## Breadcrumb

Komponen navigasi breadcrumb.

```tsx
import { Breadcrumb } from '@components'

<Breadcrumb items={[
  { label: 'Home', path: '/' },
  { label: 'Users', path: '/users' },
  { label: 'Detail' }
]} />
```

## Button

Komponen tombol dengan berbagai varian.

```tsx
import { Button } from '@components'

<Button variant="primary" size="md" isLoading={false}>
  Click Me
</Button>
```

Props:
- `variant`: 'primary' | 'secondary' | 'danger' | 'success'
- `size`: 'sm' | 'md' | 'lg'
- `isLoading`: boolean
- Semua props HTML button

## Card

Komponen container dengan styling card.

```tsx
import { Card } from '@components'

<Card 
  title="Card Title"
  actions={<Button>Action</Button>}
>
  Card content here
</Card>
```

Props:
- `title`: string (optional)
- `actions`: ReactNode (optional)
- `children`: ReactNode (required)
- `className`: string (optional)

## Dropdown

Komponen dropdown menu.

```tsx
import { Dropdown } from '@components'

<Dropdown 
  label="Options"
  items={[
    { label: 'Edit', value: 'edit', onClick: () => {} },
    { label: 'Delete', value: 'delete', onClick: () => {} }
  ]}
/>
```

## Input

Komponen input form dengan label dan error message.

```tsx
import { Input } from '@components'

<Input 
  label="Email"
  type="email"
  placeholder="Enter email"
  error="Email is required"
/>
```

Props:
- `label`: string (optional)
- `error`: string (optional)
- Semua props HTML input

## Modal

Komponen modal dialog.

```tsx
import { Modal } from '@components'

<Modal 
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal Title"
  size="md"
>
  Modal content here
</Modal>
```

Props:
- `isOpen`: boolean (required)
- `onClose`: function (required)
- `title`: string (optional)
- `size`: 'sm' | 'md' | 'lg' | 'xl'

## Pagination

Komponen pagination untuk table atau list.

```tsx
import { Pagination } from '@components'

<Pagination 
  currentPage={1}
  totalPages={10}
  onPageChange={(page) => console.log(page)}
/>
```

## Spinner

Komponen loading spinner.

```tsx
import { Spinner } from '@components'

<Spinner size="md" />
```

Props:
- `size`: 'sm' | 'md' | 'lg'

## Table

Komponen table dengan sorting dan custom render.

```tsx
import { Table } from '@components'

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { 
    key: 'status', 
    label: 'Status',
    render: (value) => <Badge>{value}</Badge>
  }
]

<Table 
  data={data}
  columns={columns}
  onRowClick={(row) => console.log(row)}
/>
```

## Tabs

Komponen tabs untuk switching content.

```tsx
import { Tabs } from '@components'

<Tabs 
  tabs={[
    { label: 'Tab 1', value: 'tab1', content: <div>Content 1</div> },
    { label: 'Tab 2', value: 'tab2', content: <div>Content 2</div> }
  ]}
  defaultValue="tab1"
/>
```

## Custom Hooks

### useLocalStorage

Hook untuk menyimpan data di localStorage.

```tsx
import { useLocalStorage } from '@hooks/useLocalStorage'

const [value, setValue] = useLocalStorage('key', 'default')
```

### useDebounce

Hook untuk debouncing value.

```tsx
import { useDebounce } from '@hooks/useDebounce'

const debouncedValue = useDebounce(searchTerm, 500)
```

## State Management

### Theme Store

```tsx
import { useThemeStore } from '@store/themeStore'

const { isDark, toggleTheme, setTheme } = useThemeStore()
```

### Sidebar Store

```tsx
import { useSidebarStore } from '@store/sidebarStore'

const { isOpen, toggle, open, close } = useSidebarStore()
```

## Utilities

### cn (classnames)

Utility untuk menggabungkan classnames.

```tsx
import { cn } from '@utils/cn'

<div className={cn('base-class', isActive && 'active-class')} />
```

### Formatters

```tsx
import { formatDate, formatCurrency, formatNumber } from '@utils/formatters'

formatDate(new Date(), 'dd MMM yyyy')
formatCurrency(1000, 'USD')
formatNumber(1000000)
```
