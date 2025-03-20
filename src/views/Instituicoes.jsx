// src/views/Instituicoes.jsx
import React, { useEffect } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { Formik } from 'formik';
import InstituicoesTable from '../components/InstituicoesTable';
import useInstituicao from '../context/PropriedadeContext';


const Instituicoes = () => {
  const {
    instituicoes,
    setInstituicoes,
    instituicoesInitialValues,
    instituicaoSchema,
    show,
    handleShow,
  } = useInstituicao();


  const carregarInstituicoes = async () => {
    try {
      const data = await fetchInstituicoes();
      setInstituicoes(data);
    } catch (error) {
      toast.error('Erro ao buscar instituições.');
    }
  };

  useEffect(() => {
    carregarInstituicoes();
  }, []);

  const handleSubmit = async (values, actions) => {
    try {
      const novaInstituicao = await cadastrarInstituicao(values);
      setInstituicoes([...instituicoes, novaInstituicao]);
      toast.success('Instituição cadastrada com sucesso!');
      handleShow();
    } catch (error) {
      toast.error('Erro ao cadastrar instituição.');
    }
    actions.setSubmitting(false);
  };

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h1>Instituições de Ensino</h1>
        </Col>
      </Row>

      {/* Barra de Busca e Botão de Adicionar */}
      <Row className="mb-4">
        <Col>
          <Form.Control type="text" placeholder="Buscar" />
        </Col>
        <Col>
          <Button onClick={handleShow}>+ Adicionar</Button>
        </Col>
      </Row>

      {/* Tabela de Instituições */}
      <Row>
        <Col>
          <InstituicoesTable data={instituicoes || []} />
        </Col>
      </Row>

      {/* Modal de Cadastro */}
      <Modal show={show} onHide={handleShow} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Cadastrar Instituição</Modal.Title>
        </Modal.Header>
        <Formik
          initialValues={instituicoesInitialValues}
          validationSchema={instituicaoSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, handleChange, handleSubmit, values }) => (
            <Form onSubmit={handleSubmit}>
              <Modal.Body>
                {/* Campos do formulário */}
                <Form.Group className="mb-3">
                  <Form.Label>Nome da Instituição</Form.Label>
                  <Form.Control
                    type="text"
                    name="nome_instituicao"
                    onChange={handleChange}
                    value={values.nome_instituicao}
                  />
                  {errors.nome_instituicao && touched.nome_instituicao ? (
                    <div className="text-danger">{errors.nome_instituicao}</div>
                  ) : null}
                </Form.Group>
                {/* Adicione os outros campos aqui */}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleShow}>Fechar</Button>
                <Button variant="primary" type="submit">Salvar</Button>
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Modal>
      <ToastContainer />
    </Container>
  );
};

export default Instituicoes;