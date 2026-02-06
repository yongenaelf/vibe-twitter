const trendingTopics = [
  { category: 'Technology', topic: '#ReactJS', posts: '125K' },
  { category: 'Design', topic: 'Figma Updates', posts: '89K' },
  { category: 'Development', topic: 'TypeScript 5.0', posts: '67K' },
  { category: 'AI', topic: 'ChatGPT', posts: '234K' },
  { category: 'Web', topic: '#TailwindCSS', posts: '45K' },
]

const categories = ['For You', 'Trending', 'News', 'Sports', 'Entertainment']

export default function Explore() {
  return (
    <>
      {/* Search Header */}
      <div className="sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-10 border-b border-slate-200 dark:border-slate-800 p-4">
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

      {/* Category Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 overflow-x-auto no-scrollbar">
        {categories.map((category, index) => (
          <button
            key={category}
            className={`px-6 py-4 text-sm font-medium whitespace-nowrap hover:bg-slate-100 dark:hover:bg-white/5 transition-colors ${
              index === 0
                ? 'text-primary border-b-2 border-primary'
                : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Trending Section */}
      <div className="divide-y divide-slate-200 dark:divide-slate-800">
        {trendingTopics.map((item, index) => (
          <div
            key={index}
            className="p-4 hover:bg-slate-50 dark:hover:bg-white/[0.02] cursor-pointer transition-colors"
          >
            <div className="flex justify-between items-start">
              <p className="text-xs text-slate-500 dark:text-slate-400">{item.category} · Trending</p>
              <button className="p-1 hover:bg-primary/10 rounded-full">
                <span className="material-symbols-outlined text-slate-500 !text-lg">more_horiz</span>
              </button>
            </div>
            <p className="font-bold text-base mt-0.5">{item.topic}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.posts} Chirps</p>
          </div>
        ))}
      </div>
    </>
  )
}
