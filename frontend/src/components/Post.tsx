import { Link } from 'react-router-dom'

interface PostProps {
  id: string
  author: {
    name: string
    handle: string
    avatar: string
  }
  content: string
  image?: string
  stats: {
    comments: number
    retweets: number
    likes: number
    views: string
  }
  timestamp: string
  liked?: boolean
}

export default function Post({ id, author, content, image, stats, timestamp, liked = false }: PostProps) {
  return (
    <article className="p-4 hover:bg-slate-50 dark:hover:bg-white/[0.02] cursor-pointer transition-colors">
      <Link to={`/post/${id}`} className="flex gap-3">
        <div
          className="w-12 h-12 rounded-full bg-cover bg-center shrink-0"
          style={{ backgroundImage: `url('${author.avatar}')` }}
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1 mb-0.5">
            <span className="font-bold hover:underline truncate">{author.name}</span>
            <span className="text-slate-500 dark:text-slate-400 text-sm truncate">
              {author.handle} · {timestamp}
            </span>
            <span className="material-symbols-outlined text-slate-500 ml-auto !text-lg">more_horiz</span>
          </div>
          <p className="text-base mb-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: content }} />
          
          {image && (
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden mb-3">
              <div
                className="aspect-video bg-cover bg-center"
                style={{ backgroundImage: image }}
              />
            </div>
          )}
          
          <div className="flex justify-between max-w-md text-slate-500 dark:text-slate-400">
            <button className="flex items-center gap-2 group hover:text-primary transition-colors">
              <span className="material-symbols-outlined !text-xl p-2 group-hover:bg-primary/10 rounded-full">
                chat_bubble
              </span>
              <span className="text-sm">{stats.comments}</span>
            </button>
            <button className="flex items-center gap-2 group hover:text-emerald-500 transition-colors">
              <span className="material-symbols-outlined !text-xl p-2 group-hover:bg-emerald-500/10 rounded-full">
                repeat
              </span>
              <span className="text-sm">{stats.retweets}</span>
            </button>
            <button className={`flex items-center gap-2 group hover:text-rose-500 transition-colors ${liked ? 'text-rose-500' : ''}`}>
              <span className="material-symbols-outlined !text-xl p-2 group-hover:bg-rose-500/10 rounded-full">
                favorite
              </span>
              <span className="text-sm">{stats.likes}</span>
            </button>
            <button className="flex items-center gap-2 group hover:text-primary transition-colors">
              <span className="material-symbols-outlined !text-xl p-2 group-hover:bg-primary/10 rounded-full">
                bar_chart
              </span>
              <span className="text-sm">{stats.views}</span>
            </button>
            <div className="flex items-center gap-1">
              <button className="p-2 hover:bg-primary/10 hover:text-primary rounded-full transition-colors">
                <span className="material-symbols-outlined !text-xl">share</span>
              </button>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}
