import { createContext, CSSProperties, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';

import { onChangeArgs, Product, ProductContextProps, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export interface Props {
    product: Product;
    // children?: React.ReactElement | React.ReactElement[];
    children: ( args: ProductCardHandlers ) => JSX.Element,
    className?: string;
    style?: React.CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues
}


export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props ) => {

    const { counter, increaseBy, maxCount, isMaxCountReacher, reset } 
        = useProduct({ onChange, product, value, initialValues });

    return (
        <Provider value={{
            counter,
            increaseBy,
            maxCount,
            product
        }}>
            <div 
                className={ `${ styles.productCard } ${ className }` }
                style={ style }
            >
                { 
                    children({
                        count: counter,
                        isMaxCountReacher,
                        product, 
                        maxCount: initialValues?.maxCount,

                        increaseBy,
                        reset,
                    })
                }
            </div>
        </Provider>
    )
}