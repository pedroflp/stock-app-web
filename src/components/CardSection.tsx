import { MdMoodBad } from 'react-icons/md'

import CardStock from './CardStock';

import '../styles/components/CardSection.css';

export default function CardSection() {
  return (
    <div className='table-list-container'>
      <div className='table-title-list'>
        <span>Nome do produto</span>
        <span>Quantidade</span>
        <span>Preço</span>
        <span>Última alteração</span>
      </div>

      <div className='table-card-list'>
        <div className='table-card-list-alert'>
          <MdMoodBad size={80} />
          <h1>Você não tem nenhum produto cadastrado!</h1>
        </div>

        {/* <CardStock /> */}
      </div>
    </div>
  );
}