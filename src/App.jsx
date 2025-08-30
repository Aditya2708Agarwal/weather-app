import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=' min-h-screen   relative overflow-hidden '>
        <div className='absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')" }}>
          <div className='absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-indigo-900/40'></div>
          <div className='absolute inset-0 bg-black-10'></div>
        </div>  
        <div className='relative z-10 container py-8 px-4 min-h-screen'>
          <div className='max-w-7xl mx-auto'>
          {/* Your content goes here */}
          <div className='text-center mb-12'>
            <div className='mb-8'>
              <h1 className='text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl tracking-tight'>weather <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>Pro</span></h1>
              <p className='text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed'>Your ultimate weather companion powered by React and Tailwind CSSdsklnwRIGrnfpe 32r3202 23r 23r  32 t2tr924tq4 9t4u90t290t2  490244 9r 490 r8yw8ifgogh8wtw 89t w48 8w80
              </p>
            </div>
            <div className='flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-6 mb-12'>
              <SearchBar />
            </div>
          </div>
        </div>
        </div>
      </div>  
    </>
  )
}

export default App
