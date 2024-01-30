import React from 'react'

function Qpanel() {
  return (
    <div className="box-border flex items-center justify-center font-bold text-white mr-80">
        <div className='border-solid border-4 border-black rounded-xl flex-col m-5 w-screen'>
        <h1 className='m-2'>Card title</h1>
        <p className='m-2 text-base text-center mb-32'>What song would make the best theme music for you?</p>
        <button class="h-10 w-20 relative inline-flex items-center justify-center ml-2 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-300 to-blue-600 group-hover:from-green-100 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-20">submit</button>
      </div>
    </div>
    
  )
}

export default Qpanel