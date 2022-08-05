import { AimOutlined, ShoppingOutlined, TagOutlined, WifiOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

type Props = { children: any }

const Header = (props: Props) => {
    const [Count,setCount] = useState()
    const CountItem = JSON.parse(localStorage.Carts).length
    // setCount(CountItem)
    
    
    return (
        <header className="p-2 mb-3 border-bottom  bg-danger">
            <div className="mx-3">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none col-1">
                        <img src="https://res.cloudinary.com/vulong/image/upload/v1657504890/uploadimg/kf2zfzrmg8uijd2dmzci.png" alt="" width={100} height={50} />
                    </a>

                    <form className="col-12 col-lg-6 mb-3 mb-lg-0 me-lg-3">
                        <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                    </form>
                    <div className="d-flex col-auto col-12 col-lg-auto me-lg-auto mx-auto ">
                        <div className="col mx-2 " ><a href="" className='text-light my-2'>Gọi đặt hàng</a><p className='text-light'>038976778</p></div>
                        <div className="col mx-2 " ><TagOutlined style={{fontSize:'22px',color:'white'}}/><a href="" className='ms-3 text-light text-end my-2'>Cửa hàng của bạn</a></div>
                        <div className="col mx-2 " ><Link to="/cart"><ShoppingOutlined style={{fontSize:'22px',color:'white'}}/></Link><span className='text-info'>{CountItem}</span><a href="" className='ms-3 text-light text-end my-2'>Tra cứu đơn hàng</a></div>
                    </div>
                    <div className="dropdown ">
                        <a href="/login" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
                        </a>
                        
                    </div>
                </div>
            </div>
        </header>
    )
}



export default Header