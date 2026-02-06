export default function RightSidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-80 xl:w-[350px] gap-4 py-2 px-4 sticky top-0 h-screen overflow-y-auto no-scrollbar">
      {/* Search Bar */}
      <div className="sticky top-0 bg-background-light dark:bg-background-dark py-2 z-10">
        <div className="relative group">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors">
            search
          </span>
          <input
            className="w-full bg-slate-200 dark:bg-white/10 border-none rounded-full py-3 pl-12 pr-4 focus:ring-1 focus:ring-primary focus:bg-transparent dark:focus:bg-transparent transition-all outline-none"
            placeholder="Search Chirp"
            type="text"
          />
        </div>
      </div>

      {/* Trends Widget */}
      <section className="bg-slate-100 dark:bg-white/[0.05] rounded-2xl overflow-hidden">
        <h2 className="text-xl font-bold p-4 pb-2">What's happening</h2>
        <div className="flex flex-col">
          <TrendItem category="Trending in Design" topic="#PlusJakartaSans" count="12.5k Chirps" />
          <TrendItem category="Technology · Trending" topic="Web Components" count="45.2k Chirps" />
          <TrendItem category="Trending in United Kingdom" topic="TailwindCSS v4" count="2,340 Chirps" />
          <TrendItem category="Business · Trending" topic="#DesignSystems" count="8,902 Chirps" />
        </div>
        <button className="w-full text-left p-4 text-primary text-sm hover:bg-slate-200 dark:hover:bg-white/5 transition-colors">
          Show more
        </button>
      </section>

      {/* Who to follow Widget */}
      <section className="bg-slate-100 dark:bg-white/[0.05] rounded-2xl overflow-hidden mb-8">
        <h2 className="text-xl font-bold p-4 pb-2">Who to follow</h2>
        <div className="flex flex-col">
          <FollowSuggestion
            name="Elena Rossi"
            handle="@elena_ux"
            avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuBzcroqDyvw43YZyoqB7R7GzFqUMpWn5JjVKFClMSizuds2GnfVJdnXca8RaExJgTqdpYQCXyU1V_Z5nE_CQiOybU2RghA5l1Bpp7tkVi1NzyV4soKZaDQx168yROanOacMHaYdAGtjm2mpqJ5eJW1TZfnqQHSLlcVHt_fhOs9s6Bi4WPi6Vx_ES6vCaDoiQMuJGKDm0ytkpaOGqcQTPNu85JYMxs-ecOXXLu4oiufeC-PoFn11toGANcjsmTHmpeoebS5QtewFcgd1"
          />
          <FollowSuggestion
            name="Jordan Smit"
            handle="@jsmith_code"
            avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuDWnPBRz2H4au9LQDgG59OoyVxIFQRhZ1l7EbXy83n2j61IvXMVRjlMkhbMKDhheD45fAu_hdLKanVkUD1s1gV5lW3d0Te4FsH3GsKJVVeb-1OLMRpfpOT3_NC1li761RBh4YmIb74AkTJ1MdvDkbJB8toNHB9YC3ilJL0y05UgexdWv-hvRTwR9KmlayKmeHVrfUxQhZzJRTunXFiTQ2wOMqDgkenFd6Tbmi-eAOfUQmH1DYf-t7EWZ08CltMefVyQKIKqAM_UO2Qx"
          />
        </div>
        <button className="w-full text-left p-4 text-primary text-sm hover:bg-slate-200 dark:hover:bg-white/5 transition-colors">
          Show more
        </button>
      </section>

      {/* Footer Links */}
      <footer className="px-4 text-xs text-slate-500 dark:text-slate-400 flex flex-wrap gap-x-3 gap-y-1 mb-10">
        <a className="hover:underline" href="#">Terms of Service</a>
        <a className="hover:underline" href="#">Privacy Policy</a>
        <a className="hover:underline" href="#">Cookie Policy</a>
        <a className="hover:underline" href="#">Accessibility</a>
        <a className="hover:underline" href="#">Ads info</a>
        <a className="hover:underline" href="#">More...</a>
        <span>© 2024 Chirp Web Inc.</span>
      </footer>
    </aside>
  )
}

function TrendItem({ category, topic, count }: { category: string; topic: string; count: string }) {
  return (
    <a className="px-4 py-3 hover:bg-slate-200 dark:hover:bg-white/5 transition-colors group cursor-pointer" href="#">
      <div className="flex justify-between items-start">
        <p className="text-xs text-slate-500 dark:text-slate-400">{category}</p>
        <span className="material-symbols-outlined text-slate-500 !text-sm">more_horiz</span>
      </div>
      <p className="font-bold text-base">{topic}</p>
      <p className="text-xs text-slate-500 dark:text-slate-400">{count}</p>
    </a>
  )
}

function FollowSuggestion({ name, handle, avatar }: { name: string; handle: string; avatar: string }) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 hover:bg-slate-200 dark:hover:bg-white/5 transition-colors cursor-pointer group">
      <div
        className="w-10 h-10 rounded-full bg-cover bg-center shrink-0"
        style={{ backgroundImage: `url('${avatar}')` }}
      />
      <div className="flex-1 overflow-hidden">
        <p className="font-bold text-sm truncate">{name}</p>
        <p className="text-slate-500 dark:text-slate-400 text-sm truncate">{handle}</p>
      </div>
      <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold px-4 py-1.5 rounded-full text-sm hover:opacity-80 transition-all">
        Follow
      </button>
    </div>
  )
}
