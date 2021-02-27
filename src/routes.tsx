import { BrowserRouter, Route } from 'react-router-dom';

import MainPage from './pages/MainPage'

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path='/' component={MainPage} exact />
    </BrowserRouter>
  );
}