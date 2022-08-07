import { StarOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import { TypeProducts } from '../../type/products'

type Props = {
    product: TypeProducts
}

const Products = (props: Props) => {
    return (
        <div className="item col-2 mx-3 my-3" >
            <div className="item-img img-fluid">
                <Link to={`/productsdetail/${props.product.id}`}><img src={`${props.product.img}`} width="100%" /></Link>
            </div>
            <div className="item-content">
                <div className="d-flex justify-content-center"><span className='my-2'>{props.product.name}</span>  </div>

                <div className="d-flex justify-content-around"><p> {props.product.price}.đ</p> <p className='text-danger'> {props.product.price}.đ</p></div>
                <div className=' bg-light border rounded'><span>Thu cũ lên đời - Trợ giá 1 triệu</span></div>
                <div className="d-flex justify-content-between"><span><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /></span> <span className='mt-1 '>35 đánh giá</span></div>
            </div>
        </div>

    )
}

export default Products