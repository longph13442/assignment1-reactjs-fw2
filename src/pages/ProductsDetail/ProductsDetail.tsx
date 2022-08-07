import { ShoppingCartOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { read } from '../../api/products'
import { TypeCart, TypeProducts } from '../../type/products'
import Cart from '../Cart/Cart'

type Props = {}

const ProductsDetail = (props: Props) => {
  const [Products, setProducts] = useState<TypeProducts>()
  const [Values, setValues] = useState(0)
  const [datacart, setdataCart] = useState([])
  const navigato = useNavigate()
  // change value
  const handleChange = (event: any) => {
    setValues(event.target.value);
  }
  const decrease = () => {
    if (Values < 1) {
      return
    }
    setValues(Values - 1)
  }
  const increase = () => {
    setValues(Values + 1)
  }
  //
  // get data
  const { id } = useParams()
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await read(id);
      setProducts(data)
    }
    getProducts();
  }, [id])
  //
  // get item
  const additem = {
    ...Products,
    value: new Number(Values)
  }

  const ArrCart = JSON.parse(localStorage.getItem("Carts") ?? "[]");


  //add to cart
  const handleSubmit = () => {
    const exist = ArrCart.find((item: any) => item.id == additem.id);
    console.log(exist);
    if (exist) {
      exist.value+= Values
    }else{
      ArrCart.push(additem)
    }
    
    toast.success("Add to cart successfully !")
    const dataCart = localStorage.setItem("Carts", JSON.stringify(ArrCart))
    navigato("/cart")
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row align-items-md-stretch p-5 mt-3 mx-auto">
          <div className="col-5 text-center">
            <img className='img-thumbnail ' src={`${Products?.img}`} width="300px" />
          </div>

          <div className="col-7 text-start px-5">
            <h6 className='my-3'>{Products?.name}</h6>
            <h6 className="my-3 text-danger">{ Products?.price}</h6>
            <p className='my-3'>Mô tả ngắn: Trước khi mua bất kỳ chiếc điện thoại nào, người dùng cũng sẽ quan tâm đến thiết kế sản phẩm trước. Với phiên bản A73, Samsung đã tạo nên một chiếc smartphone với vẻ ngoài mang đến cảm giác sang trọng và tinh tế.</p>
            <div className=" my-4 border rounded text-center" style={{ width: '200px' }}>
              <button className='border-0 bg-white  btn fs-3 align-items-center' type='button' onClick={() => { decrease() }}>-</button>
              {/* <span className='mx-3 my-3'>{Values}</span> */}
              <input type="number" className='text-center rounded border-0 typeInput' value={Values} onChange={handleChange} min={1} />
              <button className='border-0 bg-white  btn fs-4 align-items-center' type='button' onClick={() => { increase() }}>+</button>
            </div>
            <div className="d-flex">
              <button className="btn btn-danger d-block my-3 w-25" type="submit" >Mua ngay</button> <span className=' p-4'><ShoppingCartOutlined className='text-danger  border rounded p-1' style={{ fontSize: '25px' }} /></span> <span className='my-4'>Thêm vào giỏi hàng</span>
            </div>
          </div>


        </div>
      </form>
      <div className="col-12 d-flex container">
        <div className="col-5 d-flex">
          <div className=""><img src="https://res.cloudinary.com/vulong/image/upload/v1659275071/uploadimg/gri3yesh1jxff0bjd8fh.png" alt="" className='w-75 bg-light p-3 rounded rounded' /></div>
          <div ><img src="https://res.cloudinary.com/vulong/image/upload/v1659277353/uploadimg/h5e1ihzkarlnnbh5gkb2.png" alt="" className='w-75 bg-light p-3 rounded' /></div>
          <div ><img src="https://res.cloudinary.com/vulong/image/upload/v1659277359/uploadimg/eihjtbyeby0sg0dmntj4.png" alt="" className='w-75 bg-light p-3 rounded' /></div>
          <div><img src="https://res.cloudinary.com/vulong/image/upload/v1659275071/uploadimg/gri3yesh1jxff0bjd8fh.png" alt="" className='w-75 bg-light p-3 rounded' /></div>
          <div ><img src="https://res.cloudinary.com/vulong/image/upload/v1659277353/uploadimg/h5e1ihzkarlnnbh5gkb2.png" alt="" className='w-75 bg-light p-3 rounded' /></div>
        </div>
        <div className="col-7">

        </div>
      </div>
      <h6 className='text-start mx-5 mt-5'>SẢN PHẨM CÙNG LOẠI</h6>
      <div className=" container flex d-flex row row-cols-2 justify-content-center my-5 mx-auto g-2">
        <div className="item col-2 mx-3 my-3">
          <div className="item-img img-fluid">
            <img src="https://res.cloudinary.com/vulong/image/upload/v1659620116/uploadimg/ismc6xcu6yvjjfhpy4pt.png" width="100%" />
          </div>
          <div className="item-content">
            <div className="d-flex justify-content-center"><span className='my-2'></span>Tai nghe Bluetooth Samsung Galaxy Buds Live  </div>
            <div className="d-flex justify-content-around"><p> 1.490.000 ₫.đ</p> <p className='text-danger'>4.490.000 ₫ .đ</p></div>
          </div>
        </div>
        <div className="item col-2 mx-3 my-3">
          <div className="item-img img-fluid">
            <img src="https://res.cloudinary.com/vulong/image/upload/v1659620116/uploadimg/dgtib192ospc8cpkvkhf.png" width="100%" />
          </div>
          <div className="item-content">
            <div className="d-flex justify-content-center"><span className='my-2'></span>Tai nghe Bluetooth Samsung Galaxy Buds Live  </div>
            <div className="d-flex justify-content-around"><p> 1.490.000 ₫.đ</p> <p className='text-danger'>4.490.000 ₫ .đ</p></div>
          </div>
        </div>
        <div className="item col-2 mx-3 my-3">
          <div className="item-img img-fluid">
            <img src="https://res.cloudinary.com/vulong/image/upload/v1659620116/uploadimg/knxs2vk1dvsm2lbvmj80.png" width="100%" />
          </div>
          <div className="item-content">
            <div className="d-flex justify-content-center"><span className='my-2'></span>Tai nghe Bluetooth Samsung Galaxy Buds Live  </div>
            <div className="d-flex justify-content-around"><p> 1.490.000 ₫.đ</p> <p className='text-danger'>4.490.000 ₫ .đ</p></div>
          </div>
        </div>
        <div className="item col-2 mx-3 my-3">
          <div className="item-img img-fluid">
            <img src="https://res.cloudinary.com/vulong/image/upload/v1659620116/uploadimg/gclhvliza6b9mrobc9eu.png" width="100%" />
          </div>
          <div className="item-content">
            <div className="d-flex justify-content-center"><span className='my-2'></span>Tai nghe Bluetooth Samsung Galaxy Buds Live  </div>
            <div className="d-flex justify-content-around"><p> 1.490.000 ₫.đ</p> <p className='text-danger'>4.490.000 ₫ .đ</p></div>
          </div>
        </div>
        <div className="item col-2 mx-3 my-3">
          <div className="item-img img-fluid">
            <img src="https://res.cloudinary.com/vulong/image/upload/v1659620117/uploadimg/li06s284svs2kkdgbsbl.png" width="100%" />
          </div>
          <div className="item-content">
            <div className="d-flex justify-content-center"><span className='my-2'></span>Tai nghe Bluetooth Samsung Galaxy Buds Live  </div>
            <div className="d-flex justify-content-around"><p> 1.490.000 ₫.đ</p> <p className='text-danger'>4.490.000 ₫ .đ</p></div>
          </div>
        </div>

      </div>
      <h6 className='text-danger mx-5 mt-5'>ĐẶC ĐIỂM NỔI BẬT</h6>
      <div className=' container d-flex flex-column text-start bg-light p-3'>
        <span className='my-2'>Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với cảm biến chính lên đến 108 MP</span>
        <span className='my-2'>Thưởng thức không gian giải trí cực đỉnh - Màn hình lớn 6.7 inch, độ phân giải Full HD+, 120Hz mượt mà</span>
        <span className='my-2'>Cấu hình Galaxy A73 5G được nâng cấp mạnh với chip Snapdragon 778G, RAM lên đến 8 GB</span>
        <span className='my-2'>Chiến game thoải mái không lo gián đoạn - Viên pin lớn 5000 mAh, hỗ trợ sạc nhanh 25 W</span>
      </div>
      <div className='container my-3 text-start'>
        <span className='my-3'>Năm 2022 hứa hẹn sẽ là một năm rất đáng trông đợi đối với những ai là fan của thương hiệu điện thoại Samsung. Mới đây, hãng sẽ tiếp tục cho ra mắt nhiều smartphone với sự cải tiến trong thiết kế và cấu hình, trong đó phải kể đến chiếc Samsung Galaxy A73 với nhiều cải tiến so với thế hệ trước. Vậy sản phẩm có gì nổi bật, giá bao nhiêu và liệu có nên mua không? Tìm hiểu ngay nhé!</span>
        <h6 className='my-3 text-center'>Đánh giá Samsung A73 - Hiệu năng mượt mà, chụp ảnh chuyên nghiệp</h6>
        <span className='my-3 text-start'>Điện thoại cao cấp nhất dòng Galaxy A series sở hữu nhiều nâng cấp đáng giá so với thế hệ trước, từ ngoại hình cho đến hiệu năng, đặc biệt là hệ thống camera. Sau đây là những đánh giá chi tiết về chiếc</span>
        <span>Trước khi mua bất kỳ chiếc điện thoại nào, người dùng cũng sẽ quan tâm đến thiết kế sản phẩm trước. Với phiên bản A73, Samsung đã tạo nên một chiếc smartphone với vẻ ngoài mang đến cảm giác sang trọng và tinh tế.</span>
        <span>Kích thước và trọng lượng của chiếc điện thoại rất vừa phải và dĩ nhiên sẽ không chiếm quá nhiều diện tích trong túi xách và có thể di chuyển dễ dàng.</span>

      </div>
      <button className='btn btn-outline-danger my-3 mx-auto'> Xem thêm</button>
    </div>

  )
}

export default ProductsDetail