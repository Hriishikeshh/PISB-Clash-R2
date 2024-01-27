import React from 'react'

function Card() {
  return (
      <div className='border-solid border-4 border-black rounded-xl flex-col m-2'>
        <img src='https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE' alt='card-img' className='rounded-xl p-1' />
        <h1 className='m-2'>Card title</h1>
        <p className='m-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
        <button className='px-2 bg-white text-black m-2 rounded-md align-middle decoration-stone-400'>submit</button>
      </div>
  )
}

export default Card