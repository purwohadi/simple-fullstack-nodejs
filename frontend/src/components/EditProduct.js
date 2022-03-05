import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import CONFIG from '../global/config';

const EditProduct = () => {
    const[title, setTitle]  = useState('')
    const[price, setPrice]  = useState('')
    const navigate          = useNavigate()
    const {id}              = useParams()

    const updateProduct = async (e) => {
        e.preventDefault();
        confirmAlert({
            title: '',
            message: 'Apakah Anda Yakin Ubah Product ?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {axios.patch(`${CONFIG.BASE_URL_PRODUCT}${id}`,{
                                    title: title,
                                    price: price
                                 })
                                 navigate("/")
                               }
              },
              {
                label: 'No',
                onClick: () => ''
              }
            ]
        });
    }

    useEffect(() => {
        getProductById()
    },)

    const getProductById = async () => {
        const response = await axios.get(`http://localhost:5000/product/${id}`)
        setTitle(response.data.title)
        setPrice(response.data.price)
    }

  return (
    <div className='mt-6'>
        <form onSubmit={updateProduct}>
            <div className='field'>
                <label className='label'>Nama Produk</label>
                <input 
                    className='input' 
                    type="text" 
                    placeholder='Input Nama Produk'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div className='field'>
                <label className='label'>Harga</label>
                <input 
                    className='input' 
                    type="number" 
                    placeholder='Input Harga'                     
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}/>
            </div>

            <div className='field'>
                <button className='button is-primary'>Update</button>
                <Link to="/" className='button is-primary ml-2'>
                    Cancel
                </Link>
            </div>
        </form>
    </div>
  )
}

export default EditProduct   