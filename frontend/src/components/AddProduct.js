import {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import CONFIG from '../global/config';

const AddProduct = () => {
    const[title, setTitle] = useState('')
    const[price, setPrice] = useState('')
    const navigate = useNavigate()

    const saveProduct = async (e) => {
        e.preventDefault();
        confirmAlert({
            title: '',
            message: 'Apakah Anda Yakin Simpan Product ?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {axios.post(`${CONFIG.BASE_URL_PRODUCT}`,{
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

  return (
    <div className='mt-6'>
        <form onSubmit={saveProduct}>
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
                <button className='button is-primary'>Submit</button>
                <Link to="/" className='button is-primary ml-2'>
                    Cancel
                </Link>
            </div>
        </form>
    </div>
  )
}

export default AddProduct   