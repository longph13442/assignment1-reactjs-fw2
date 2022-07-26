import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { signup } from '../../api/Users'


type Props = {
}
type FormInput={
    id: any,
    email: string,
    phone: number,
    password: string
}

const Signup = (props: Props) => {
    const navigate = useNavigate();
    const {register, handleSubmit, formState : {errors}} = useForm<FormInput>()
    const onSubmit: SubmitHandler<FormInput> = async(user) =>{
        try {
          const {data} = await signup(user)
          console.log(data);
          if(data){
            toast.success(" Sign up Successfully !")
            navigate("/login")
          }
        } catch (error) {
          toast.error(" Sign up fail !")
        }
         
       }
    return (
        <div className='bg-light pb-5 pt-3'>
            <div className='bg-white w-50 mx-auto my-0'><h5 className='p-3 text-danger '> Sign up</h5></div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ToastContainer />
                <div className="col-12 d-flex w-50 mx-auto bg-white p-5">
                    <div className="col-7 ">
                        <div className='my-3 text-start'>
                            <label htmlFor="">Email </label>
                            <input type="text" className='form-control' {...register("email")} />
                        </div>
                        <div className='my-3 text-start'>
                            <label htmlFor="">Số điện thoại </label>
                            <input type="text" className='form-control' {...register("phone")}  />
                        </div>
                        <div className='my-3 text-start'>
                            <label htmlFor="">Password </label>
                            <input type="password" className='form-control' {...register("password")}  />
                        </div>
                        <button className='btn btn-danger my-3 w-100'> Đăng Kí</button>
                        <h6 className='text-center my-3'> Hoặc đăng nhập bằng</h6>
                        <div className="d-flex justify-content-center">
                            <img src="https://res.cloudinary.com/vulong/image/upload/v1659435527/uploadimg/snvhqrbspcpiaejs49bg.png" alt="" className='mx-2' width={'30'} height={'30'} />
                            <img src="https://res.cloudinary.com/vulong/image/upload/v1659435527/uploadimg/se287sfko0lb9tredpic.png" alt="" className='mx-2' width={'30'} height={'30'} />
                        </div>
                    </div>
                    <div className="col-5 align-items-center">
                        <Link to='/'><img src="https://res.cloudinary.com/vulong/image/upload/v1657504890/uploadimg/kf2zfzrmg8uijd2dmzci.png" alt="" className='w-50' style={{ paddingTop: '90px' }} /></Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signup