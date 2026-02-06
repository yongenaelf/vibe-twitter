import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import RightSidebar from '../components/RightSidebar'

export default function MainLayout() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display min-h-screen">
      <div className="max-w-[1265px] mx-auto flex min-h-screen">
        <Sidebar />
        <main className="flex-1 max-w-[600px] border-r border-slate-200 dark:border-slate-800">
          <Outlet />
        </main>
        <RightSidebar />
      </div>
    </div>
  )
}
