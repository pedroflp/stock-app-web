import { createContext, useState, useEffect } from "react";
import { createBrowserHistory } from 'history';

import ReactLoading from 'react-loading';

const Context = createContext();
const history = createBrowserHistory();

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userInformations, setUserInformations] = useState({});
  
  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, 1000);

  }, []);

  async function handleLogin(data) {
    setUserInformations(data);
    const {
      user: { id },
    } = data;

    history.push(`/${id}/estoque`);
    window.location.reload();
    setAuthenticated(true);
  }

  function handleLogout() {
    setAuthenticated(false);

    localStorage.clear();

    history.push('/login');
    window.location.reload();
  }

  const handleGoBack = () => {
    history.goBack();
  }

  if (loading) {
    return  <ReactLoading type={'cylon'} color={'var(--blue)'} className="loading-component" height={'10%'} width={'10%'} />
  }

  return (
    <Context.Provider value={{ authenticated, handleLogin, handleLogout, userInformations, handleGoBack }}>
      {children}
    </Context.Provider>
  )
}

export { Context, AuthProvider }