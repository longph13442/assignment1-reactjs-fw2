import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
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
  const decrease = () =>{
    if(Values <1){
      return 
    }
    setValues(Values-1) 
  }
  const increase = () =>{
    setValues(Values+1) 
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
  
  const ArrCart = JSON.parse(localStorage.getItem("Carts")??"[]");
  ArrCart.push(additem)
  
  //add to cart
  const handleSubmit = () => {
    alert(" add to cart success")
    const dataCart = localStorage.setItem("Carts", JSON.stringify(ArrCart) )
    navigato("/cart")
  }



  return (
    <form  onSubmit={handleSubmit}>
      <div className="row align-items-md-stretch p-5 mt-5 mx-auto">
        <div className="col-5 text-center">
          <img className='img-thumbnail ' src={`${Products?.img}`}  width="300px"/>
        </div>
        <div className="col-7 text-start px-5">
          <h6>{Products?.name}</h6>
          <h6 className="my-3 text-danger">{Products?.price}.000 VND</h6>
          <p>Mô tả ngắn: Trước khi mua bất kỳ chiếc điện thoại nào, người dùng cũng sẽ quan tâm đến thiết kế sản phẩm trước. Với phiên bản A73, Samsung đã tạo nên một chiếc smartphone với vẻ ngoài mang đến cảm giác sang trọng và tinh tế.</p>
          <div className="add__product border rounded text-center" style={{width: '200px'}}>
            <button className='border-0 bg-white  btn fs-3 align-items-center' type='button' onClick={()=>{decrease()}}>-</button>
            <span className='mx-3 my-3'>{Values}</span>
            {/* <input type="number" className='text-center rounded border-0 typeInput' value={Values} onChange={handleChange} min={0}/> */}
            <button className='border-0 bg-white  btn fs-4 align-items-center' type='button'  onClick={()=>{increase()}}>+</button>
          </div>
          <button className="btn btn-danger d-block my-3 w-25" type="submit" >Mua ngay</button>
        </div>

      </div>
    </form>

  )
}

export default ProductsDetail