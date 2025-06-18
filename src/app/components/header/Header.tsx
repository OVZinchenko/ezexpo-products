import React from 'react'
import Container from '../Container'
import SearchBar from './SearchBar'
import MainNav from './MainNav'
import SecondaryNav from './SecondaryNav'

const Header = () => {
  return (
    <div className='flex flex-col w-full text-secondary'>
      <Container>
        <div className='flex items-center justify-between gap-12 pt-8 pb-6 w-full text-xs'>
          <span className='text-3xl font-bold'>EZEXPO</span>
          <div className='flex items-center justify-end gap-8 w-full'>
            <SearchBar />
            <MainNav />
          </div>
        </div>
      </Container>
      <div className='bg-primary'>
        <Container>
          <div className='flex items-center justify-between w-full py-3'>
            <SecondaryNav />
          </div>
          <span>لشعب</span>
        </Container>
      </div>
    </div>
  )
}

export default Header