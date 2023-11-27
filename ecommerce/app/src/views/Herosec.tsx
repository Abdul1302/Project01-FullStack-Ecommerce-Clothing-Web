import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from '@/components/ui/button'
import hero_img from 'public/hero_img.webp'
import Image from 'next/image'
import brand1 from 'public/brand1.webp'
import brand2 from 'public/brand2.webp'
import brand3 from 'public/brand3.webp'
import brand4 from 'public/brand4.webp'
import Link from 'next/link'


const Herosec = () => {
    return (
        <section className='flex flex-col md:flex-row gap-y-10 py-6'>
            {/* left div */}
            <div className='flex-1 mt-19 ml-12 lg:text-start '>
                <Badge className='py-1 px-4 rounded-lg bg-blue-200 text-blue-700 text-lg hover:bg-blue-200 '>Sale 80%</Badge>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl mt-12">
                    An Industrial Take on Streetwear
                </h1>
                <p className="text-lg text-muted-foreground mt-6 ">
                    Anyone can beat you but no one can beat <br />
                    your outfit as long as you wear Dine outfits.
                </p>

                <Link href={'/products'}>
                    <Button className='bg-black hover:bg-black   h-12  px-10 mt-12 '>
                        Start Shopping
                    </Button>
                </Link>
                <div className='grid grid-cols-2 gap-2  justify-center lg:grid-cols-4 mt-12 h-10 w-25 '>
                    <Image className='cursor-pointer hover:scale-105' src={brand1} alt='brand1' />
                    <Image className='cursor-pointer hover:scale-105' src={brand2} alt='brand2' />
                    <Image className='cursor-pointer hover:scale-105' src={brand3} alt='brand3' />
                    <Image className='cursor-pointer hover:scale-105' src={brand4} alt='brand4' />
                </div>
            </div>
            {/* Right div */}
            <div >
                <div  >

                    <Image className=' rounded-full bg-orange-200   ' src={hero_img} alt='hero' />

                </div>
            </div>
        </section>

    )
}
export default Herosec