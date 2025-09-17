
'use client'

import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

type Message = {
  id: string
  role: 'user' | 'assistant'
  content: string
}

export default function TechStack() {
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submit clicked - input:', input.trim(), 'isLoading:', isLoading)
    if (!input.trim() || isLoading) return
    
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input
    }
    
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)
    
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        })
      })
      
      if (!response.ok) throw new Error('Failed to send message')
      
      const reader = response.body?.getReader()
      const decoder = new TextDecoder()
      let assistantMessage = ''
      
      // Add the assistant message placeholder immediately for real-time updates
      const tempId = Date.now().toString()
      const tempMessage: Message = {
        id: tempId,
        role: 'assistant',
        content: ''
      }
      setMessages(prev => [...prev, tempMessage])
      
      if (reader) {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          
          const chunk = decoder.decode(value, { stream: true })
          console.log('Received chunk:', JSON.stringify(chunk))
          
          if (chunk) {
            assistantMessage += chunk
            console.log('Current message:', assistantMessage)
            
            setMessages(prev => prev.map(msg => 
              msg.id === tempId 
                ? { ...msg, content: assistantMessage }
                : msg
            ))
          }
        }
      }
      
      // If no content was received, update the placeholder message
      if (!assistantMessage) {
        setMessages(prev => prev.map(msg => 
          msg.id === tempId 
            ? { ...msg, content: 'No response received' }
            : msg
        ))
      }
    } catch (error) {
      console.error('Chat error:', error)
    } finally {
      console.log('Setting isLoading to false')
      setIsLoading(false)
    }
  }
  return (
    <section className="relative sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pb-20 pl-4">
      <div className="relative rounded-3xl bg-neutral-950 ring-1 ring-neutral-800 p-2 sm:p-3">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-1/3 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 blur-3xl opacity-40"></div>
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-800 to-transparent"></div>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-3 sm:gap-4 relative">
          {/* Left Sidebar */}
          <aside className="lg:col-span-3 bg-neutral-900/60 ring-1 ring-neutral-800 rounded-2xl p-4 flex flex-col">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-neutral-700 ring-1 ring-neutral-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z"></path>
                  </svg>
                </div>
                <span className="text-white text-sm font-medium tracking-tight">Tech Studio</span>
              </div>
              <button className="inline-flex items-center justify-center w-8 h-8 rounded-lg hover:bg-neutral-800 transition text-neutral-300 ring-1 ring-neutral-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 12h16"></path>
                  <path d="M4 6h16"></path>
                  <path d="M4 18h16"></path>
                </svg>
              </button>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-neutral-700 ring-neutral-600 ring-1 rounded-full flex items-center justify-center text-white text-xs font-bold">SU</div>
              <div>
                <p className="text-white text-sm font-medium tracking-tight">Steven Ung</p>
                <p className="text-neutral-400 text-xs">AI Engineer</p>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-2">Navigation</p>
              <nav className="space-y-1">
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-neutral-300 hover:bg-neutral-800 transition" href="#overview">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="7" height="7" rx="1"></rect>
                    <rect x="14" y="3" width="7" height="7" rx="1"></rect>
                    <rect x="14" y="14" width="7" height="7" rx="1"></rect>
                    <rect x="3" y="14" width="7" height="7" rx="1"></rect>
                  </svg>
                  Overview
                </a>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-neutral-100 bg-neutral-800 ring-1 ring-neutral-700" href="#techstack">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2 2 7l10 5 10-5z"></path>
                    <path d="m2 17 10 5 10-5"></path>
                    <path d="m2 12 10 5 10-5"></path>
                  </svg>
                  Tech Stack
                </a>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-neutral-300 hover:bg-neutral-800 transition" href="#projects">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <path d="M16 2v4"></path>
                    <path d="M8 2v4"></path>
                    <path d="M3 10h18"></path>
                  </svg>
                  Projects
                </a>
              </nav>
            </div>
            <div className="mt-6">
              <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-2">Recent Projects</p>
              <ul className="space-y-1 text-sm">
                <li className="px-3 py-2 rounded-lg text-neutral-300 hover:bg-neutral-800 transition cursor-pointer" onClick={() => window.open('https://www.creava.ai', '_blank')}>Creava AI</li>
                <li className="px-3 py-2 rounded-lg text-neutral-300 hover:bg-neutral-800 transition cursor-pointer" onClick={() => window.open('https://toolranks.com', '_blank')}>ToolRanks</li>
                <li className="px-3 py-2 rounded-lg text-neutral-300 hover:bg-neutral-800 transition cursor-pointer" onClick={() => window.open('https://vibepov.com', '_blank')}>VibePOV</li>
                <li className="px-3 py-2 rounded-lg text-neutral-300 hover:bg-neutral-800 transition cursor-pointer" onClick={() => window.open('https://tools.flaex.ai', '_blank')}>Flaex Tools</li>
              </ul>
            </div>
          </aside>
          
          {/* Main Tech Area */}
          <main className="lg:col-span-6 bg-neutral-900/60 ring-1 ring-neutral-800 rounded-2xl p-4 sm:p-6 relative overflow-hidden">
            <header className="flex items-start justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl text-white font-medium tracking-tight">AI Development Hub</h2>
                <p className="text-sm text-neutral-400 mt-1">Transform your ideas into scalable tech solutions with AI</p>
              </div>
            </header>
            <div className="mt-4 rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-950 ring-1 ring-neutral-800 p-4 sm:p-6 relative">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-[11px] text-neutral-300 bg-neutral-800/70 rounded-full px-3 py-1 ring-1 ring-neutral-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  Chat with AI
                </span>
              </div>
              
              {/* Chat Messages */}
              <div className="mt-4 max-h-48 sm:max-h-64 overflow-y-auto space-y-3">
                {messages.length === 0 ? (
                  <div className="rounded-2xl bg-neutral-800/80 ring-1 ring-neutral-700 text-sm text-neutral-200 px-4 py-3">
                    👋 Hi! I'm Steven's AI assistant. Ask me anything about his work, projects, or how he can help with your tech needs!
                  </div>
                ) : (
                  messages.map((message) => (
                    <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm ${
                        message.role === 'user' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-neutral-800/80 ring-1 ring-neutral-700 text-neutral-200'
                      }`}>
                        {message.role === 'assistant' ? (
                          <div className="prose prose-invert prose-sm max-w-none">
                            <ReactMarkdown 
                              components={{
                                p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                                ul: ({ children }) => <ul className="list-disc pl-4 mb-2">{children}</ul>,
                                li: ({ children }) => <li className="mb-1">{children}</li>,
                                strong: ({ children }) => <strong className="font-semibold text-blue-200">{children}</strong>,
                                em: ({ children }) => <em className="italic text-neutral-300">{children}</em>,
                                code: ({ children }) => <code className="bg-neutral-700 px-1 py-0.5 rounded text-xs">{children}</code>,
                                table: ({ children }) => <table className="w-full border-collapse border border-neutral-600 mb-4 text-xs">{children}</table>,
                                thead: ({ children }) => <thead className="bg-neutral-800">{children}</thead>,
                                tbody: ({ children }) => <tbody>{children}</tbody>,
                                tr: ({ children }) => <tr className="border-b border-neutral-600">{children}</tr>,
                                th: ({ children }) => <th className="border border-neutral-600 px-2 py-1 text-left font-medium">{children}</th>,
                                td: ({ children }) => <td className="border border-neutral-600 px-2 py-1">{children}</td>,
                              }}
                            >
                              {message.content}
                            </ReactMarkdown>
                          </div>
                        ) : (
                          message.content
                        )}
                      </div>
                    </div>
                  ))
                )}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-neutral-800/80 ring-1 ring-neutral-700 text-neutral-200 rounded-2xl px-4 py-3 text-sm">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <form onSubmit={handleSubmit} className="mt-8 flex items-end gap-3">
              <div className="flex-1 rounded-2xl bg-neutral-900 ring-1 ring-neutral-800 px-3 py-2">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2 2 7l10 5 10-5z"></path>
                    <path d="m2 17 10 5 10-5"></path>
                    <path d="m2 12 10 5 10-5"></path>
                  </svg>
                  <input 
                    type="text" 
                    placeholder="Ask about Steven's work, projects, or services..." 
                    className="flex-1 bg-transparent outline-none text-sm text-neutral-200 placeholder-neutral-500"
                    value={input}
                    onChange={handleInputChange}
                    disabled={isLoading}
                  />
                </div>
              </div>
              <button 
                type="submit"
                disabled={isLoading || !input.trim()}
                className="w-12 h-12 rounded-2xl bg-blue-500 hover:bg-blue-400 disabled:bg-neutral-600 disabled:cursor-not-allowed transition ring-1 ring-blue-400 inline-flex items-center justify-center"
              >
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z"></path>
                  </svg>
                )}
              </button>
            </form>
            <p className="mt-2 text-[11px] text-neutral-500">Chat with Steven's AI assistant to learn about his work and services.</p>
          </main>
          
          {/* Right Sidebar */}
          <aside className="lg:col-span-3 bg-neutral-900/60 ring-1 ring-neutral-800 rounded-2xl p-4 flex flex-col">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-xs text-blue-200 bg-blue-900/40 rounded-full px-3 py-1 ring-1 ring-blue-700">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                Tech Suite Pro
              </span>
              <button className="w-8 h-8 inline-flex items-center justify-center rounded-lg ring-1 ring-neutral-800 text-neutral-300 hover:bg-neutral-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 3v18"></path>
                  <path d="M3 12h18"></path>
                </svg>
              </button>
            </div>
            <div className="mt-4 flex items-center gap-6">
              <button className="relative text-sm text-white">
                <span>PROJECTS</span>
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-white rounded-full"></span>
              </button>
            </div>
            <div className="mt-6">
              <div className="flex items-center gap-2 mb-2">
                <p className="text-sm text-neutral-300 font-medium tracking-tight">Active Projects</p>
                <span className="inline-flex items-center text-[11px] text-black bg-blue-400 rounded-full px-2 py-0.5 ring-1 ring-blue-300">Live</span>
              </div>
              <div className="space-y-2">
                <div className="p-3 rounded-xl ring-1 ring-purple-700 bg-purple-900/20 cursor-pointer hover:bg-purple-900/30 transition" onClick={() => window.open('https://www.creava.ai', '_blank')}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="relative w-4 h-4 rounded-md ring-1 ring-purple-600 bg-purple-500/20">
                        <span className="absolute inset-0.5 rounded-[3px] bg-purple-400"></span>
                      </span>
                      <p className="text-sm text-neutral-200">Creava AI</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-purple-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </div>
                </div>
                <div className="p-3 rounded-xl ring-1 ring-cyan-700 bg-cyan-900/20 cursor-pointer hover:bg-cyan-900/30 transition" onClick={() => window.open('https://toolranks.com', '_blank')}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="relative w-4 h-4 rounded-md ring-1 ring-cyan-600 bg-cyan-500/20">
                        <span className="absolute inset-0.5 rounded-[3px] bg-cyan-400"></span>
                      </span>
                      <p className="text-sm text-neutral-200">ToolRanks</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </div>
                </div>
                <div className="p-3 rounded-xl ring-1 ring-green-700 bg-green-900/20 cursor-pointer hover:bg-green-900/30 transition" onClick={() => window.open('https://vibepov.com', '_blank')}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="relative w-4 h-4 rounded-md ring-1 ring-green-600 bg-green-500/20">
                        <span className="absolute inset-0.5 rounded-[3px] bg-green-400"></span>
                      </span>
                      <p className="text-sm text-neutral-200">VibePOV</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-green-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </div>
                </div>
                <div className="p-3 rounded-xl ring-1 ring-orange-700 bg-orange-900/20 cursor-pointer hover:bg-orange-900/30 transition" onClick={() => window.open('https://tools.flaex.ai', '_blank')}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="relative w-4 h-4 rounded-md ring-1 ring-orange-600 bg-orange-500/20">
                        <span className="absolute inset-0.5 rounded-[3px] bg-orange-400"></span>
                      </span>
                      <p className="text-sm text-neutral-200">Flaex Tools</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-orange-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}