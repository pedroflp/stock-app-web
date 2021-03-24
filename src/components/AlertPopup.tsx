import { FiAlertOctagon, FiAlertTriangle } from "react-icons/fi";
import { AiOutlineInfo } from "react-icons/ai";

import '../styles/components/AlertPopup.css';

interface PopupProps {
  title: string,
  description: string,
  type: string,
}

export default function AlertPopup(props: PopupProps) {
  return (
    <>

    { props.type === "alert" ? (
      <div 
        style={{
          background: '#FFF889',
          border: '1px solid #ffda89'
        }} 
        className='alert-popup'
      >
        <FiAlertTriangle size={40} />
        <p>
        <strong>{props.title}</strong> <br/>
        {props.description}</p>
      </div>
      ) : 
      props.type === "highalert" ? (
        <div
          style={{
            background: '#ff8989',
            border: '1px solid #ff5c5c'
          }} 
          className='alert-popup'
        >
          <FiAlertOctagon size={30} />
          <p>
          <strong>{props.title}</strong> <br/>
          {props.description}</p>
        </div>
      ) : (
        <div 
          style={{
            background: '#ffffff',
            border: '1px solid #e4e4e4'
          }} 
          className='alert-popup'
        >
          <AiOutlineInfo size={30} />
          <p>
          <strong>{props.title}</strong> <br/>
          {props.description}</p>
        </div>
      )
    }

    </>
  )
}