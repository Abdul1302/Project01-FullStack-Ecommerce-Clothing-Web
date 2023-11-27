import React from 'react'
import { Products } from '@/utils/mock'
import Productcard from '@/components/Productcard';
import Footer from '@/views/Footer';

const Allproducts = () => {

  
  return (
    <div>
      <div className='flex justify-between mt-4 py-10  flex-wrap px-20 gap-3'>
        {
          Products.map((product) => [
            <Productcard
              name={product.name}
              title={product.title}
              price={product.price}
              img={product.image}
              category={product.category}
              id= {product.id}
            />

          ])
        }
      </div>
      <Footer/>
    </div>

  )
}

export default Allproducts