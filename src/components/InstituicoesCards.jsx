import { Row } from 'react-bootstrap';
import PropriedadeCard from './InstituicaoCard';
import propriedades from '../datasets/propriedades';

const PropriedadesCard = () => {
  let propriedadesData = [...propriedades];
  return (
    <>
      <Row>
        {propriedadesData.map(({ imagem, nome, descricao }, indice) => {
          return (
            <PropriedadeCard
              key={indice}
              imagem={imagem}
              nome={nome}
              descricao={descricao}
            />
          );
        })}
      </Row>
    </>
  );
};

export default PropriedadesCard;
