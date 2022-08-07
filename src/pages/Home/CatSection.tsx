import { StarOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { TypeProducts } from '../../type/products';

type Props = {
    products: TypeProducts[]
}

const CatSection = (props: Props) => {
    const firstProduct = props.products[0];

    return (
        <div>
            <section key={firstProduct.id} className={"product " + (firstProduct.category === "Phone" ? "first" :
                firstProduct.category === "laptop" ? "second" :
                firstProduct.category === "headphone" ? "third" :
                firstProduct.category === "tablet" ? "fourth" : "")}>
                <div className="main-title">
                    <h6>{firstProduct.category}</h6>
                </div>
                <div className="container product-container">
                    <div className="row">
                        <h6 className="mx-5 my-3 text-start"> ĐIỆN THOẠI NỔI BẬT</h6>
                        <div className=" container flex d-flex row row-cols-2 justify-content-center my-5 mx-auto g-2">
                            {props.products.map((item, index) => {
                                return <div className="item col-2 mx-3 my-3" key={index}>
                                    <div className="item-img img-fluid">
                                        <Link to={`/productsdetail/${item?.id}`}><img src={`${item.img}`} width="100%" /></Link>
                                    </div>
                                    <div className="item-content">
                                        <div className="d-flex justify-content-center"><span className='my-2'>{item.name}</span>  </div>

                                        <div className="d-flex justify-content-around"><p> {item.price}.đ</p> <p className='text-danger'> {item.price}.đ</p></div>
                                        <div className=' bg-light border rounded'><span>Thu cũ lên đời - Trợ giá 1 triệu</span></div>
                                        <div className="d-flex justify-content-between"><span><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /></span> <span className='mt-1 '>35 đánh giá</span></div>
                                    </div>
                                </div>
                            })}


                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default CatSection