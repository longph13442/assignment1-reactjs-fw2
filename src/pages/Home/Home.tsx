import React from 'react'
import Banner from '../../Component/Banner'

type Props = {}

const Home = (props: Props) => {
  return (
    <div >
      <Banner></Banner>
      <h5 className="mb-3 my-3"> Sản phẩm tháng 07</h5>

      <div className=" container flex d-flex col-12  justify-content-center w-50 my-5">
        <div className="item col-3 mx-2">
          <div className="item-img img-fluid">
            <img src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/11/637643195815267901_samsung-galaxy-z-fold3-xanh-2.jpg" width="100%" />
          </div>
          <div className="item-content">
            <h5>Products A</h5>
            <p> $.3000</p>
          </div>
        </div>
        <div className="item col-3 mx-2">
          <div className="item-img img-fluid">
            <img src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/10/19/637702682508615222_macbook-pro-16-2021-xam-1.jpg" width="100%" />
          </div>
          <div className="item-content">
            <h5>Products A</h5>
            <p> $.3000</p>
          </div>
        </div>
        <div className="item col-3 mx-2">
          <div className="item-img img-fluid">
            <img src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/4/28/637867602998291998_OP-MAGSAFE-IPHONE13PROMAX-UNIQLINO-HUE-SILICONE-4.jpg" width="100%" />
          </div>
          <div className="item-content">
            <h5>Products A</h5>
            <p> $.3000</p>
          </div>
        </div>
        <div className="item col-3 mx-2">
          <div className="item-img img-fluid">
            <img src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/23/637653489178046061_chuot-magic-mouse-2-2021-trang-1.jpg" width="100%" />
          </div>
          <div className="item-content">
            <h5>Products A</h5>
            <p> $.3000</p>
          </div>
        </div>
      </div>

      <div className=" container flex d-flex col-12  justify-content-center w-100">
        <div className="item col-3 mx-2">
          <div className="item-img img-fluid">
            <img src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/4/28/637867602998291998_OP-MAGSAFE-IPHONE13PROMAX-UNIQLINO-HUE-SILICONE-4.jpg" width="100%" />
          </div>
          <div className="item-content">
            <h5>Products A</h5>
            <p> $.3000</p>
          </div>
        </div>
        <div className="item col-3 mx-2">
          <div className="item-img img-fluid">
            <img src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/23/637653489178046061_chuot-magic-mouse-2-2021-trang-1.jpg" width="100%" />
          </div>
          <div className="item-content">
            <h5>Products A</h5>
            <p> $.3000</p>
          </div>
        </div>
        <div className="item col-3 mx-2">
          <div className="item-img img-fluid">
            <img src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/4/28/637867602998291998_OP-MAGSAFE-IPHONE13PROMAX-UNIQLINO-HUE-SILICONE-4.jpg" width="100%" />
          </div>
          <div className="item-content">
            <h5>Products A</h5>
            <p> $.3000</p>
          </div>
        </div>
        <div className="item col-3 mx-2">
          <div className="item-img img-fluid">
            <img src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/23/637653489178046061_chuot-magic-mouse-2-2021-trang-1.jpg" width="100%" />
          </div>
          <div className="item-content">
            <h5>Products A</h5>
            <p> $.3000</p>
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default Home