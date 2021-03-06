import { Route, Switch } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import CreateProduct from './pages/CreateProduct';
import EditProduct from './pages/EditProduct';
import ProfilePage from './pages/ProfilePage';


export default function Routes() {
  return (
    <Switch>
      <Route path='/' component={LoginPage} exact />
      <Route path='/perfil/' component={ProfilePage} />
      <Route path='/estoque' component={MainPage} exact />
      <Route path='/criar-produto' component={CreateProduct} exact />
      <Route path='/editar/:id' component={EditProduct} exact />
    </Switch>
  );
}