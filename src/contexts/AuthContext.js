import { createContext, useState, useEffect } from "react";
import { createBrowserHistory } from 'history';

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

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

  while (loading) {
    return  (
      <>
  
      <Loader type={'TailSpin'} color={'var(--blue)'} className="loading-component" height={'10%'} width={'10%'} />
      <Context.Provider value={{ authenticated, handleLogin, handleLogout, userInformations, handleGoBack }}>
        {children}
      </Context.Provider>

      </>
    )
  }

  return (
    <Context.Provider value={{ authenticated, handleLogin, handleLogout, userInformations, handleGoBack }}>
      {children}
    </Context.Provider>
  )
}

export { Context, AuthProvider }