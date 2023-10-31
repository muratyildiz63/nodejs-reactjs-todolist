import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'

function Header() {




  const [isShow, setIsShow] = useState(false)
  return (
    <header className="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 mb-5">
    <div className="flex items-center justify-between px-4 py-3 sm:p-0">
      <div className="sm:hidden">
        <button onClick={()=>setIsShow(!isShow)}  type="button" className="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {
              isShow ? <path  fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
              :
              <path  fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
            }         
          </svg>
        </button>
      </div>
    </div>
    
    <nav  className={isShow ? 'block px-2 pt-2 pb-4 sm:flex sm:p-0' : 'hidden px-2 pt-2 pb-4 sm:flex sm:p-0'} >
      <NavLink to="/"   className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">Listele</NavLink>    
      <NavLink to="add"  className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">Todo Ekle</NavLink>
    </nav>
  </header>
  )
}

export default Header
