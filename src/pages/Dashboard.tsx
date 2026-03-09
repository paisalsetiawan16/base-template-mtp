import Card from '@components/Card'
import Badge from '@components/Badge'
import { TrendingUp, Users, ShoppingCart, DollarSign } from 'lucide-react'

const stats = [
  {
    title: 'Total Revenue',
    value: '$45,231',
    change: '+12.5%',
    icon: <DollarSign size={24} />,
    color: 'text-green-600',
  },
  {
    title: 'Total Users',
    value: '3,456',
    change: '+8.2%',
    icon: <Users size={24} />,
    color: 'text-blue-600',
  },
  {
    title: 'Total Orders',
    value: '2,345',
    change: '+5.7%',
    icon: <ShoppingCart size={24} />,
    color: 'text-purple-600',
  },
  {
    title: 'Growth',
    value: '23.5%',
    change: '+3.1%',
    icon: <TrendingUp size={24} />,
    color: 'text-orange-600',
  },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Welcome back! Here's what's happening with your business today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold">{stat.value}</p>
                <Badge variant="success" size="sm" className="mt-2">
                  {stat.change}
                </Badge>
              </div>
              <div className={`${stat.color} bg-opacity-10 p-3 rounded-lg`}>
                {stat.icon}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Recent Activity">
          <div className="space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-center gap-4 pb-4 border-b border-gray-200 dark:border-dark-3 last:border-0">
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center">
                  <Users size={20} className="text-primary-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">New user registered</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Top Products">
          <div className="space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-dark-3 last:border-0">
                <div>
                  <p className="font-medium">Product {item}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {Math.floor(Math.random() * 1000)} sales
                  </p>
                </div>
                <Badge variant="primary">Top</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
