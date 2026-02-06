const conversations = [
  {
    id: '1',
    user: {
      name: 'Sarah Jenkins',
      handle: '@sjenks_dev',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMJBUpuhUS3VgSkwGnBwZuoXlxDeAZgwilyVEZ_QRCb0BDU2uPu3rw8BiDomOod_6VqTXhgZEH5exAz-1F4xwVIleSXQxuwLIFYlOwckFYFRnf4Q6s2J9j_dLli4IdG0fzXpctOD7vifnoBx_zE3eJndxRrWHuCSYxxMGgzMcHNmlKc2M7Sij69ddabXk2EhegV0CGQwFhJO3mn554ruQ9-6GbpsX7JAHVS-D_6vE2W2cq1mSi29scOLZUJT-qYln7mnFUVaFDAJlO',
    },
    lastMessage: 'Hey! Did you see the new design system update?',
    time: '2m',
    unread: true,
  },
  {
    id: '2',
    user: {
      name: 'Marcus Chen',
      handle: '@marcus_ux',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-CGA0uKopcUSpJUmsBmPSTBQrPl7j-wnBa7uxSxg4NkNkP_DSBMWP_h0oVWW0uQpjuXplBMKlVqnHcSh_UhZ_3ZpYxGOiTpAcFRW3K6o-_us38TbSIlpBG1TzqJVmIzH9ftp9lOICO6nuuMk-MtI0053bmcwQBEUuGx38Y-twuMqahkEJ7hwTVSHpZ-RcBqBGtnPqp4_SNqVoaespZk1DtFqFw40hnWakZCVoZ2xTg4rzlipt4Yk6bYOxrPCxhFSTD9jDiTS5rikb',
    },
    lastMessage: 'Thanks for the feedback on my portfolio!',
    time: '1h',
    unread: false,
  },
  {
    id: '3',
    user: {
      name: 'Design Systems Weekly',
      handle: '@ds_weekly',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzsFk9_nXWoxpH_toT4ZuH2-RXYy2_6hltm8El_bp4FBipml-kAloFRUOFXDzeVb_rNin5JCPLQxCCGgC-Y0_ACWR1eQGzQ3AZv23NDLhV1Xgp57kMAmlC5UU8ePK6NtL6w3v-FPCAOAFLCkSNmT6YOHzZp2BTM4E5IyU0mOqUpGvH8-NIV4hW4Qia6jthTn4USSU2QaXiuGhiDw41OiNW5iojUYYzflBTUZC30-W5qvZMpD9PvAlB4HFbec_GW2WO2gJUeKOQnbWL',
    },
    lastMessage: 'Would you like to be featured in our newsletter?',
    time: '3h',
    unread: true,
  },
  {
    id: '4',
    user: {
      name: 'Elena Rossi',
      handle: '@elena_ux',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzcroqDyvw43YZyoqB7R7GzFqUMpWn5JjVKFClMSizuds2GnfVJdnXca8RaExJgTqdpYQCXyU1V_Z5nE_CQiOybU2RghA5l1Bpp7tkVi1NzyV4soKZaDQx168yROanOacMHaYdAGtjm2mpqJ5eJW1TZfnqQHSLlcVHt_fhOs9s6Bi4WPi6Vx_ES6vCaDoiQMuJGKDm0ytkpaOGqcQTPNu85JYMxs-ecOXXLu4oiufeC-PoFn11toGANcjsmTHmpeoebS5QtewFcgd1',
    },
    lastMessage: 'The collaboration was amazing! 🎉',
    time: '1d',
    unread: false,
  },
]

export default function Messages() {
  return (
    <>
      <div className="sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-10 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between px-4 py-4">
          <h1 className="text-xl font-bold">Messages</h1>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-slate-200 dark:hover:bg-white/10 rounded-full transition-colors">
              <span className="material-symbols-outlined !text-xl">settings</span>
            </button>
            <button className="p-2 hover:bg-slate-200 dark:hover:bg-white/10 rounded-full transition-colors">
              <span className="material-symbols-outlined !text-xl">mail</span>
            </button>
          </div>
        </div>
        
        {/* Search */}
        <div className="px-4 pb-4">
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors">
              search
            </span>
            <input
              className="w-full bg-slate-200 dark:bg-white/10 border-none rounded-full py-2.5 pl-12 pr-4 focus:ring-1 focus:ring-primary focus:bg-transparent dark:focus:bg-transparent transition-all outline-none text-sm"
              placeholder="Search Direct Messages"
              type="text"
            />
          </div>
        </div>
      </div>

      <div className="divide-y divide-slate-200 dark:divide-slate-800">
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            className="p-4 hover:bg-slate-50 dark:hover:bg-white/[0.02] cursor-pointer transition-colors"
          >
            <div className="flex gap-3">
              <div
                className="w-12 h-12 rounded-full bg-cover bg-center shrink-0"
                style={{ backgroundImage: `url('${conversation.user.avatar}')` }}
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className={`font-bold truncate ${conversation.unread ? '' : 'text-slate-500 dark:text-slate-400'}`}>
                    {conversation.user.name}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm truncate">
                    {conversation.user.handle}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm ml-auto shrink-0">
                    {conversation.time}
                  </span>
                </div>
                <p className={`text-sm truncate mt-0.5 ${conversation.unread ? 'font-medium' : 'text-slate-500 dark:text-slate-400'}`}>
                  {conversation.lastMessage}
                </p>
              </div>
              {conversation.unread && (
                <div className="w-2.5 h-2.5 bg-primary rounded-full shrink-0 mt-2" />
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
