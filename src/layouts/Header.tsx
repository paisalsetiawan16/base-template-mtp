import { Menu, Moon, Sun, Bell, User } from 'lucide-react'
import { useSidebarStore } from '@store/sidebarStore'
import { useThemeStore } from '@store/themeStore'
import Dropdown from '@components/Dropdown'

export default function Header() {
  const { toggle } = useSidebarStore()
  const { isDark, toggleTheme } = useThemeStore()

  const userMenuItems = [
    { label: 'Profile', value: 'profile', icon: <User size={16} /> },
    { label: 'Settings', value: 'settings', icon: <User size={16} /> },
    { label: 'Logout', value: 'logout', icon: <User size={16} /> },
  ]

  return (
    <header className="sticky top-0 z-30 bg-white dark:bg-dark-2 border-b border-gray-200 dark:border-dark-3">
      <div className="flex items-center justify-between px-6 py-4">
        <button
          onClick={toggle}
          className="p-2 hover:bg-gray-100 dark:hover:bg-dark-3 rounded-lg transition-colors"
        >
          <Menu size={20} />
        </button>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-gray-100 dark:hover:bg-dark-3 rounded-lg transition-colors"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button className="relative p-2 hover:bg-gray-100 dark:hover:bg-dark-3 rounded-lg transition-colors">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          <Dropdown label="Admin" items={userMenuItems} />
        </div>
      </div>
    </header>
  )
}
