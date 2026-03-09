import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, Table, FileText, BarChart3, Settings, X } from 'lucide-react'
import { useSidebarStore } from '@store/sidebarStore'
import { cn } from '@utils/cn'
import { MenuItem } from '@types/index'

const menuItems: MenuItem[] = [
  { label: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/' },
  { label: 'Tables', icon: <Table size={20} />, path: '/tables' },
  { label: 'Forms', icon: <FileText size={20} />, path: '/forms' },
  { label: 'Charts', icon: <BarChart3 size={20} />, path: '/charts' },
  { label: 'Settings', icon: <Settings size={20} />, path: '/settings' },
]

export default function Sidebar() {
  const { isOpen, close } = useSidebarStore()
  const location = useLocation()

  return (
    <>
      <aside
        className={cn(
          'fixed left-0 top-0 z-40 h-screen w-64 bg-white dark:bg-dark-2 border-r border-gray-200 dark:border-dark-3 transition-transform duration-300',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-dark-3">
          <h1 className="text-2xl font-bold text-primary-600">TailAdmin</h1>
          <button
            onClick={close}
            className="lg:hidden p-1 hover:bg-gray-100 dark:hover:bg-dark-3 rounded"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                location.pathname === item.path
                  ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-3'
              )}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
              {item.badge && (
                <span className="ml-auto bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={close}
        />
      )}
    </>
  )
}
