import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

export const ValidationSchemaExample = () => {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Nome muito curto!')
      .max(50, 'Nome muito longo!')
      .required('Campo obrigatório'),
    lastName: Yup.string()
      .min(2, 'Sobrenome muito curto!')
      .max(50, 'Sobrenome muito longo!')
      .required('Campo obrigatório'),
    email: Yup.string()
      .email('E-mail inválido')
      .required('Campo obrigatório'),
  });

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  // Função de submissão do formulário
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setUser(values);
    console.log('Usuário cadastrado:', values);
    setSubmitting(false);
    resetForm(); 
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '' }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* Campo: First Name */}
            <div>
              <label htmlFor="firstName">Nome</label>
              <Field
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Digite seu nome"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="error-message"
              />
            </div>

            {/* Campo: Last Name */}
            <div>
              <label htmlFor="lastName">Sobrenome</label>
              <Field
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Digite seu sobrenome"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="error-message"
              />
            </div>

            {/* Campo: Email */}
            <div>
              <label htmlFor="email">E-mail</label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Digite seu e-mail"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>

            {/* Botão de Submissão */}
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Cadastrar'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};