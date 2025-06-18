import React from 'react'
import Container from '../Container'
import footerLinks from '@/app/data/footer/footer-links.json'
import NavList from './NavList'
import SubscribeForm from './SubscribeForm'
import ConnectWithUs from './ConnectWithUs'
import PaymentsSystems from './PaymentsSystems'

const Footer = () => {
  return (
    <div className='flex flex-col w-full fixed bottom-0 text-secondary bg-customGrey'>
      <Container>
        <div className='flex justify-center gap-20 pt-8 pb-6 w-full'>
          <div className='flex flex-col gap-3 items-center shrink-0'>
            <span className='text-3xl font-bold'>EZEXPO</span>
            <p className='font-bold text-xs'>SUN - THU | 9AM - 5PM</p>
          </div>
          {
            footerLinks.map((navList, i) => <NavList navList={navList} key={i}/>)
          }
          <div className='flex flex-col justify-between'>
            <div className='flex flex-col gap-4'>
              <SubscribeForm />
              <ConnectWithUs />
            </div>
            <PaymentsSystems />
          </div>
        </div>
      </Container>
      <div className='bg-secondary flex justify-center py-4'>
        <span className='text-white text-xs'>&copy; 2023 Saudi-Ezexpo</span>
      </div>
    </div>
  )
}

export default Footer