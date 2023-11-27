import Image from 'next/image'
import Link from 'next/link'
import logo from 'public/Logo.webp'
import { Facebook } from 'lucide-react'
import { Twitter } from 'lucide-react'
import { Linkedin } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <div className='px-10   mt-32  '>
            <div className='grid grid-cols-1 lg:grid-cols-4      ' >
                <div className=''>
                    <Image className='w-44 h-8 ' src={logo} alt='logo' />
                    <h2 className='text-muted-foreground mt-10 w-[280px] '>Small, artisan label that offers a thoughtfully curated collection of high
                        quality everyday essentials made.</h2>
                    <div className='flex mt-10 gap-8 mb-10 '>
                        <div className='bg-gray-300 rounded-md w-10 h-10 cursor-pointer hover:scale-110 duration-200'>
                            <Facebook className='w-8 h-10 ml-1 '/></div>
                        <div className='bg-gray-300 rounded-md w-10 h-10 cursor-pointer hover:scale-110 duration-200'>
                            <Twitter  className='w-8 h-10 ml-1  '></Twitter></div>    
                        <div className='bg-gray-300 rounded-md w-10 h-10 cursor-pointer hover:scale-110 duration-200'>
                        <Linkedin  className='w-8 h-10 ml-1 '></Linkedin></div>
                    </div>
                </div>
                <div className='text-muted-foreground text-lg'>
                    <h3 className='font-extrabold text-2xl text-black'>Company</h3>
                    <ul className=''>
                        <li className='mt-5'>
                            <Link href={'/'}>About</Link>
                        </li>
                        <li className='mt-4'>
                            <Link href={'/'}>Terms of Use</Link>
                        </li>
                        <li className='mt-4'>
                            <Link href={'/'}>Privacy Policy</Link>
                        </li>
                        <li className='mt-4'>
                            <Link href={'/'}>How it Works</Link>
                        </li>
                        <li className='mt-4 mb-8'>
                            <Link href={'/'}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div className='text-lg text-muted-foreground  '>
                    <h3 className='font-extrabold text-2xl text-black '>Support</h3>
                    <ul className=''>
                        <li className='mt-5'>
                            <Link href={'/'}>Support Carrer</Link>
                        </li>
                        <li className='mt-4'>
                            <Link href={'/'}>24h Service</Link>
                        </li>
                        <li className='mt-4 mb-8'>
                            <Link href={'/'}>Quick Chat</Link>
                        </li>

                    </ul>
                </div>
                <div className='text-lg text-muted-foreground  '>
                    <h3 className='font-extrabold text-2xl text-black'>Contact</h3>
                    <ul className=''>
                        <li className='mt-5'>
                            <Link href={'/'}>Whatsapp</Link>
                        </li>
                        <li className='mt-4'>
                            <Link href={'/'}>Support 24h</Link>
                        </li>

                    </ul>
                </div>
            </div>
            <div className='mt-16 '>
                <hr className=' border-black ' />
                <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  mt-6   '>
                    <div className='text-lg  text-muted-foreground  lg:w-[190px] mb-6 '>
                        <p>Copyright © 2023 Dine Market</p>
                    </div>
                    <div className=' lg:w-[200px] mb-6'>
                        <p className='text-lg  text-muted-foreground'>Design by:
                         <span className='text-lg text-black font-bold tracking-wide'>Abdul Design Studio</span></p>
                    </div>
                    <div className='lg:ml-40 lg:w-[200px] '>
                        <p className='text-lg  text-muted-foreground'>Code by:
                         <span className='text-lg text-black font-bold tracking-wide'>Abdul1302 on github</span></p>
                    </div>
                </div>
                <div>

                </div>


            </div>
        </div>
    )
}

export default Footer