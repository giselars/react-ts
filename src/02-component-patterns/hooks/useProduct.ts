import { useState, useEffect, useRef } from 'react';
import { Product, onChangeArgs } from '../interfaces/interfaces';

interface useProductsArgs {
  product: Product;
  onChange?: ( args: onChangeArgs ) => void;
  value?: number;
}

export const useProduct = ( { onChange, product, value = 0 }: useProductsArgs ) => {

    const [counter, setCounter] = useState(value);

    const isControlled = useRef( !!onChange );

    const increaseBy = ( value:number) => {

        if( isControlled.current ) {
          return onChange!({ count: value, product });
        }

        const newValue = Math.max( counter + value, 0 )

        setCounter( prev => Math.max( prev + value, 0 ) );

        onChange && onChange({ count: newValue, product });
    }

    useEffect(() => {
      setCounter( value );
    }, [value])
    

  return {
        //properties
        counter,
        //methods
        increaseBy,
  }
}
