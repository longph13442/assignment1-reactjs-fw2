import { ClockCircleOutlined, HomeOutlined, LaptopOutlined, PhoneOutlined, RightOutlined, SoundOutlined, TabletOutlined } from '@ant-design/icons'
import React from 'react'
import Banner from '../../Component/Banner'
import { TypeProducts } from '../../type/products'

type HomeProps = {
  products: TypeProducts[]
}

const Home = (props: HomeProps) => {
  return (
    <div >
      <div className="container col-12  d-flex">
        <div className="col-3">
          <div className="bar-menu me-5">
            <ul >
              <li className='d-flex justify-content-between align-items-center' ><PhoneOutlined style={{ fontSize: '19px' }} /><a href="#" >Điện thoại</a><RightOutlined /></li>
              <li className='d-flex justify-content-between align-items-center' ><TabletOutlined style={{ fontSize: '19px' }} /><a href="#" >Máy tính bảng</a><RightOutlined /></li>
              <li className='d-flex justify-content-between align-items-center' ><LaptopOutlined style={{ fontSize: '19px' }} /><a href="#" >Laptop</a><RightOutlined /></li>
              <li className='d-flex justify-content-between align-items-center' ><ClockCircleOutlined style={{ fontSize: '19px' }} /><a href="#" >Đồng hồ</a><RightOutlined /></li>
              <li className='d-flex justify-content-between align-items-center' ><SoundOutlined style={{ fontSize: '19px' }} /><a href="#" >Âm thanh</a><RightOutlined /></li>
              <li className='d-flex justify-content-between align-items-center border-bottom-0' ><HomeOutlined style={{ fontSize: '19px' }} /><a href="#" >Nhà thông minh</a><RightOutlined /></li>
            </ul>

          </div>
        </div>

        <div className="col-9">
          <Banner></Banner>
        </div>

      </div>

      <h4 className="mx-5 my-3 text-start"> ĐIỆN THOẠI NỔI BẬT</h4>

      <div className=" container flex d-flex row row-cols-2 justify-content-center my-5 mx-auto g-2">
        {props.products.map((item, index) => {
          return <div className="item col-2 mx-3 my-3" key={index}>
            <div className="item-img img-fluid">
              <img src={`${item.img}`} width="100%" />
            </div>
            <div className="item-content">
              <h5>{item.name}</h5>
              <div className="d-flex justify-content-around"><p> {item.price}.VND</p> <p className='text-danger'> {item.price}.VND</p></div>
              
            </div>
          </div>
        })}


      </div>


    </div>
  )
}

export default Home