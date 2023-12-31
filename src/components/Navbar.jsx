import { Link } from 'react-router-dom'
import useLogout from '../hooks/useLogout'  
import { useState, useEffect } from 'react'
import { useGlobalContext } from './../hooks/useGlobalContext'

function Navbar() {

  // dark/light theme
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  )

  useEffect(() => {
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme', localTheme)
  }, [theme])

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }


  // docs
  const { user } = useGlobalContext()
  const { logout, error } = useLogout()

  if (error) {
    alert("Log out error")
  }

  return (
    <header className="w-full flex bg-slate-700 mb-5">
      <div className="max-container flex flex-col justify-center sm:items-center sm:justify-between sm:flex-row">
        <Link to="/" className="text-gray-300 font-bold text-2xl text-center sm:text-left capitalize font-sans md:text-3xl mb-3 sm:mb-0">my kitchen</Link>
        <nav className="flex flex-col items-center gap-4 sm:flex-row">
          <p className="text-[9px] badge badge-sm md:text-[11px] badge-neutral">Welcome, &nbsp; <span className="font-bold capitalize">{user.displayName}</span></p>
          <span className="flex items-center gap-3">
            <Link to="/create" className="btn btn-primary btn-xs md:btn-sm">Create</Link>
            <button onClick={logout} className="btn btn-warn btn-xs md:btn-sm">Log out</button>
          </span>
        </nav>
        {/* themes */}
        <label className="swap swap-rotate absolute top-7 right-3">
          <input type="checkbox" onChange={handleToggle} checked={theme === 'light' ? false : true} />
          <svg className="swap-on fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
          <svg className="swap-off text-slate-400 fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
        </label>
      </div>
    </header>
  )
}

export default Navbar