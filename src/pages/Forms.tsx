import { useState } from 'react'
import Card from '@components/Card'
import Input from '@components/Input'
import Button from '@components/Button'

export default function Forms() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Forms</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Create beautiful forms with validation
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Basic Form">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />

            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                className="input min-h-[120px]"
                placeholder="Enter your message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <div className="flex gap-2">
              <Button type="submit" variant="primary">
                Submit
              </Button>
              <Button type="button" variant="secondary">
                Cancel
              </Button>
            </div>
          </form>
        </Card>

        <Card title="Form Elements">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Select</label>
              <select className="input">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Checkbox</label>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Option 1</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Option 2</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Radio</label>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="radio" name="radio" className="w-4 h-4" />
                  <span>Option 1</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="radio" className="w-4 h-4" />
                  <span>Option 2</span>
                </label>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
