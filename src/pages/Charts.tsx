import Card from '@components/Card'

export default function Charts() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Charts</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Visualize your data with beautiful charts
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Sales Overview">
          <div className="h-64 flex items-center justify-center text-gray-400">
            Chart placeholder - Install chart library (recharts/chart.js)
          </div>
        </Card>

        <Card title="Revenue Trend">
          <div className="h-64 flex items-center justify-center text-gray-400">
            Chart placeholder - Install chart library (recharts/chart.js)
          </div>
        </Card>

        <Card title="User Growth">
          <div className="h-64 flex items-center justify-center text-gray-400">
            Chart placeholder - Install chart library (recharts/chart.js)
          </div>
        </Card>

        <Card title="Product Distribution">
          <div className="h-64 flex items-center justify-center text-gray-400">
            Chart placeholder - Install chart library (recharts/chart.js)
          </div>
        </Card>
      </div>
    </div>
  )
}
