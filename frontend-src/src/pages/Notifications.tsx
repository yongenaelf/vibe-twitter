const notifications = [
  {
    id: '1',
    type: 'like',
    user: {
      name: 'Sarah Jenkins',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMJBUpuhUS3VgSkwGnBwZuoXlxDeAZgwilyVEZ_QRCb0BDU2uPu3rw8BiDomOod_6VqTXhgZEH5exAz-1F4xwVIleSXQxuwLIFYlOwckFYFRnf4Q6s2J9j_dLli4IdG0fzXpctOD7vifnoBx_zE3eJndxRrWHuCSYxxMGgzMcHNmlKc2M7Sij69ddabXk2EhegV0CGQwFhJO3mn554ruQ9-6GbpsX7JAHVS-D_6vE2W2cq1mSi29scOLZUJT-qYln7mnFUVaFDAJlO',
    },
    content: 'liked your Chirp',
    preview: 'Just shipped a new feature!',
    time: '2h',
  },
  {
    id: '2',
    type: 'follow',
    user: {
      name: 'Marcus Chen',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-CGA0uKopcUSpJUmsBmPSTBQrPl7j-wnBa7uxSxg4NkNkP_DSBMWP_h0oVWW0uQpjuXplBMKlVqnHcSh_UhZ_3ZpYxGOiTpAcFRW3K6o-_us38TbSIlpBG1TzqJVmIzH9ftp9lOICO6nuuMk-MtI0053bmcwQBEUuGx38Y-twuMqahkEJ7hwTVSHpZ-RcBqBGtnPqp4_SNqVoaespZk1DtFqFw40hnWakZCVoZ2xTg4rzlipt4Yk6bYOxrPCxhFSTD9jDiTS5rikb',
    },
    content: 'followed you',
    time: '4h',
  },
  {
    id: '3',
    type: 'retweet',
    user: {
      name: 'Design Systems Weekly',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzsFk9_nXWoxpH_toT4ZuH2-RXYy2_6hltm8El_bp4FBipml-kAloFRUOFXDzeVb_rNin5JCPLQxCCGgC-Y0_ACWR1eQGzQ3AZv23NDLhV1Xgp57kMAmlC5UU8ePK6NtL6w3v-FPCAOAFLCkSNmT6YOHzZp2BTM4E5IyU0mOqUpGvH8-NIV4hW4Qia6jthTn4USSU2QaXiuGhiDw41OiNW5iojUYYzflBTUZC30-W5qvZMpD9PvAlB4HFbec_GW2WO2gJUeKOQnbWL',
    },
    content: 'rechirped your Chirp',
    preview: 'Working on something exciting...',
    time: '6h',
  },
  {
    id: '4',
    type: 'mention',
    user: {
      name: 'Elena Rossi',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzcroqDyvw43YZyoqB7R7GzFqUMpWn5JjVKFClMSizuds2GnfVJdnXca8RaExJgTqdpYQCXyU1V_Z5nE_CQiOybU2RghA5l1Bpp7tkVi1NzyV4soKZaDQx168yROanOacMHaYdAGtjm2mpqJ5eJW1TZfnqQHSLlcVHt_fhOs9s6Bi4WPi6Vx_ES6vCaDoiQMuJGKDm0ytkpaOGqcQTPNu85JYMxs-ecOXXLu4oiufeC-PoFn11toGANcjsmTHmpeoebS5QtewFcgd1',
    },
    content: 'mentioned you in a Chirp',
    preview: '@arivera_design what do you think about this design?',
    time: '8h',
  },
]

const tabs = ['All', 'Verified', 'Mentions']

export default function Notifications() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'like':
        return { icon: 'favorite', color: 'text-rose-500' }
      case 'follow':
        return { icon: 'person', color: 'text-primary' }
      case 'retweet':
        return { icon: 'repeat', color: 'text-emerald-500' }
      case 'mention':
        return { icon: 'alternate_email', color: 'text-primary' }
      default:
        return { icon: 'notifications', color: 'text-slate-500' }
    }
  }

  return (
    <>
      <div className="sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-10 border-b border-slate-200 dark:border-slate-800">
        <h1 className="text-xl font-bold px-4 py-4">Notifications</h1>
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
      </div>

      <div className="divide-y divide-slate-200 dark:divide-slate-800">
        {notifications.map((notification) => {
          const { icon, color } = getIcon(notification.type)
          return (
            <div
              key={notification.id}
              className="p-4 hover:bg-slate-50 dark:hover:bg-white/[0.02] cursor-pointer transition-colors"
            >
              <div className="flex gap-3">
                <div className={`${color} pt-1`}>
                  <span className="material-symbols-outlined !text-2xl">{icon}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <div
                      className="w-8 h-8 rounded-full bg-cover bg-center"
                      style={{ backgroundImage: `url('${notification.user.avatar}')` }}
                    />
                  </div>
                  <p className="text-base">
                    <span className="font-bold">{notification.user.name}</span>{' '}
                    <span className="text-slate-500 dark:text-slate-400">{notification.content}</span>
                  </p>
                  {notification.preview && (
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                      {notification.preview}
                    </p>
                  )}
                </div>
                <span className="text-slate-500 dark:text-slate-400 text-sm">{notification.time}</span>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
