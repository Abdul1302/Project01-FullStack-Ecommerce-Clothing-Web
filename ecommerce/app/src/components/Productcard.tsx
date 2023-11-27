import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

const Productcard = (props: {
    name: string,
    title: string,
    price: number,
    img: StaticImageData,
    category:string,
    id: number;
}) => {
    return (
        <Link href={`/products/${props.id}`}>
            <div className=' hover:scale-95 duration-300 mb-12 ' >
                <Image src={props.img} alt='productscs' />
                <div className=''>
                    <h3 className='font-bold text-lg mt-3  '>{props.title}</h3>
                    <h3 className='font-bold text-md text-gray-500  '>{props.name}</h3>
                    <p className='font-bold text-lg '> ${props.price}</p>

                </div>
            </div>
        </Link>
    )
}
export default Productcard