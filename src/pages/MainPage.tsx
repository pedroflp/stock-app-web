import { useState } from "react";
import { Helmet } from "react-helmet";

import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';

import AlertPopup from "../components/AlertPopup";
import CardSection from "../components/CardSection";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";

import '../styles/pages/MainPage.css';


export default function MainPage() {
  const [toggleShow, setToggleShow] = useState(true);


  const toggleShowTopbar = () => {
    if (toggleShow) {
      setToggleShow(false);
    } else {
      setToggleShow(true);
    }
  }

  return (
    <div className='mainpage-container'>
      <Helmet title="StockAPP | Estoque" />
      <SideBar />
      
      <div className='mainpage-center-content'>

        { toggleShow &&
          (
            <>
            <TopBar />

            <AlertPopup 
              icon
              title="Você está livre para criar, alterar e deletar os produtos!"
              description="Em algumas horas todas alterações serão automaticamente desfeitas, voltando para os dados iniciais!"
              type="alert"
            />
            </>
          )
        }

          { toggleShow ? (
          <div className='toogleshow-button'>
            <button onClick={toggleShowTopbar}><RiArrowUpSFill size={30} /></button> 
            <hr/>
          </div>
          )
          : (
          <div style={{position: 'fixed', marginTop: '-28px'}} className='toogleshow-button'>
            <button onClick={toggleShowTopbar}><RiArrowDownSFill size={30} /></button>
          </div>
          )}

        <CardSection />
      </div>
    </div>
  );
}