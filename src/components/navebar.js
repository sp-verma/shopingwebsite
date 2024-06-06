import { Icon } from 'lucide-react'
import { Search } from 'lucide-react'
import React from 'react'
import { Input } from "@/components/ui/input"
import { ShoppingCart } from 'lucide-react'
import { CircleUserRound } from 'lucide-react'
import Link from 'next/link'


const navbar = () => {
  return (
    <div className='flex justify-evenly items-center '>
      <div>
      
        <Link href='/' className='text-[blue] font-bold text-[1.4rem]'>BestPickStore</Link>
      </div>
      <div className='relative flex w-[42rem]  h-[3rem] border-2 border-black rounded-[0.5rem] mt-[1rem] items-center '>
      <Search  className='absolute  '/>
      <Input type="text" placeholder='search products' name='search' className='w-full h-full pl-[2rem]  ' />


      </div>
      <div className='flex gap-[2rem] '>
      <div className='flex gap-2 '>
      <Link className='text-[1.2rem] flex gap-2' href='/login'>
      <CircleUserRound />
     login
     </Link>
      </div>
      <div className='flex gap-2 '>
      <Link href='/cart' className=' flex gap-2 text-[1.2rem] '>

      <ShoppingCart />
       Card
      </Link>
      </div>
      </div>
    </div>
  )
}

export default navbar
