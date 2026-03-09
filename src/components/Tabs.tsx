import { useState } from 'react'
import { cn } from '@utils/cn'

interface Tab {
  label: string
  value: string
  content: React.ReactNode
}

interface TabsProps {
  tabs: Tab[]
  defaultValue?: string
  className?: string
}

export default function Tabs({ tabs, defaultValue, className }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue || tabs[0]?.value)

  const activeContent = tabs.find((tab) => tab.value === activeTab)?.content

  return (
    <div className={className}>
      <div className="flex border-b border-gray-200 dark:border-dark-3">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={cn(
              'px-4 py-2 font-medium transition-colors border-b-2',
              activeTab === tab.value
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">{activeContent}</div>
    </div>
  )
}
