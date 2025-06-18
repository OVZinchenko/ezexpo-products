import React from 'react'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import SecondaryButton from '../SecondaryButton'


const SubscribeForm = () => {
  return (
    <div className='flex flex-col gap-4 max-w-sm'>
      <h4 className='font-bold font-base'>Subscribe to our newsletter</h4>
      <p className='text-xs'>please subscribe to be able to receive updates and promotion news first</p>
      <div className='flex items-center gap-2'>
        <div className="relative rounded-md">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-lg border-0 outline-0 py-1.5 pl-10 text-gray-900 placeholder:text-gray-400 placeholder:text-xs focus:ring focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            placeholder="Email Address"
          />
        </div>
        <SecondaryButton buttonText='Subscribe'/>
      </div>
    </div>
  )
}

export default SubscribeForm