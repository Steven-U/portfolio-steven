'use client'

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
  }

  return (
    <footer id="contact" className="w-full max-w-7xl mx-auto mt-10 mb-24 pt-12 px-8 pb-10">
      <div className="relative bg-transparent">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 border-b border-neutral-200 pb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600" style={{strokeWidth:1.5}} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z"></path>
              </svg>
              <h3 className="text-2xl sm:text-3xl text-neutral-900 font-medium tracking-tighter font-playfair">Steven Ung</h3>
            </div>
            <p className="text-lg sm:text-xl text-neutral-700 leading-relaxed max-w-2xl">
              Let&apos;s build your next tech solution. Contact me.
            </p>
          </div>
          <div className="">
            <h4 className="text-neutral-900 font-medium mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li><a href="#work" className="hover:text-blue-600 transition">Work</a></li>
              <li><a href="#techstack" className="hover:text-blue-600 transition">Tech Stack</a></li>
              <li><a href="#services" className="hover:text-blue-600 transition">Services</a></li>
              <li><a href="#about" className="hover:text-blue-600 transition">About</a></li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-neutral-900 font-medium mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li><a href="mailto:su.stevenung@gmail.com" className="hover:text-blue-600 transition">Email</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 rounded-3xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 ring-1 ring-blue-200 text-xs text-blue-800 bg-blue-100 rounded-full px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                Available now
              </div>
              <h4 className="text-xl sm:text-2xl text-neutral-900 font-medium tracking-tighter font-playfair">Ready to innovate?</h4>
              <ul className="text-sm text-neutral-700 space-y-3">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-blue-600 mt-0.5" style={{strokeWidth:1.5}} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg> 
                  AI-optimized development
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-blue-600 mt-0.5" style={{strokeWidth:1.5}} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg> 
                  Full-stack expertise
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-blue-600 mt-0.5" style={{strokeWidth:1.5}} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg> 
                  Rapid delivery
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2 text-sm">
                <a href="mailto:su.stevenung@gmail.com" className="inline-flex items-center gap-2 hover:text-blue-600 transition text-neutral-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" style={{strokeWidth:1.5}} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  </svg>
                  Email
                </a>
              </div>
            </div>
            <div className="lg:col-span-2">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700">Name</label>
                    <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm" placeholder="Your name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700">Email</label>
                    <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm" placeholder="your.email@example.com" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700">Message</label>
                  <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm" placeholder="Describe your project or needs..." required></textarea>
                </div>
                <a href="mailto:su.stevenung@gmail.com?subject=Tech%20Collaboration%20Inquiry&body=Hi%20Steven,%0D%0A%0D%0AI'm%20interested%20in%20discussing%20a%20project%20with%20you.%0D%0A%0D%0ABest%20regards" className="inline-flex items-center justify-center gap-2 hover:bg-neutral-800 transition text-sm font-medium text-white bg-black w-full rounded-md pt-2.5 pr-4 pb-2.5 pl-4">
                  Send Message
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" style={{strokeWidth:1.5}} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="m7 17 9.2-9.2"></path>
                    <path d="M20 13v-2a4 4 0 0 0-4-4H7.2"></path>
                  </svg>
                </a>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-neutral-500">
          © 2025 Steven Ung. All rights reserved. Built with <a href="https://nextjs.org" target="_blank" className="text-blue-600 hover:underline">Next.js</a> and <a href="https://tailwindcss.com" target="_blank" className="text-blue-600 hover:underline">Tailwind CSS</a>.
        </div>
      </div>
    </footer>
  )
}