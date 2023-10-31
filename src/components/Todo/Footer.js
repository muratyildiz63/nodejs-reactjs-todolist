import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   
<footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <span className="hover:underline">Alus</span>
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link to="/" className="mr-4 hover:underline md:mr-6">Todo Listele</Link>
        </li>
        <li>
            <Link to="add" className="mr-4 hover:underline md:mr-6">Todo Ekle</Link>
        </li>
     
    </ul>
</footer>

  )
}

export default Footer
