import Moment from 'react-moment';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { HiPencil } from 'react-icons/hi';
import { FiSearch, FiTrash } from 'react-icons/fi';
import { GoPackage } from 'react-icons/go';

import api from '../services/api';

import '../styles/components/CardStock.css';
import '../styles/components/CardSection.css';
import '../styles/components/SearchBar.css';

interface ProfileParams {
  username: string,
}

interface Product {
  id: string,
  name: string,
  quantity: number,
  price: number,
  updated: Date,
}

interface User {
  id: string,
  email: string,
  products: Product[],
  username: string,
}

const history = createBrowserHistory();

export default function CardSection() {

  const params = useParams<ProfileParams>();
  const [userInformation, setUserInformation] = useState<User>();

  const [searchedProduct, setSearchedProduct] = useState('');
  
  if (params.username.length < 35) {
    history.push('/login')
    window.location.reload();
  }

  useEffect(() => {
    api.get(`/${params.username}/estoque`).then(response => {
      setUserInformation(response.data); 
    });
  }, [params.username]);
  
  
  async function handleEditProduct(id: string) {
    history.push(`/${params.username}/editar/${id}`);
    window.location.reload();
  }
    
  return (
    <div className='table-list-container'>

        <div className='search-bar-container'> 
          <label><FiSearch size={20} /> </label>
          <input
          onChange={e => setSearchedProduct(e.target.value)}
          type="text" placeholder='Procurar por nome do produto' />
        </div>  

        <div className='table-title-list'>
          <span>Nome do produto</span>
          <span>Quantidade</span>
          <span>Preço</span>
          <span>Última alteração</span>
        </div>

        <div className='table-card-list'>
        { userInformation?.products.length ?
          userInformation.products.filter(product => {
            if (product.name.toLowerCase().includes(searchedProduct.toLowerCase())) {
              return product;
            } else {
              return null;
            }
          }).map(product => {
            return (
              <div key={product.id} className='table-list-card'>
                <div className='table-list-info'>
                  <span>{product.name}</span>
                  <span>{product.quantity}</span>
                  <span>R${product.price}</span>
                  <span>
                    <Moment format="HH:mm - DD/MM/YYYY">
                      {product.updated}
                    </Moment>
                  </span>
                </div>
                <div className='table-list-card-buttons'>
                  <button 
                  onClick={() => handleEditProduct(product.id)}
                  className='edit-card' style={{ border: 0, background: 'none' }}>
                    <HiPencil size={23} />
                  </button>
                </div>
              </div>
            )
          }) : 
          <div className='table-card-list-alert'>
            <GoPackage size={100} />
            <h1>Você não tem nenhum produto cadastrado!</h1>
          </div>
        } 
        </div>
      </div>
  );
}


