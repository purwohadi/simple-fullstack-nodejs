import {useState, useEffect} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import CONFIG from '../global/config';

const ProductList = () => {
    const [products, setProduct] =  useState([])

    useEffect(() => {
        getProducts()
    },[])

    const getProducts = async () => {
        const response = await axios.get(`${CONFIG.BASE_URL_PRODUCT}`)
        setProduct(response.data)
    }

    const deleteProduct = async(id) => {
        confirmAlert({
            title: '',
            message: 'Apakah Yakin Hapus ?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => { 
                                 axios.delete(`${CONFIG.BASE_URL_PRODUCT}${id}`) 
                                 getProducts()
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
        <div className='mt-4'>
            <Link to="/addProduct" className='button is-primary'>
            Add Product
            </Link>
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama Produk</th>
                        <th>Harga</th>
                        <th>Aksi</th>
                    </tr>
                </thead>         
                <tbody>
                    {products.map((product, index) => (
                        <tr key={ product.id }>
                            <td>{index + 1}</td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>
                                <Link to={`/editProduct/${product.id}`} className='button is-small is-info'>Edit</Link>
                                <button onClick={() => deleteProduct(product.id) } className='button is-small is-danger ml-2'>Delete</button>
                            </td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
            
        </div>
    )
}

export default ProductList