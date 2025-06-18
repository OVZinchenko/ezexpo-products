import Link from 'next/link'
import React from 'react'

const Links = () => {
  return (
    <ul className='flex items-center gap-6 text-white text-xs font-bold'>
      <li> 
        <Link href='#'>Expo</Link>
      </li>
      <li> 
        <Link href='#'>Events</Link>
      </li>
      <li> 
        <Link href='#'>Furniture</Link>
      </li>
      <li> 
        <Link href='#'>LF Printing</Link>
      </li>
    </ul>
  )
}

export default Links