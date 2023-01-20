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
    increaseBy: ( value: number ) => void;
    product: Product;
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
