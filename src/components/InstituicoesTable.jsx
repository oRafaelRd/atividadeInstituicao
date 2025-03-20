import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

const InstituicoesTable = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="text-center">
        Nenhuma instituição encontrada.
      </div>
    );
  }

  return (
    <MDBTable hover responsive>
      <MDBTableHead>
        <tr>
          <th>Nome da Instituição</th>
          <th>Quantidade de Matrículas</th>
          <th>UF</th>
          <th>Município</th>
          <th>Mesorregião</th>
          <th>Microrregião</th>
          <th>Opções</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {data.map((instituicao, index) => (
          <tr key={index}>
            <td>{instituicao.nome_instituicao}</td>
            <td>{instituicao.quantidade_matriculas || 'N/A'}</td>
            <td>{instituicao.uf}</td>
            <td>{instituicao.municipio}</td>
            <td>{instituicao.mesorregiao}</td>
            <td>{instituicao.microrregiao}</td>
            <td>
              <MDBBtn color="secondary" size="sm" className="me-2">
                <MDBIcon icon="pen" />
              </MDBBtn>
              <MDBBtn color="danger" size="sm">
                <MDBIcon icon="trash-alt" />
              </MDBBtn>
            </td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default InstituicoesTable