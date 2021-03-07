import { useContext } from "react"
import { Context } from "../contexts/AuthContext"

import { AiOutlineArrowLeft } from "react-icons/ai"

export default function ButtonGoBack() {
  const { handleGoBack } = useContext(Context);

  return <AiOutlineArrowLeft style={{ cursor: 'pointer' }} onClick={handleGoBack} size={20} />
}