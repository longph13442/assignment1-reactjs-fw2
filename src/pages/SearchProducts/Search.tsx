import { StarOutlined } from '@ant-design/icons'
import { Badge, Row } from 'antd'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getSearchProduct } from '../../api/products'
import { CurrencyConvert } from '../../utils/common'

type Props = {}

const SearchBar = (props: Props) => {
    const [search, setSearch] = useState<any>(null);
    const ref = useRef<any>(null);
    const debounce = (delay: any, fn: any) => {
        let timerId: any;
        return function (...args: any) {
            if (timerId) {
                clearTimeout(timerId);
            }
            timerId = setTimeout(() => {
                fn(...args);
                timerId = null;
            }, delay)
        }
    }
    const handleChange = async (event: any) => {
        if (!event.target.value) {
            setSearch(null)
        }
        else {
            await getSearchProduct(event.target.value).then((res: any) => {
                console.log(res.data);
                setSearch(res?.data)
            }).catch(err => console.log(err)
            )
        }
    }
    const navigate = useNavigate();
    const optimiseSearch = useCallback(debounce(500, handleChange), []);

    return (
        <div>
            <input type="text" ref={ref} onChange={optimiseSearch} placeholder='Tìm kiếm' className='form-control mb-5 w-75 mx-auto'/>
            <div className='result'>
                {(search?.length != 0) ? search?.map(((item: any, i: number) => <div  key={i} onClick={() => {ref.current.value = null; setSearch(null) }} className="result-item item  mx-3 my-3">

                    <div className="item-img w-50 mx-auto">
                        <a href={`/productsdetail/${item?.id}`}><img src={`${item.img}`} width="100%" /></a>
                        {/* <Link to={`/productsdetail/${item?.id}`}><img src={`${item.img}`} width="100%" /></Link> */}
                    </div>
                    <div className="item-content">
                        <div className="d-flex justify-content-center"><span className='my-2'>{item.name}</span>  </div>

                        <div className="d-flex justify-content-center"><p className='mx-2'> {CurrencyConvert(item.price)}</p> <p className='text-danger'> {CurrencyConvert(12000000)}</p></div>
                        <div className=' bg-light border rounded'><span>Thu cũ lên đời - Trợ giá 1 triệu</span></div>
                    </div>
                </div>)) : <span>Không tìm thấy kết quả</span>}
            </div>
        </div>

    )
}

export default SearchBar