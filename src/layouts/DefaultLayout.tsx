import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import { useSidebarStore } from '@store/sidebarStore'
import { cn } from '@utils/cn'

export default function DefaultLayout() {
  const { isOpen } = useSidebarStore()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark">
      <Sidebar />
      <div
        className={cn(
          'transition-all duration-300',
          isOpen ? 'lg:ml-64' : 'ml-0'
        )}
      >
        <Header />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
