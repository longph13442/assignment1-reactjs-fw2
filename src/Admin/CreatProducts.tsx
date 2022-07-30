import { PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Cascader, DatePicker, Form, Input, InputNumber, Select, Switch, TreeSelect, message, Upload, Col, Row, Image } from 'antd';
import { Option } from 'antd/lib/mentions';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { TypeProducts } from '../type/products';
import { SubmitHandler, useForm } from "react-hook-form"
import axios from 'axios';
import { stringify } from 'rc-field-form/es/useWatch';
import { RcFile, UploadChangeParam, UploadFile, UploadProps } from 'antd/lib/upload'




type CreatProductsProps = {
    onAdd: (products: TypeProducts) => void
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
const CreatProducts = (props: CreatProductsProps) => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<FormInput>();
    const onSubmit: SubmitHandler<FormInput> = (data) => {
        data.img=imageUrl ??[],
        props.onAdd(data);
        navigate("/admin")
    }
    //upload file
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    
    const Url = JSON.stringify({ imageUrl, toJSON() { return this.imageUrl } });
    console.log(Url);
   
    
    
    

    const handleChange: UploadProps['onChange'] = (info: any) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }

        if (info.file.status === 'done') {
            setLoading(false)
            // Get this url from response in real world.
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
            <form onSubmit={handleSubmit(onSubmit)} className='d-flex' id={"img-preview"}>
                <div className="col-4 h-50 border pt-5">

                    {/* <input type="file" /><Image  {...register("img")} width={"15%"} id={"img-preview"} /> */}

                    {/* <label className="custom-file-upload">
                        <input type="file" defaultValue={imageUrl} {...register("img")} id={"img"}/>
                        <PlusOutlined style={{ fontSize: '25px' }} className="border border-info p-2 border-2 text-info" />
                    </label> */}

                    <Upload  />

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
                                    width: '100%',
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
                        <input type="text" className="form-control bg-light w-auto ms-4" placeholder='Giá khuyến mãi' />
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
                        <input type="text" className="form-control bg-light w-75 " />
                    </div>
                    <button className="btn  btn-success btn-md my-4" type="submit" name="profile">Thêm sản phẩm</button>


                </div>
                {/* <div className="col-8 ps-5 ">
                <Form className='w-100 ' validateMessages={validateMessages}
                    labelCol={{
                        span: 5,
                    }}
                    wrapperCol={{
                        span: 19,
                    }}
                    layout="horizontal"
                    initialValues={{

                    }}
                    onValuesChange={onFormLayoutChange}

                >
                    <h6 className='text-start '>Thông tin sản phẩm</h6>
                    <hr />
                    <Form.Item name="name" label="Tên sản phẩm " className='text-start ' rules={[{required: true}]}>

                        <Input />
                    </Form.Item>
                    <Row className='ms-5'>
                        <Col span={12} >
                            <Form.Item label="Giá " name="price" className='text-start ' style={{ maxWidth: '1000px' }} rules={[
                                {required:true,type:"number",min:100,max:200},
                                ]}>
                                <Input className='mx-2' placeholder='Giá gốc' />
                            </Form.Item>
                        </Col>
                        <Col span={12} >
                            <Form.Item label="" name="price2" className='text-start ms-5' style={{ maxWidth: '1000px' }} >
                                <Input placeholder='Giá khuyến mãi' />
                            </Form.Item>
                        </Col>
                    </Row>



                    <Form.Item
                        name="Danh mục"
                        label="Danh mục"
                        rules={[
                            {
                                required: true,
                                message: 'Không được để trống !',
                            },
                        ]}
                    >
                        <Select placeholder="Điện thoại">
                            <Option value="Iphone">Iphone</Option>
                            <Option value="Samsung">Samsung</Option>
                            <Option value="other">other</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="Đặc điểm " name="character"
                        rules={[
                            {
                                required: true,
                                message: 'Không được để trống !',
                            },
                        ]}>
                        <Input size='large' className='py-3' />
                    </Form.Item>

                    <Form.Item label="Mô tả " name="desc"
                        rules={[
                            {
                                required: true,
                                message: 'Không được để trống !',
                            },
                        ]}>
                        <Input size='large' className='py-3' />
                    </Form.Item>

                    <Form.Item label="" className='mx-auto'>
                        <button className='btn btn-info'> Thêm mới</button>
                    </Form.Item>
                </Form >
            </div> */}

            </form>
        </div>



    )
}

export default CreatProducts