import Image from 'next/image'
import { Heart } from "lucide-react"
import Header from '@/components/ui/Header'
import Head from 'next/head'
import Herosec from '@/views/Herosec'
import Promotions from '@/views/Promotions'
import Slider from '@/components/Slider'
import Featured from '@/views/Featured'
import Newsletter from '@/views/Newsletter'
import Footer from '@/views/Footer'

export default function Home() {
  return (
    <div>
      <Herosec />
      <Promotions />
      <Slider />
      <Featured />
      <Newsletter/>
      <Footer/>
      
    </div>

  )
}
