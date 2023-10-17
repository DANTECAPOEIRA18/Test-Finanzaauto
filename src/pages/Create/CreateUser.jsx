/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import logo from '../../assets/img/chat.png';
// import useUsers from './useUsers';
// import ListUsers from '../../components/ListUsers';
import withAuth from '../../utils/withAuth';
import useCreateData from './useCreateUser';

function Formulario() {

  const {
    formData, handleChange, handleSubmit, nameUser, imageUser, title, titleButton, handleCancel,
  } = useCreateData();

  return (
    <div className="general-container-user">
      <div className="div1-user div1-container-user">
        <div className="logo-user">
          <img src={logo} alt="logo" className="img-logo-user" />
        </div>
        <div className="title-user">
          USUARIOS
        </div>
        <div className="user-user">
          <div className="Logo-space-user">
            <img src={imageUser} alt="" className="imgRedonda-user" />
          </div>
          <div className="name-space-user">
            {nameUser}
          </div>
        </div>
      </div>
      <div className="div2-user">
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh',
        }}
        >
          <h1 style={{
            fontSize: 50, fontWeight: 'bolder', color: 'white', padding: 20,
          }}
          >
            {title}
          </h1>
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', width: '50vw',
            }}
          >
            <div style={{ gridColumn: '1' }}>
              <label htmlFor="primerNombre" style={{ fontSize: 30, fontWeight: 'bolder', color: 'white' }}>Nombres:</label>
            </div>
            <div style={{ gridColumn: '2' }}>
              <input
                type="text"
                id="primerNombre"
                name="primerNombre"
                value={formData.primerNombre}
                onChange={handleChange}
                required
                style={{
                  borderRadius: 10, width: '40rem', height: '3rem', fontSize: 20,
                }}
              />
            </div>

            <div style={{ gridColumn: '1' }}>
              <label htmlFor="segundoNombre" style={{ fontSize: 30, fontWeight: 'bolder', color: 'white' }}>Apellidos:</label>
            </div>
            <div style={{ gridColumn: '2' }}>
              <input
                type="text"
                id="segundoNombre"
                name="segundoNombre"
                value={formData.segundoNombre}
                onChange={handleChange}
                required
                style={{
                  borderRadius: 10, width: '40rem', height: '3rem', fontSize: 20,
                }}
              />
            </div>

            <div style={{ gridColumn: '1' }}>
              <label htmlFor="email" style={{ fontSize: 30, fontWeight: 'bolder', color: 'white' }}>Correo Electrónico:</label>
            </div>
            <div style={{ gridColumn: '2' }}>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  borderRadius: 10, width: '40rem', height: '3rem', fontSize: 20,
                }}
              />
            </div>

            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: 30 }}>
              <button
                type="submit"
                style={{
                  padding: 30,
                  borderRadius: 10,
                  width: '15rem',
                  backgroundColor: '#1890ff',
                  marginRight: 20,
                }}

              >
                <label style={{
                  fontSize: 20, fontWeight: 'bolder', color: 'white',
                }}
                >
                  {titleButton}
                </label>

              </button>
              <button
                onClick={handleCancel}
                style={{
                  padding: 30,
                  borderRadius: 10,
                  width: '15rem',
                  backgroundColor: 'red',
                }}

              >
                <label style={{ fontSize: 20, fontWeight: 'bolder', color: 'white' }}>Cancelar</label>

              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

}

export default withAuth(Formulario);
