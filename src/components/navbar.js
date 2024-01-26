import React from 'react'

function Navbar() {
  return (
    <div>
        <header className='fixed top-0 left-0 w-full h-16 p-y-full p-x-20 flex justify-between items-center z-100'>
            <a href="#" className='px-10 text-3xl font-bold text-white'>Credenz.</a>

            <nav className='text-base text-white font-medium m-20'>
                <a href="#" className='p-2 transition duration-0.3 hover:text-black'>Home</a>
                <a href="#" className='p-2 transition duration-0.3 hover:text-black'>About</a>
                <a href="#" className='p-2 transition duration-0.3 hover:text-black'>Services</a>
                <a href="#" className='p-2 transition duration-0.3 hover:text-black'>contact</a>
            </nav>

        </header>
    </div>
  )
}

export default Navbar