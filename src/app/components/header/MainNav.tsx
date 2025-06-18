import Link from 'next/link'
import React from 'react'

const Links = () => {
  return (
    <ul className='flex items-center gap-6 shrink-0'>
      <li> 
        <Link href='#'>Green Products</Link>
      </li>
      <li> 
        <Link href='#'>Gallary</Link>
      </li>
      <li> 
        <Link href='#'>3D Builder</Link>
      </li>
      <li> 
        <Link href='#'>CartIcon</Link>
      </li>
      <li> 
        <Link href='#'>LOGIN</Link>
      </li>
    </ul>
  )
}

export default Links