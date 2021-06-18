import { FiAlertOctagon, FiAlertTriangle } from "react-icons/fi";
import { AiOutlineInfo } from "react-icons/ai";

import '../styles/components/AlertPopup.css';

interface PopupProps {
  title: string,
  description: string,
  type: string,
  modal?: boolean,
  icon?: boolean,
  width?: number,
}

export default function AlertPopup(props: PopupProps) {
  return (
    <div 
      style={{
        position: props.modal ? 'absolute' : 'unset',
        left: 20,
        bottom: 10,
        width: props.width,
        background: props.type === 'alert' ? '#FFF889' : props.type === 'highalert' ? '#ff8989' : '#f0f0f0',
        border: `1px solid ${props.type === 'alert' ? '#FFF889' : props.type === 'highalert' ? '#c54444' : '#cacaca'}`
      }} 
      className='alert-popup'
    >
     {props.icon && <FiAlertTriangle size={30} />}
      <p>
      <strong>{props.title}</strong> <br/>
      {props.description}</p>
    </div>
  )
}