import React from 'react'

const Container = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='flex items-center px-32 w-full'>
      {children}
    </div>
  )
}

export default Container