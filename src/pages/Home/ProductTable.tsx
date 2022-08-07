import React, { Component } from 'react'
import { TypeProducts } from '../../type/products'
import CatSection from './CatSection'

type Props = {
    productss: TypeProducts[]
}

const ProductTable = (props: Props) => {
    const categories = props.productss.reduce((item: any, current: any) => {
        return item.includes(current.category) ? item : item.concat([current.category]);
    }, []);
    return (
        <div>
            {
                categories.map((category: any) => {
                    const products = props.productss.filter(prod => prod.category === category);
                    return (
                        <CatSection
                            products={products}
                        />
                    )
                })
            }
        </div>
    )
}

export default ProductTable