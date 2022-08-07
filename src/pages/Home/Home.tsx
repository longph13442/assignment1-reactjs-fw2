import { ClockCircleOutlined, HomeOutlined, LaptopOutlined, PhoneOutlined, RightOutlined, ShoppingCartOutlined, SoundOutlined, StarOutlined, TabletOutlined } from '@ant-design/icons'
import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import Banner from '../../Component/Banner'
import ModalSearch from '../../Component/ModalSearch'
import { TypeProducts } from '../../type/products'
import { CurrencyConvert } from '../../utils/common'
import SearchBar from '../SearchProducts/Search'
import ProductTable from './ProductTable'

type HomeProps = {
  products: TypeProducts[]
}

const Home = (props: HomeProps) => {
  // return(
  //   <div>
  //     <ProductTable productss ={props.products}/>
  //   </div>
  // )
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

      <h6 className="mx-5 my-3 text-start"> ĐIỆN THOẠI NỔI BẬT</h6>

      <div className=" container flex d-flex row row-cols-2 justify-content-center my-5 mx-auto g-2">
        {props.products.map((item, index) => {
          return <div className="item col-2 mx-3 my-3" key={index}>
            <div className="item-img img-fluid">
              <Link to={`/productsdetail/${item?.id}`}><img src={`${item.img}`} width="100%" /></Link>
            </div>
            <div className="item-content">
              <div className="d-flex justify-content-center"><span className='my-2'>{item.name}</span>  </div>

              <div className="d-flex justify-content-around"><p> {CurrencyConvert(item.price)}</p> <p className='text-danger'> {CurrencyConvert(12000000)}</p></div>
              <div className=' bg-light border rounded'><span>Thu cũ lên đời - Trợ giá 1 triệu</span></div>
              <div className="d-flex justify-content-between"><span><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /></span> <span className='mt-1 '>35 đánh giá</span></div>
            </div>
          </div>
        })}


      </div>

      <h6 className='my-3 mx-5 text-start'>PHỤ KIỆN </h6>
      <div className=" container ">
        <div className="col-12 w-75 d-flex mx-auto row row-cols-2 g-3">
        <div className="col-2 py-3 d-flex flex-column mx-2 rounded " style={{backgroundColor:'#FFA3A3'}}>
          <span className='text-white my-2'>Nổi bật</span>
          <img src="https://res.cloudinary.com/vulong/image/upload/v1659544114/uploadimg/x2uj4i0tsze67qcxeajl.png" alt="" className='w-50 mx-auto' />
        </div>
        <div className="col-2 py-3 d-flex flex-column mx-2 rounded" style={{backgroundColor:'#FFB8B8'}}>
          <span className='text-white my-2'>Nổi bật</span>
          <img src="https://res.cloudinary.com/vulong/image/upload/v1659544115/uploadimg/eh4xcpb3trokrprn2hvy.png" alt="" className='w-50 mx-auto' />
        </div>
        <div className="col-2 py-3 d-flex flex-column mx-2 rounded" style={{backgroundColor:'#FF94EB'}}>
          <span className='text-white my-2'>Nổi bật</span>
          <img src="https://res.cloudinary.com/vulong/image/upload/v1659544115/uploadimg/ja3kf9gl3f35x0y8ys22.png" alt="" className='w-50 mx-auto' />
        </div>
        <div className="col-2 py-3 d-flex flex-column mx-2 rounded" style={{backgroundColor:'#E0B3FF'}}>
          <span className='text-white my-2'>Nổi bật</span>
          <img src="https://res.cloudinary.com/vulong/image/upload/v1659544115/uploadimg/azmbnevlgogqfuokuhdk.png" alt="" className='w-50 mx-auto' />
        </div>
        <div className="col-2 py-3 d-flex flex-column mx-2 rounded" style={{backgroundColor:'#C6D8FB'}}>
          <span className='text-white my-2'>Nổi bật</span>
          <img src="https://res.cloudinary.com/vulong/image/upload/v1659544115/uploadimg/qtrjl4jl6qwgc71yalmz.png" alt="" className='w-50 mx-auto' />
        </div>
        <div className="col-2 py-3 d-flex flex-column mx-2 rounded" style={{backgroundColor:'#F5D63D'}}>
          <span className='text-white my-2'>Nổi bật</span>
          <img src="https://res.cloudinary.com/vulong/image/upload/v1659544115/uploadimg/dxhzrwodyra6aq6icjpc.png" alt="" className='w-50 mx-auto' />
        </div>

        <div className="col-2 py-3 d-flex flex-column mx-2 rounded " style={{backgroundColor:'#FFA3A3'}}>
          <span className='text-white my-2'>Nổi bật</span>
          <img src="https://res.cloudinary.com/vulong/image/upload/v1659544114/uploadimg/x2uj4i0tsze67qcxeajl.png" alt="" className='w-50 mx-auto' />
        </div>
        <div className="col-2 py-3 d-flex flex-column mx-2 rounded" style={{backgroundColor:'#FFB8B8'}}>
          <span className='text-white my-2'>Nổi bật</span>
          <img src="https://res.cloudinary.com/vulong/image/upload/v1659544115/uploadimg/eh4xcpb3trokrprn2hvy.png" alt="" className='w-50 mx-auto' />
        </div>
        <div className="col-2 py-3 d-flex flex-column mx-2 rounded" style={{backgroundColor:'#FF94EB'}}>
          <span className='text-white my-2'>Nổi bật</span>
          <img src="https://res.cloudinary.com/vulong/image/upload/v1659544115/uploadimg/ja3kf9gl3f35x0y8ys22.png" alt="" className='w-50 mx-auto' />
        </div>
        <div className="col-2 py-3 d-flex flex-column mx-2 rounded" style={{backgroundColor:'#E0B3FF'}}>
          <span className='text-white my-2'>Nổi bật</span>
          <img src="https://res.cloudinary.com/vulong/image/upload/v1659544115/uploadimg/azmbnevlgogqfuokuhdk.png" alt="" className='w-50 mx-auto' />
        </div>

      </div>
      </div>

      <h6 className='my-3 mx-5 text-start'>LINH KIỆN MÁY TÍNH </h6>
      <div className=" container ">
        <div className="col-12 w-75 d-flex mx-auto row row-cols-2 g-3">
        <div className="col-2 py-3 d-flex flex-column mx-2 rounded" style={{backgroundColor:'#6EE7B7'}}>
          <span className='text-white my-2'>Nổi bật</span>
          <img src="https://res.cloudinary.com/vulong/image/upload/v1659544115/uploadimg/qtrjl4jl6qwgc71yalmz.png" alt="" className='w-50 mx-auto' />
        </div>
        <div className="col-2 py-3 d-flex flex-column mx-2 rounded" style={{backgroundColor:'#F5D63D'}}>
          <span className='text-white my-2'>Nổi bật</span>
          <img src="https://res.cloudinary.com/vulong/image/upload/v1659544115/uploadimg/dxhzrwodyra6aq6icjpc.png" alt="" className='w-50 mx-auto' />
        </div>
        <div className="col-2 py-3 d-flex flex-column mx-2 rounded" style={{backgroundColor:'#93C5FD'}}>
          <span className='text-white my-2'>Nổi bật</span>
          <img src="https://res.cloudinary.com/vulong/image/upload/v1659544115/uploadimg/ja3kf9gl3f35x0y8ys22.png" alt="" className='w-50 mx-auto' />
        </div>
        <div className="col-2 py-3 d-flex flex-column mx-2 rounded" style={{backgroundColor:'#FDBA74'}}>
          <span className='text-white my-2'>Nổi bật</span>
          <img src="https://res.cloudinary.com/vulong/image/upload/v1659544115/uploadimg/azmbnevlgogqfuokuhdk.png" alt="" className='w-50 mx-auto' />
        </div>
        <div className="col-2 py-3 d-flex flex-column mx-2 rounded" style={{backgroundColor:'#C6D8FB'}}>
          <span className='text-white my-2'>Nổi bật</span>
          <img src="https://res.cloudinary.com/vulong/image/upload/v1659544115/uploadimg/qtrjl4jl6qwgc71yalmz.png" alt="" className='w-50 mx-auto' />
        </div>

      </div>
      </div>



    </div>
  )
}

export default Home