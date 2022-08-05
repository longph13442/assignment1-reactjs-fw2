import { CloseOutlined, MenuFoldOutlined } from '@ant-design/icons';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

type Props = {

}

const Cart = (props: Props) => {
  const navigato = useNavigate()
  const data = JSON.parse(localStorage.getItem("Carts") ?? "[]")
  var sum = 0;
  data.forEach((item: any) => {
    sum += item.value * (+item.price)
    if (item.value == 0) {
      const removeData = data.filter((i: any) => i.id != item.id)
      localStorage.setItem("Carts", JSON.stringify(removeData))
      navigato("/cart")
    }
  });
  const decrease = (id: any) => {
    const exist = data.find((item: any) => item.id == id);
    exist.value--;
    localStorage.setItem("Carts", JSON.stringify(data))
    navigato("/cart")
  }
  const increase = (id: any) => {
    const exist = data.find((item: any) => item.id == id);
    exist.value++;
    localStorage.setItem("Carts", JSON.stringify(data))
    navigato("/cart")
  }
  const OnRemove = (id: any) => {
    const check = window.confirm("Do you wanna remove ?")
    if (check) {
      const newData = data.filter((item: any) => item.id != id)
      localStorage.setItem("Carts", JSON.stringify(newData))
      navigato("/cart")
      toast.success("Remove product successfully !")
    }


  }

  return (
    <div className='w-50 mx-auto bg-light container '>
      <h6 className='text-danger text-center py-3'>Giỏ hàng</h6>
      {data.map((item: any, index: any) =>
        <div className="col-12 d-flex border-bottom py-3">
          <div className="col-4 ">
            <img src={`${item?.img}`} alt="" className='img-fluid' />
          </div>
          <div className="col-7 text-start py-2 ">
            <h6>{item.name}</h6>
            <div className="d-flex align-items-center">
              <p className='me-2 text-danger'>${item.price}</p>
              <del><p className='ms-2 text-secondary'>$50</p></del>
              <span className="badge bg-danger rounded-pill mb-2 ms-2" >Giảm 27%</span>
            </div>
            <div className="d-flex">
              <label htmlFor="" className='me-3'>Số lượng</label>
              <button className='border-0 bg-light fs-5' onClick={() => { increase(item.id) }}>+</button>
              <input type="number" value={item.value} className='border rounded text-center mx-3' style={{ width: '100px' }} />
              <button className='border-0 bg-light fs-3' onClick={() => { decrease(item.id) }}>-</button>
            </div>
            <span className='py-3'>- Chương trình khuyến mãi :Dịch vụ phòng chờ hạng thương gia tại sân bay,Ưu đãi Galaxy gift lên đến 1.700.000đ (VieON VIP HBO GO, Zing MP3, Phúc Long, Galaxy Play)</span>
            <span>{item.value * (+item.price)} </span>
          </div>
          <div className="col-1">
            <span><CloseOutlined onClick={() => OnRemove(item?.id)} /></span>
          </div>
        </div>
      )}


      <div className="d-flex justify-content-between m-3">
        <h6 >Tổng tạm tính</h6>
        <h6 className='text-danger'>${sum}</h6>
      </div>
      <button className='btn btn-danger w-100 '> Thanh toán</button>
      <button className='btn btn-outline-danger w-100 my-3'> Chọn thêm sản phẩm khác</button>


    </div>
  )
}

export default Cart