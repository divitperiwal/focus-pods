import React from 'react'

const OptionCards = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 bg-white p-4 rounded-lg shadow-lg cursor-pointer h-[24] w-[14%] min-w-[200px]'>
      <div className='flex items-center justify-center gap-2'>
        <div className='bg-[#00e0ff] w-10 h-10 rounded-full'></div>
        <span className='text-lg font-semibold'>Coding</span>
      </div>
    </div>
  )
}

export default OptionCards