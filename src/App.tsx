import { Router } from 'react-router-dom';
import Routes from './routes';
import { createBrowserHistory } from 'history';

import './styles/global.css';

import { AuthProvider } from './contexts/AuthContext';

function App() {

  const history = createBrowserHistory();
    
  return (
    <AuthProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </AuthProvider>
  );
}

export default App;
