import { FooterLinksBlock } from '@/app/types/footer/footer-types'
import Link from 'next/link'
import React from 'react'

const NavList = ({navList} : {navList: FooterLinksBlock}) => {
  return (
    <div className='flex flex-col gap-4 shrink-0'>
      <h4 className='font-bold'>{navList.title}</h4>
      <div className='flex flex-col gap-2 text-xs'>
        {
          navList.links.map((link, i) => (
            <Link href={link.link} key={i}>{link.text}</Link>
          ))
        }
      </div>
    </div>
  )
}

export default NavList