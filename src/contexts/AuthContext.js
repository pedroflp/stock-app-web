import { createContext, useState, useEffect } from "react";
import { createBrowserHistory } from 'history';

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Context = createContext();
const history = createBrowserHistory();

function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const callLoading = (value) => {
    setLoading(value)
  }

  async function handleLogin(data) {
    const {
      user: { id },
    } = data;
    setLoading(true)
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

  return  (
    <>
    {loading && 
      <>
        <Loader type={'TailSpin'} color={'var(--blue)'} className="loading-component" height={'10%'} width={'10%'} />
        <div style={{
          background: 'rgba(255,255,255,0.8)',
          width: '100vw',
          height: '100vh',
          position: 'absolute',
          zIndex: 10,
        }} />
      </>
    }
    <Context.Provider value={{ 
      callLoading, 
      authenticated,

      handleLogin, 
      handleLogout, 
      handleGoBack,
    }}>
      {children}
    </Context.Provider>

    </>
  )
}

export { Context, AuthProvider }