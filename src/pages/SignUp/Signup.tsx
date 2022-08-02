import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Signup = (props: Props) => {
  return (
    <div className='bg-light pb-5 pt-3'>
    <h5 className='mb-3 text-danger '> Sign up</h5>
    <div className="col-12 d-flex w-50 mx-auto bg-white p-5">
        <div className="col-7 ">
            <div className='my-3 text-start'>
                <label htmlFor="">Email </label>
                <input type="text" className='form-control' />
            </div>
            <div className='my-3 text-start'>
                <label htmlFor="">Số điện thoại </label>
                <input type="text" className='form-control' />
            </div>
            <div className='my-3 text-start'>
                <label htmlFor="">Password </label>
                <input type="password" className='form-control' />
            </div>
            <button className='btn btn-danger my-3 w-100'> Đăng Kí</button>
            <h6 className='text-center my-3'> Hoặc đăng nhập bằng</h6>
            <div className="d-flex justify-content-center">
                <img src="https://res.cloudinary.com/vulong/image/upload/v1659435527/uploadimg/snvhqrbspcpiaejs49bg.png" alt=""  className='mx-2' width={'30'} height={'30'}/>
                <img src="https://res.cloudinary.com/vulong/image/upload/v1659435527/uploadimg/se287sfko0lb9tredpic.png" alt="" className='mx-2' width={'30'} height={'30'}/>
            </div>
        </div>
        <div className="col-5 align-items-center">
           <Link to='/'><img src="https://res.cloudinary.com/vulong/image/upload/v1657504890/uploadimg/kf2zfzrmg8uijd2dmzci.png" alt=""  className='w-50' style={{paddingTop:'90px'}}/></Link> 
        </div>
    </div>
</div>
  )
}

export default Signup