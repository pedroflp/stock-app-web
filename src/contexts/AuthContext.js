import { createContext, useState, useEffect } from "react";
import { createBrowserHistory } from 'history';
import api from "../services/api";

const Context = createContext();

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const history = createBrowserHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    history.goBack();
    setLoading(false);
  }, []);

  async function handleLogin() {
    const { data: { token } } = await api.post('/login');

    localStorage.setItem('token', JSON.stringify(token));
    api.defaults.headers.Authorization = `Bearer ${token}`;
    
    console.log(token);

    setAuthenticated(true);
    history.push('/estoque');
  }

  function handleLogout() {
    setAuthenticated(false);

    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;

    history.push('/');
    window.location.reload();
  }

  if (loading) {
    return <h1>Carregando...</h1>
  }

  return (
    <Context.Provider value={{ authenticated, handleLogin, handleLogout }}>
      {children}
    </Context.Provider>
  )
}

export { Context, AuthProvider }