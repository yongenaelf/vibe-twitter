import Post from '../components/Post'

const userProfile = {
  name: 'Alex Rivera',
  handle: '@arivera_design',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGhBZFja2JogvMavR-vz-rs4AAUV80UCaZ-AbvnBQ7yJSOYqFRWac-C4cvUlOZwIycRJnF1PcrZPPUXhtM97r3tPLOejI9iKPjEnAJV_CihX8_id71-2d6EGYs6QOlvRTrgZHIpUtF5bx8vFDvJObRgCRquPSk9FKYKVM1gDPKfmwitsNinNbKi0agkZUj-q3GE-3I2xfbQHBt9FhI0MQRBgrs4mdOorEflfSs65zKP70MB8OgON_ym1TxLuQQ18nQicOr9yOiRckE',
  banner: 'linear-gradient(135deg, #0d7ff2 0%, #101922 100%)',
  bio: 'Design Engineer | Building beautiful interfaces | TailwindCSS enthusiast | Open source contributor',
  location: 'San Francisco, CA',
  website: 'arivera.design',
  joined: 'January 2020',
  following: 892,
  followers: 4523,
}

const userPosts = [
  {
    id: '10',
    author: {
      name: userProfile.name,
      handle: userProfile.handle,
      avatar: userProfile.avatar,
    },
    content: 'Just released a new open source design system. Built with React, TypeScript, and TailwindCSS. Check it out! <span class="text-primary">#OpenSource</span> <span class="text-primary">#DesignSystems</span>',
    stats: { comments: 45, retweets: 128, likes: 567, views: '23k' },
    timestamp: '3h',
  },
  {
    id: '11',
    author: {
      name: userProfile.name,
      handle: userProfile.handle,
      avatar: userProfile.avatar,
    },
    content: 'Dark mode is not just about inverting colors. It\'s about understanding contrast, hierarchy, and reducing eye strain. Here are my top tips for designing dark interfaces...',
    stats: { comments: 89, retweets: 234, likes: 1243, views: '67k' },
    timestamp: '1d',
  },
]

const tabs = ['Chirps', 'Replies', 'Media', 'Likes']

export default function Profile() {
  return (
    <>
      {/* Header */}
      <div className="sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-10 border-b border-slate-200 dark:border-slate-800 px-4 py-2">
        <div className="flex items-center gap-6">
          <button className="p-2 hover:bg-slate-200 dark:hover:bg-white/10 rounded-full transition-colors -ml-2">
            <span className="material-symbols-outlined !text-xl">arrow_back</span>
          </button>
          <div>
            <h1 className="text-xl font-bold">{userProfile.name}</h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm">{userPosts.length} Chirps</p>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="h-48 bg-cover bg-center" style={{ backgroundImage: userProfile.banner }} />

      {/* Profile Info */}
      <div className="px-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div className="flex justify-between items-start -mt-16 mb-4">
          <div
            className="w-32 h-32 rounded-full bg-cover bg-center border-4 border-background-light dark:border-background-dark"
            style={{ backgroundImage: `url('${userProfile.avatar}')` }}
          />
          <button className="mt-20 px-4 py-1.5 border border-slate-300 dark:border-slate-700 rounded-full font-bold hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
            Edit profile
          </button>
        </div>

        <h2 className="text-xl font-bold">{userProfile.name}</h2>
        <p className="text-slate-500 dark:text-slate-400">{userProfile.handle}</p>

        <p className="mt-3 text-base">{userProfile.bio}</p>

        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-sm text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined !text-lg">location_on</span>
            {userProfile.location}
          </span>
          <a href={`https://${userProfile.website}`} className="flex items-center gap-1 text-primary hover:underline">
            <span className="material-symbols-outlined !text-lg">link</span>
            {userProfile.website}
          </a>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined !text-lg">calendar_month</span>
            Joined {userProfile.joined}
          </span>
        </div>

        <div className="flex gap-4 mt-3">
          <span className="hover:underline cursor-pointer">
            <span className="font-bold">{userProfile.following}</span>{' '}
            <span className="text-slate-500 dark:text-slate-400">Following</span>
          </span>
          <span className="hover:underline cursor-pointer">
            <span className="font-bold">{userProfile.followers.toLocaleString()}</span>{' '}
            <span className="text-slate-500 dark:text-slate-400">Followers</span>
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            className={`flex-1 py-4 text-sm font-medium hover:bg-slate-100 dark:hover:bg-white/5 transition-colors ${
              index === 0
                ? 'text-primary border-b-2 border-primary'
                : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Posts */}
      <div className="divide-y divide-slate-200 dark:divide-slate-800">
        {userPosts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </>
  )
}
