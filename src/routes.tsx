import { Route, Switch } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import CreateProduct from './pages/CreateProduct';
import EditProduct from './pages/EditProduct';

export default function Routes() {
  return (
    <Switch>
      <Route path='/' component={LoginPage} exact />
      <Route path='/login' component={LoginPage} exact />
      <Route path='/:username/estoque' component={MainPage} exact />
      <Route path='/:username/criar-produto' component={CreateProduct} exact />
      <Route path='/:username/editar/:id' component={EditProduct} exact />
    </Switch>
  );
}