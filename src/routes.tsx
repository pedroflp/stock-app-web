import { BrowserRouter, Route } from 'react-router-dom';


import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import CreateProduct from './pages/CreateProduct';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path='/' component={LoginPage} exact />
      <Route path='/estoque' component={MainPage} exact />
      <Route path='/cadastrar' component={CreateProduct} exact />
    </BrowserRouter>
  );
}