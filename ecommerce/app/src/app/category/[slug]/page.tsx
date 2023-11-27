import { Products } from "@/utils/mock"
import Productcard from "@/components/Productcard"
import { StaticImageData } from "next/image"
import Footer from "@/views/Footer"


const getProductsByCategory = (category: string) => {
    return Products.filter((product) => product.category === category)
}

export default function Page({ params }: { params: { slug: string } }) {

    const result = getProductsByCategory(params.slug)
    return <div>
        <div className='flex justify-between mt-4 py-10  flex-wrap px-20 gap-3'>

            {
                result.length>0 ?result.map((product) => [
                    <Productcard
                        name={product.name}
                        title={product.title}
                        price={product.price}
                        img={product.image}
                        category={product.category}
                        id={product.id}
                    />

                ]) :<p>No Product Found.</p>

            }
            
        </div>
        <Footer />
    </div>
}