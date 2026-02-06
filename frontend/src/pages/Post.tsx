import Composer from '../components/Composer'

const mockPost = {
  id: '1',
  author: {
    name: 'Sarah Jenkins',
    handle: '@sjenks_dev',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMJBUpuhUS3VgSkwGnBwZuoXlxDeAZgwilyVEZ_QRCb0BDU2uPu3rw8BiDomOod_6VqTXhgZEH5exAz-1F4xwVIleSXQxuwLIFYlOwckFYFRnf4Q6s2J9j_dLli4IdG0fzXpctOD7vifnoBx_zE3eJndxRrWHuCSYxxMGgzMcHNmlKc2M7Sij69ddabXk2EhegV0CGQwFhJO3mn554ruQ9-6GbpsX7JAHVS-D_6vE2W2cq1mSi29scOLZUJT-qYln7mnFUVaFDAJlO',
  },
  content: 'Just switched the entire design system to <span class="text-primary">#PlusJakartaSans</span>. The improvement in legibility at small sizes is genuinely impressive. Highly recommend for any modern web UI! 🚀',
  stats: { comments: 24, retweets: 12, likes: 156, views: '12k' },
  timestamp: '2:34 PM · Jan 15, 2024',
}

const replies = [
  {
    id: 'r1',
    author: {
      name: 'Marcus Chen',
      handle: '@marcus_ux',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-CGA0uKopcUSpJUmsBmPSTBQrPl7j-wnBa7uxSxg4NkNkP_DSBMWP_h0oVWW0uQpjuXplBMKlVqnHcSh_UhZ_3ZpYxGOiTpAcFRW3K6o-_us38TbSIlpBG1TzqJVmIzH9ftp9lOICO6nuuMk-MtI0053bmcwQBEUuGx38Y-twuMqahkEJ7hwTVSHpZ-RcBqBGtnPqp4_SNqVoaespZk1DtFqFw40hnWakZCVoZ2xTg4rzlipt4Yk6bYOxrPCxhFSTD9jDiTS5rikb',
    },
    content: 'Totally agree! We made the same switch last month and the team loves it.',
    time: '2h',
  },
  {
    id: 'r2',
    author: {
      name: 'Elena Rossi',
      handle: '@elena_ux',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzcroqDyvw43YZyoqB7R7GzFqUMpWn5JjVKFClMSizuds2GnfVJdnXca8RaExJgTqdpYQCXyU1V_Z5nE_CQiOybU2RghA5l1Bpp7tkVi1NzyV4soKZaDQx168yROanOacMHaYdAGtjm2mpqJ5eJW1TZfnqQHSLlcVHt_fhOs9s6Bi4WPi6Vx_ES6vCaDoiQMuJGKDm0ytkpaOGqcQTPNu85JYMxs-ecOXXLu4oiufeC-PoFn11toGANcjsmTHmpeoebS5QtewFcgd1',
    },
    content: 'Plus Jakarta Sans is beautiful! The variable font support is really handy for responsive typography.',
    time: '1h',
  },
]

export default function Post() {
  // TODO: Use useParams() to fetch post by ID from API

  return (
    <>
      {/* Header */}
      <div className="sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-10 border-b border-slate-200 dark:border-slate-800 px-4 py-3">
        <div className="flex items-center gap-6">
          <button className="p-2 hover:bg-slate-200 dark:hover:bg-white/10 rounded-full transition-colors -ml-2">
            <span className="material-symbols-outlined !text-xl">arrow_back</span>
          </button>
          <h1 className="text-xl font-bold">Chirp</h1>
        </div>
      </div>

      {/* Main Post */}
      <article className="p-4 border-b border-slate-200 dark:border-slate-800">
        <div className="flex gap-3 mb-3">
          <div
            className="w-12 h-12 rounded-full bg-cover bg-center shrink-0"
            style={{ backgroundImage: `url('${mockPost.author.avatar}')` }}
          />
          <div className="flex-1">
            <p className="font-bold">{mockPost.author.name}</p>
            <p className="text-slate-500 dark:text-slate-400 text-sm">{mockPost.author.handle}</p>
          </div>
          <button className="p-2 hover:bg-slate-200 dark:hover:bg-white/10 rounded-full transition-colors h-fit">
            <span className="material-symbols-outlined !text-xl text-slate-500">more_horiz</span>
          </button>
        </div>

        <p className="text-xl leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: mockPost.content }} />

        <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">{mockPost.timestamp}</p>

        {/* Stats */}
        <div className="flex gap-4 py-4 border-y border-slate-200 dark:border-slate-800 text-sm">
          <span>
            <span className="font-bold">{mockPost.stats.retweets}</span>{' '}
            <span className="text-slate-500 dark:text-slate-400">Rechirps</span>
          </span>
          <span>
            <span className="font-bold">{mockPost.stats.likes}</span>{' '}
            <span className="text-slate-500 dark:text-slate-400">Likes</span>
          </span>
          <span>
            <span className="font-bold">{mockPost.stats.views}</span>{' '}
            <span className="text-slate-500 dark:text-slate-400">Views</span>
          </span>
        </div>

        {/* Actions */}
        <div className="flex justify-around py-2 text-slate-500 dark:text-slate-400">
          <button className="p-2 hover:bg-primary/10 hover:text-primary rounded-full transition-colors">
            <span className="material-symbols-outlined !text-2xl">chat_bubble</span>
          </button>
          <button className="p-2 hover:bg-emerald-500/10 hover:text-emerald-500 rounded-full transition-colors">
            <span className="material-symbols-outlined !text-2xl">repeat</span>
          </button>
          <button className="p-2 hover:bg-rose-500/10 hover:text-rose-500 rounded-full transition-colors">
            <span className="material-symbols-outlined !text-2xl">favorite</span>
          </button>
          <button className="p-2 hover:bg-primary/10 hover:text-primary rounded-full transition-colors">
            <span className="material-symbols-outlined !text-2xl">bookmark</span>
          </button>
          <button className="p-2 hover:bg-primary/10 hover:text-primary rounded-full transition-colors">
            <span className="material-symbols-outlined !text-2xl">share</span>
          </button>
        </div>
      </article>

      {/* Reply Composer */}
      <Composer />

      {/* Replies */}
      <div className="divide-y divide-slate-200 dark:divide-slate-800">
        {replies.map((reply) => (
          <article key={reply.id} className="p-4 hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors">
            <div className="flex gap-3">
              <div
                className="w-10 h-10 rounded-full bg-cover bg-center shrink-0"
                style={{ backgroundImage: `url('${reply.author.avatar}')` }}
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 mb-0.5">
                  <span className="font-bold truncate">{reply.author.name}</span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm truncate">
                    {reply.author.handle} · {reply.time}
                  </span>
                </div>
                <p className="text-base">{reply.content}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
