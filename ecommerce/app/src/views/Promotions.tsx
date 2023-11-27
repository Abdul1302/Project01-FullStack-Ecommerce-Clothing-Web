import Image from "next/image"
import promo1 from 'public/promo1.webp'
import promo2 from 'public/promo2.webp'
import promo3 from 'public/promo3.webp'
import pro2 from 'public/pro_2.png'
import { Button } from "@/components/ui/button"


const Promotions = () => {
    return (
        <div>
            <div  >
                <p className="flex justify-center text-sm font-semibold text-blue-600 mt-20 ">PROMOTIONS</p>
                <h1 className="flex justify-center scroll-m-20 text-4xl font-bold tracking-tight mt-4  ">
                    Our Promotions Events
                </h1>
            </div>
            <div className="flex flex-col lg:flex-row justify-center lg:px-10 mt-10 ml-3 mr-3">
                <div className="grid grid-cols-1 gap-4 ">
                    <div className="flex bg-gray-300 hover:scale-95 duration-300 " >
                        <div className="mt-6 ml-8 lg:w-[150px]">
                            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight  ">GET UP  TO 60%</h2>

                            <p className="text-xl    ">
                                For The  Summer  Season
                            </p>
                        </div>
                        <div className="ml-10 lg:ml-10 md:ml-44  ">
                            <Image className="h-[246px] " src={promo1} alt="promo1" />
                        </div>
                    </div>
                    <div className="bg-black text-white mb-4 hover:scale-95 duration-300  " >
                        <div className="   mt-8 mb-8  "  style={{textAlign:"center"}}>
                            <h2 className="text-2xl md:text-2xl lg:text-4xl font-semibold tracking-wider   ml-2">
                                GET 30% Off
                            </h2>
                            <p className="text-sm  mt-2 ">
                                USE PROMO CODE
                            </p>
                            <div className="mt-1 ">
                                <Button className="bg-zinc-700 hover:bg-zinc-700 text-sm md:text-md tracking-wide  px-4 lg:px-16 ">
                                    DINEWEEKENDSALE
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:ml-4">
                    <div className="bg-orange-200 hover:scale-95 duration-300 ">
                        <div>
                            <p className="text-lg  tracking-wide mt-3 px-6  ">
                                Flex Sweatshirt
                            </p>
                            <div className="flex px-6">
                                <p className="text-lg   ">
                                    <del>$100.00</del>
                                </p>
                                <h2 className="text-lg font-bold">$75.00</h2>
                            </div>
                            <div className="flex flex-col items-center ">
                                <Image className=" h-[369px] lg:mt-4" src={promo2} alt="promo4" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-300 hover:scale-95 duration-300 ">
                        <div>
                            <p className="text-lg  tracking-wide mt-3 px-3 ">
                                Push Button Bomber
                            </p>
                            <div className="flex">
                                <p className="text-lg font-sans px-4 ">
                                    <del>$225.00</del>
                                </p>
                                <h2 className="text-lg font-bold">$190.00</h2>
                            </div>
                            <div className="flex flex-col items-center">
                                <Image className="  h-[369px] ml-16 lg:ml-3 lg:mt-4" src={promo3} alt="promo4" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    )
}
export default Promotions