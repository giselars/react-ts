import { ProdButtonsProps as ProdButtonsProps} from "../components/ProductButtons";
import { ProdImgProps as ProductImageProps} from "../components/ProductImage";
import { ProdTitleProps as ProductTitleProps} from "../components/ProductTitle";
import { Props as ProductCardProps} from "../components/ProductCard";

export interface Product {
	id: string;
	title: string;
	img?: string;
}

export interface ProductContextProps {
    counter: number;
    product: Product;
    maxCount?: number;
    increaseBy: ( value: number ) => void;
}

export interface ProductButtonsProps {
    counter: number;
    increaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps) : JSX.Element,
    Title: ( Props: ProductTitleProps ) => JSX.Element,
    Image: ( Props: ProductImageProps ) => JSX.Element,
    Buttons: ( Props: ProdButtonsProps) => JSX.Element
}

export interface onChangeArgs {
    product: Product;
    count: number;
}

export interface ProductInCart extends Product{
	count:number;
}

export interface InitialValues {
    count?: number;
    maxCount?: number;
}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReacher:boolean;
    maxCount?: number;
    product: Product;

    increaseBy: ( value:number ) => void;
    reset: () => void;
}