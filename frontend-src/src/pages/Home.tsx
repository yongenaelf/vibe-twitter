import Composer from '../components/Composer'
import Post from '../components/Post'

const mockPosts = [
  {
    id: '1',
    author: {
      name: 'Sarah Jenkins',
      handle: '@sjenks_dev',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMJBUpuhUS3VgSkwGnBwZuoXlxDeAZgwilyVEZ_QRCb0BDU2uPu3rw8BiDomOod_6VqTXhgZEH5exAz-1F4xwVIleSXQxuwLIFYlOwckFYFRnf4Q6s2J9j_dLli4IdG0fzXpctOD7vifnoBx_zE3eJndxRrWHuCSYxxMGgzMcHNmlKc2M7Sij69ddabXk2EhegV0CGQwFhJO3mn554ruQ9-6GbpsX7JAHVS-D_6vE2W2cq1mSi29scOLZUJT-qYln7mnFUVaFDAJlO',
    },
    content: 'Just switched the entire design system to <span class="text-primary">#PlusJakartaSans</span>. The improvement in legibility at small sizes is genuinely impressive. Highly recommend for any modern web UI! 🚀',
    stats: { comments: 24, retweets: 12, likes: 156, views: '12k' },
    timestamp: '2h',
  },
  {
    id: '2',
    author: {
      name: 'Marcus Chen',
      handle: '@marcus_ux',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-CGA0uKopcUSpJUmsBmPSTBQrPl7j-wnBa7uxSxg4NkNkP_DSBMWP_h0oVWW0uQpjuXplBMKlVqnHcSh_UhZ_3ZpYxGOiTpAcFRW3K6o-_us38TbSIlpBG1TzqJVmIzH9ftp9lOICO6nuuMk-MtI0053bmcwQBEUuGx38Y-twuMqahkEJ7hwTVSHpZ-RcBqBGtnPqp4_SNqVoaespZk1DtFqFw40hnWakZCVoZ2xTg4rzlipt4Yk6bYOxrPCxhFSTD9jDiTS5rikb',
    },
    content: 'Designing for the web in 2024 is all about finding the balance between information density and white space. Dark mode helps, but hierarchy is still king.',
    image: 'linear-gradient(135deg, #0d7ff2 0%, #101922 100%)',
    stats: { comments: 8, retweets: 31, likes: 482, views: '45k' },
    timestamp: '4h',
    liked: true,
  },
  {
    id: '3',
    author: {
      name: 'Design Systems Weekly',
      handle: '@ds_weekly',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzsFk9_nXWoxpH_toT4ZuH2-RXYy2_6hltm8El_bp4FBipml-kAloFRUOFXDzeVb_rNin5JCPLQxCCGgC-Y0_ACWR1eQGzQ3AZv23NDLhV1Xgp57kMAmlC5UU8ePK6NtL6w3v-FPCAOAFLCkSNmT6YOHzZp2BTM4E5IyU0mOqUpGvH8-NIV4hW4Qia6jthTn4USSU2QaXiuGhiDw41OiNW5iojUYYzflBTUZC30-W5qvZMpD9PvAlB4HFbec_GW2WO2gJUeKOQnbWL',
    },
    content: 'Our latest guide on Tailwind CSS component architecture is live. We cover theming, dark mode strategies, and layout best practices. Check it out! 🔗 <span class="text-primary">ds-weekly.com/tailwind-best-p...</span>',
    stats: { comments: 114, retweets: 82, likes: 943, views: '89k' },
    timestamp: '6h',
  },
]

export default function Home() {
  return (
    <>
      <div className="sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-10 border-b border-slate-200 dark:border-slate-800 px-4 py-4">
        <h1 className="text-xl font-bold">Home</h1>
      </div>
      
      <Composer />
      
      <div className="divide-y divide-slate-200 dark:divide-slate-800">
        {mockPosts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </>
  )
}
