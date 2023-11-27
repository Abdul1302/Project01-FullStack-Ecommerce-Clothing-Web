import { Products } from "@/utils/mock"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Footer from "@/views/Footer"
import Image from "next/image"
import Quantity from "@/components/ui/Quantity"
import { ShoppingCart } from 'lucide-react'

const getProductsDetail = (id: number | string) => {
    return Products.filter((product) => product.id == id)
};

const sizes = ['XS', 'SM', 'MD', 'LG', 'XL']
export default function Page({ params }: { params: { id: string } }) {
    const result = getProductsDetail(params.id)


    return <div className="  mr-10 md:mr-1  ">
        <div className='flex flex-wrap mt-8 justify-center'>

            {
                result.map((product) => [
                    <div key={product.id} className=" ml-16 gap-6 mt-12">

                        <div className="flex flex-wrap  gap-8 ml-12">

                            {/*Left Side */}
                            <div className="mt-10 ">
                                <Image src={product.image} alt={product.name} className="md:w-[400px] md:h-[500px] h-[400px] w-[300px]  " />
                            </div>
                            {/*Right Side */}
                            <div className=" mt-20  ">
                                <div>
                                    <h1 className="text-3xl">{product.title}</h1>
                                    <h2 className="text-xl font-semibold text-gray-400">{product.name}</h2>
                                </div>
                                <div>
                                    <h3 className="text-md tracking-wider font-semibold mt-6">SELECT SIZE</h3>
                                </div>

                                {/* Size Button*/}
                                <div className="flex gap-x-4 mt-2">
                                    {
                                        sizes.map((item) => {
                                            return (
                                                <div className="h-10 w-10 bg-white hover:bg-black rounded-full cursor-pointer  text-gray-600 hover:text-white  hover:border hover:shadow-lg  duration-200 mt-2 flex justify-center items-center">
                                                    <span className="text-md font-semibold">{item}</span>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                {/*Quantity */}
                                <div className="flex gap-x-3 mt-8">
                                    <h3 className="text-xl tracking-wider font-semibold">Quantity:</h3>
                                    <Quantity />
                                </div>

                                {/* Cart Button */}

                                <div className="mt-10 flex gap-4">
                                    <Link href={'#'}>
                                        <Button className='bg-black hover:bg-black text-md font-semibold gap-3 '>
                                            <ShoppingCart/>
                                            Add to Cart
                                        </Button>
                                    </Link>

                                     {/* Price tag */}
                                    <p className="text-3xl tracking-wide font-semibold ">${product.price}</p>
                                </div>

                            </div>
                        </div>

                        {/* Overview Section */}

                        <div className="text-center mt-16 bg-slate-100 px-4 md:px-10 py-12">
                            <h1 className="text-4xl ">Product Information</h1>
                            <hr className="mt-8  w-full h-[2px] bg-black" />
                            <div className="">
                                <h1 className=" mt-32 md:mt-4  absolute md:text-[150px] text-[85px]  font-bold opacity-5 text-center tracking-wider  ">Overview</h1>
                                <div className="flex md:justify-between justify-evenly  text-gray-500 gap-8 mt-8">
                                    <h2 className="font-semibold text-lg ">PRODUCT DETAIL</h2>
                                    <div className=" w-[300px] md:w-[600px] h-[200px]   text-justify ">
                                        <p className="word-wrap">{product.productDetail}</p>
                                    </div>
                                </div>
                                <div className="flex md:justify-between justify-evenly text-gray-500 mt-[350px] md:mt-16">
                                    <h2 className="font-semibold text-lg ">PRODUCT CARE</h2>
                                    <div className="  w-[300px] md:w-[600px] h-[200px] text-justify  ">
                                        <div className="text-lg font-bold text-black word-wrap">{product.productCare.map(p => <li>{p}</li>)}</div>
                                    </div>
                                </div>
                            </div>
                            <hr className="  h-[2px]  w-full bg-black" />
                        </div>

                    </div>



                ])
            }




        </div>


        <div>
            <Footer />
        </div>
    </div >
}