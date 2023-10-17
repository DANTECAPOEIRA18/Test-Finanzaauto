/* eslint-disable react/button-has-type */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
import { Card } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import { ImExit, ImUser } from 'react-icons/im';
import { MdDelete, MdEdit } from 'react-icons/md';
import './ListUsers.css';
import ButtonMenu from '../ButtonMenu';
// import { propTypes } from 'react-bootstrap/esm/Image';
const { Meta } = Card;

export default function ListUsers({
  listUsers, handleClickExit, handleClickCreate, handleDeleteUser, handleEditUser,
}) {

  return (

    <div className="general-container-list-user">
      <div className="menu6">
        {
            listUsers.map((user) => (
              <div key={user.id}>
                <Card
                  hoverable
                  cover={<img alt="example" src={user.picture} className="image-user" />}
                  className="vertical card-user"
                >
                  <div className="delete-user">
                    <button
                      className="round-button"
                      onClick={() => {

                        handleDeleteUser(user.id);

                      }}
                    >
                      <MdDelete className="ize-icon-delete" />
                    </button>
                    <button
                      className="round-button"
                      onClick={() => {

                        handleEditUser(user);

                      }}
                    >
                      <MdEdit className="ize-icon-delete" />
                    </button>
                  </div>
                  <Meta title={`${user.title}. ${user.firstName} ${user.lastName} `} description="Usuario existente" />
                </Card>
              </div>
            ))
        }

      </div>
      <div className="menu7">
        <div className="button-anchor">
          <ButtonMenu
            handleClick={handleClickExit}
            componentRender={<ImExit className="size-icon-list-user" />}
            Label="REGRESAR AL MENU"
          />
        </div>
        <div className="button-anchor">
          <ButtonMenu
            handleClick={handleClickCreate}
            componentRender={<ImUser className="size-icon-list-user" />}
            Label="CREAR NUEVO USUARIO"
          />
        </div>
      </div>
    </div>

  );

}

ListUsers.propTypes = {
  listUsers: PropTypes.array.isRequired,
  handleClickExit: PropTypes.func.isRequired,
  handleClickCreate: PropTypes.func.isRequired,
  handleDeleteUser: PropTypes.func.isRequired,
  handleEditUser: PropTypes.func.isRequired,
};
