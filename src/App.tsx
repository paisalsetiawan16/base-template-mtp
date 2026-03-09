import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useThemeStore } from '@store/themeStore'
import DefaultLayout from '@layouts/DefaultLayout'
import Dashboard from '@pages/Dashboard'
import Tables from '@pages/Tables'
import Forms from '@pages/Forms'
import Charts from '@pages/Charts'
import Settings from '@pages/Settings'

function App() {
  const { isDark } = useThemeStore()

  return (
    <div className={isDark ? 'dark' : ''}>
      <Router>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="tables" element={<Tables />} />
            <Route path="forms" element={<Forms />} />
            <Route path="charts" element={<Charts />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
