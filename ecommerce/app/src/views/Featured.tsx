import React from 'react'
import Image from 'next/image'
import F1 from 'public/featured.jpg'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Featured = () => {
  return (
    <section className='px-8'>
      <div className='  text-4xl font-bold tracking-wide lg:text-5xl lg:w-[500px] md:w-[400px] sm:w-[400px] lg:ml-[600px] '>
        <h1 className=' '>Unique and Authentic Vintage Designer Jewellery</h1>
      </div>
      <div className='flex flex-col lg:flex-row mt-6'>

        <div className=' absolute text-8xl font-extrabold   opacity-10 mr-[680px]  '>
          <h1 className=''>Different from others</h1>
        </div>
        <div className=' grid  grid-cols-2   scroll-m-20  gap-2  w-[450px]  '>
          <div className=''>
            <h2 className='text-xl font-bold '>Using Good Quality Materials</h2>
            <p className='text-lg text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className=''>
            <h2 className='text-xl font-bold '>100% Handmade Products</h2>
            <p className='text-lg text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className=''>
            <h2 className='text-xl font-bold  '>Modern Fashion Design</h2>
            <p className='text-lg text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className=''>
            <h2 className='text-xl font-bold  '>Discount for Bulk Orders</h2>
            <p className='text-lg text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2  ml-12'>
          <div className=' '><Image src={F1} alt='featured' />
          </div>
          <div className=' lg:w-[250px] lg:ml-10  mt-6' >
            <p className='text-xl text-muted-foreground '>This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural color
              is the actual natural color of the fiber, undyed and 100% traceable.
            </p>
            <Link href={'/products'}>
            <Button className='bg-black hover:bg-black h-12  mt-5 '>See All Products</Button>
            </Link>        
          </div>

        </div>



      </div>
    </section>
  )
}

export default Featured