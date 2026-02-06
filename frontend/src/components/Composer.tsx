import { useState } from 'react'

export default function Composer() {
  const [content, setContent] = useState('')

  return (
    <div className="p-4 border-b border-slate-200 dark:border-slate-800">
      <div className="flex gap-4">
        <div
          className="w-12 h-12 rounded-full bg-cover bg-center shrink-0"
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCtIHGLkSOcIhyoRRST7Z0du2rMuCNgmFm2U_uvYCD3sZkkbBiuQRgfNTe1DyhIqxCUCmzLAsFhkasRKGx8mKDtXzfaigTc0gYMOvPifBjpva3lM78lt70nxfH9Np-rZfY2cJppTdlJp3wj1tIQqsllMuwl_vC6A3ZlGUJpVD4y4Y60zTfPpJEBE-WFUC6h9MMZ92xXI8tC9LKQs-ZOk1DDz1hWz6q3xX117TD87DYaUK7YZoHJB-md_PIKXK1Td7Mi1F2i59CoWVpw')" }}
        />
        <div className="flex-1 pt-2">
          <textarea
            className="w-full bg-transparent border-none focus:ring-0 text-xl placeholder-slate-500 resize-none min-h-[50px] dark:text-white"
            placeholder="What's happening?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800 mt-2">
            <div className="flex gap-1 text-primary">
              <button className="p-2 hover:bg-primary/10 rounded-full transition-colors">
                <span className="material-symbols-outlined !text-xl">image</span>
              </button>
              <button className="p-2 hover:bg-primary/10 rounded-full transition-colors">
                <span className="material-symbols-outlined !text-xl">gif_box</span>
              </button>
              <button className="p-2 hover:bg-primary/10 rounded-full transition-colors">
                <span className="material-symbols-outlined !text-xl">poll</span>
              </button>
              <button className="p-2 hover:bg-primary/10 rounded-full transition-colors">
                <span className="material-symbols-outlined !text-xl">sentiment_satisfied</span>
              </button>
              <button className="p-2 hover:bg-primary/10 rounded-full transition-colors">
                <span className="material-symbols-outlined !text-xl">calendar_month</span>
              </button>
            </div>
            <button
              className="bg-primary text-white font-bold py-1.5 px-6 rounded-full hover:bg-opacity-90 disabled:opacity-50 transition-all"
              disabled={!content.trim()}
            >
              Chirp
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
