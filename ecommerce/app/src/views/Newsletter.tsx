import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Newsletter = () => {
    return (
        <div className='mt-32' style={{display:'flex',justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <h2 className='text-3xl font-bold tracking-wider mt-16  '>Subscribe Our Newsletter</h2>
            <h1 className='absolute text-7xl font-extrabold tracking-wider  opacity-10 lg:text-8xl  '>Newsletter</h1>
            <p className='text-md tracking-wide mt-8  lg:text-xl'>Get the latest information and promo offers directly</p>
        
                <div className="flex w-full max-w-sm  space-x-2 mt-10 " style={{textAlign:'center'}}>
                    <Input type="email" placeholder="Email" />
                    <Button className='bg-black hover:bg-black' type="submit">Subscribe</Button>
                </div>
        
        </div>
    )
}

export default Newsletter