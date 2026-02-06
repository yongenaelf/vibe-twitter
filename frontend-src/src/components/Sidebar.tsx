import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { path: '/', icon: 'home', label: 'Home' },
  { path: '/explore', icon: 'search', label: 'Explore' },
  { path: '/notifications', icon: 'notifications', label: 'Notifications' },
  { path: '/messages', icon: 'mail', label: 'Messages' },
  { path: '/bookmarks', icon: 'bookmark', label: 'Bookmarks' },
  { path: '/profile', icon: 'person', label: 'Profile' },
]

export default function Sidebar() {
  const location = useLocation()

  return (
    <header className="w-20 xl:w-72 flex flex-col sticky top-0 h-screen border-r border-slate-200 dark:border-slate-800 px-2 xl:px-4 py-4">
      <div className="mb-4 px-3">
        <div className="w-12 h-12 flex items-center justify-center text-primary">
          <span className="material-symbols-outlined !text-4xl">flutter_dash</span>
        </div>
      </div>
      
      <nav className="flex flex-col gap-1 grow">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-4 p-3 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors ${
                isActive ? 'active-nav text-primary' : ''
              }`}
            >
              <span className="material-symbols-outlined !text-3xl">{item.icon}</span>
              <span className={`hidden xl:block text-xl ${isActive ? 'font-semibold' : 'font-medium'}`}>
                {item.label}
              </span>
            </Link>
          )
        })}
        
        <button className="flex items-center gap-4 p-3 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined !text-3xl">more_horiz</span>
          <span className="hidden xl:block text-xl font-medium">More</span>
        </button>
        
        <button className="mt-4 bg-primary text-white font-bold py-3 px-4 xl:px-0 xl:w-full rounded-full shadow-lg hover:bg-opacity-90 transition-all flex items-center justify-center">
          <span className="material-symbols-outlined xl:hidden">edit</span>
          <span className="hidden xl:block text-lg">Chirp</span>
        </button>
      </nav>
      
      <div className="mt-auto mb-4 p-3 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors flex items-center gap-3 cursor-pointer">
        <div
          className="w-10 h-10 rounded-full bg-cover bg-center shrink-0"
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCGhBZFja2JogvMavR-vz-rs4AAUV80UCaZ-AbvnBQ7yJSOYqFRWac-C4cvUlOZwIycRJnF1PcrZPPUXhtM97r3tPLOejI9iKPjEnAJV_CihX8_id71-2d6EGYs6QOlvRTrgZHIpUtF5bx8vFDvJObRgCRquPSk9FKYKVM1gDPKfmwitsNinNbKi0agkZUj-q3GE-3I2xfbQHBt9FhI0MQRBgrs4mdOorEflfSs65zKP70MB8OgON_ym1TxLuQQ18nQicOr9yOiRckE')" }}
        />
        <div className="hidden xl:block overflow-hidden">
          <p className="font-bold text-sm truncate">Alex Rivera</p>
          <p className="text-slate-500 dark:text-slate-400 text-sm truncate">@arivera_design</p>
        </div>
        <span className="hidden xl:block material-symbols-outlined ml-auto">more_horiz</span>
      </div>
    </header>
  )
}
