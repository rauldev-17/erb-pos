import { useState } from 'react';
import ProductImage from '../ProductImage';
import AddToCartButton from './AddToCartButton';
import Counter from './Counter';
import ProductInfo from './ProductInfo';

export default function GridItem({name}) {
  const stock = 10;
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="h-56 bg-white rounded">
      <div className='h-1/2'>
        <ProductImage />
      </div>
      <ProductInfo name={name} cost={300}/>
      <div className='flex flex-nowrap'>
        <Counter quantity={quantity} stock={stock} setQuantity={setQuantity}/>
        <AddToCartButton product={name} quantity={quantity} />
      </div>
    </div>
  )
}
