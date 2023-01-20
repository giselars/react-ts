import { lazy, LazyExoticComponent } from 'react';

import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';


type JSXComponent = () => JSX.Element;


interface Route{
    to: string;
    path: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const LazyLayout = lazy( () => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout') );


export const routes: Route[] = [
    {
        to:'/shopping',
        path: 'shopping',
        Component: ShoppingPage,
        name: 'Shopping'
    },
    {
        to:'/lazyload/*',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'LazyLayout - Dash'
    }

];