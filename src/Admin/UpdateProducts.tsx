import { PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Cascader, DatePicker, Form, Input, InputNumber, Select, Switch, TreeSelect, message, Upload, Col, Row, Image, UploadProps } from 'antd';
import { Option } from 'antd/lib/mentions';
import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { TypeProducts } from '../type/products';
import { SubmitHandler, useForm } from "react-hook-form"
import { read } from '../api/products';


type updateProductsProps = {
    onEdit: (products: TypeProducts) => void
}
const { useState } = React;;
type FormInput = {
    id: any,
    name: string,
    price: number,
    img: Array<string>,
    desc: string,

}

// upload
const getBase64 = (img: any, callback: any) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};
const beforeUpload = (file: any) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }

    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }

    return isJpgOrPng && isLt2M;
};
//

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const UpdateProducts = (props: updateProductsProps) => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInput>();

    // data 
    const { id } = useParams();
    useEffect(() => {
        const getProudcts = async () => {
            const { data } = await read(id);
            reset(data)
            setImageUrl(data?.img ?? [])
        }
        getProudcts();
    }, [id])

    const onSubmit: SubmitHandler<FormInput> = (data) => {
        data.img = imageUrl ?? [],
        props.onEdit(data);
        reset(data)
        navigate("/admin")

    }
    //upload file
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();

    const handleChange: UploadProps['onChange'] = (info: any) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }

        if (info.file.status === 'done') {
            setLoading(false)
            setImageUrl(info.file.response)

        }
    };

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );
    //
    //validate
    const validateMessages = {
        required: " '${label}' không được để trống !",
        types: {
            number: "'${label}' không phải là kiểu số !"
        }
    }
    //form
    const [componentDisabled, setComponentDisabled] = useState(true);
    const onFormLayoutChange = ({ }) => {
    };
    //
    return (
        <div className="row">
            <form onSubmit={handleSubmit(onSubmit)} className='d-flex'>
                <div className="col-4 h-50 border pt-3">
                    <Upload
                        action="https://angular-server.vercel.app/api/upload"
                        headers={{
                            authorization: 'authorization-text',
                            contentType: "multipart/form-data",
                            accept: "application/json"
                        }}
                        name="image"
                        maxCount={1}
                        onChange={handleChange}
                        beforeUpload={beforeUpload}

                    >
                        {imageUrl ? (
                            <img
                                src={imageUrl}
                                alt="avatar"
                                style={{
                                    width: '90%',
                                }}

                            />
                        ) : (
                            uploadButton
                        )}

                    </Upload >
                    <h6 className='my-5'>Thêm Ảnh</h6>

                </div>
                <div className="col-8 ps-5 ">

                    <h6 className='text-start'>Thông tin sản phẩm</h6>
                    <hr />
                    <div className="form-label-group d-flex ">
                        <label htmlFor="inputEmail " className='w-25'>Tên sản phẩm :</label>
                        <input type="text" className="form-control bg-light w-75 " {...register('name', { required: true, minLength: 3 })} />
                    </div>
                    {errors.name && <p className="text-danger text-center"> Định dạng trường không hợp lệ</p>}

                    <div className="form-label-group d-flex my-3 ">
                        <label htmlFor="inputEmail " className='w-25'>Giá :</label>
                        <input type="text" className="form-control bg-light w-auto " placeholder='Giá gốc' {...register('price', { required: true, min: 100 })} />
                        <input type="text" className="form-control bg-light w-auto ms-4" placeholder='Giá khuyến mãi' defaultValue={700} />
                    </div>
                    {errors.price && <p className="text-danger text-center"> Định dạng trường không hợp lệ</p>}

                    <div className="form-label-group d-flex my-3 ">
                        <label htmlFor="inputEmail " className='w-25'>Danh mục :</label>
                        <select placeholder="Điện thoại" className='w-75 form-control' >
                            <option value="Iphone">Iphone</option>
                            <option value="Samsung">Samsung</option>
                            <option value="other">other</option>
                        </select>
                    </div>
                    <div className="form-label-group d-flex my-3">
                        <label htmlFor="inputEmail " className='w-25'>Mô tả :</label>
                        <input type="text" className="form-control bg-light w-75 "  {...register('desc', { required: true, minLength: 3 })} />
                    </div>
                    {errors.desc && <p className="text-danger text-center"> Định dạng trường không hợp lệ</p>}

                    <div className="form-label-group d-flex my-3">
                        <label htmlFor="inputEmail " className='w-25'>Đặc điểm:</label>
                        <input type="text" className="form-control bg-light w-75 " placeholder='Sản phẩm tốt' defaultValue={"Sản phẩm tốt"} />
                    </div>
                    <button className="btn  btn-success btn-md my-4" type="submit" name="profile">Thêm sản phẩm</button>


                </div>
            </form>
        </div>



    )
}

export default UpdateProducts