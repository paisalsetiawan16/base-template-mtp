import { useState } from 'react'
import Card from '@components/Card'
import Table from '@components/Table'
import Badge from '@components/Badge'
import Button from '@components/Button'
import { TableColumn } from '@types/index'

interface User {
  id: number
  name: string
  email: string
  role: string
  status: 'active' | 'inactive'
}

const columns: TableColumn<User>[] = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Role' },
  {
    key: 'status',
    label: 'Status',
    render: (value) => (
      <Badge variant={value === 'active' ? 'success' : 'danger'}>
        {value}
      </Badge>
    ),
  },
]

const mockData: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'active' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'inactive' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Manager', status: 'active' },
]

export default function Tables() {
  const [data] = useState<User[]>(mockData)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Tables</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your data with beautiful tables
          </p>
        </div>
        <Button variant="primary">Add New</Button>
      </div>

      <Card title="Users Table">
        <Table
          data={data}
          columns={columns}
          onRowClick={(row) => console.log('Clicked:', row)}
        />
      </Card>
    </div>
  )
}
