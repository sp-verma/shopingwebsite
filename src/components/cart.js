"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation'

const cart = () => {
  const searchParams=useSearchParams()
  const price=searchParams.get('price')
  const image=searchParams.get('image')
  const title=searchParams.get('title')
  
  return (
    <div className="flex max-w-2xl flex-col items-center rounded-md border md:flex-row">
    <div className="h-full w-full md:h-[300px] md:w-[300px]">
      <img
        src={`${image}`}
        alt="Laptop"
        className="h-full w-full rounded-md object-cover"
      />
    </div>
    <div>
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          About Macbook 
        </h1>
        <p className="mt-3 text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
        </p>
        <div className="mt-4">
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Macbook
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Apple
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Laptop
          </span>
        </div>
        <div className="mt-3 flex items-center space-x-2">
          
      <button className='w-[15rem] h-[8rem]rounded-4 border-2 bg-[#FB641B] text-white'>
        Order
      </button>
        </div>
      </div>
    </div>
  </div>

  )
}

export default cart
