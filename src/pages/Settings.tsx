import { useState } from 'react'
import Card from '@components/Card'
import Input from '@components/Input'
import Button from '@components/Button'
import { useThemeStore } from '@store/themeStore'

export default function Settings() {
  const { isDark, toggleTheme } = useThemeStore()
  const [settings, setSettings] = useState({
    siteName: 'TailAdmin',
    email: 'admin@example.com',
    notifications: true,
    autoSave: true,
  })

  const handleSave = () => {
    console.log('Settings saved:', settings)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your application settings
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="General Settings">
          <div className="space-y-4">
            <Input
              label="Site Name"
              value={settings.siteName}
              onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
            />

            <Input
              label="Email"
              type="email"
              value={settings.email}
              onChange={(e) => setSettings({ ...settings, email: e.target.value })}
            />

            <Button onClick={handleSave} variant="primary">
              Save Changes
            </Button>
          </div>
        </Card>

        <Card title="Preferences">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Dark Mode</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Enable dark theme
                </p>
              </div>
              <button
                onClick={toggleTheme}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  isDark ? 'bg-primary-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    isDark ? 'translate-x-6' : ''
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Notifications</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Receive email notifications
                </p>
              </div>
              <button
                onClick={() =>
                  setSettings({ ...settings, notifications: !settings.notifications })
                }
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  settings.notifications ? 'bg-primary-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    settings.notifications ? 'translate-x-6' : ''
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Auto Save</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Automatically save changes
                </p>
              </div>
              <button
                onClick={() => setSettings({ ...settings, autoSave: !settings.autoSave })}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  settings.autoSave ? 'bg-primary-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    settings.autoSave ? 'translate-x-6' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
