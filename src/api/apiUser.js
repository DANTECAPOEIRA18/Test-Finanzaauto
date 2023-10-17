import apiHandler from './apiHandler';
import { environment } from '../utils/config';

const { tenantRequest } = apiHandler;

function getUsers({ signal }) {

  const { appId } = environment;
  const method = 'GET';
  return tenantRequest('/user', {
    signal,
    method,
    headers: {
      'app-id': appId,
    },
  });

}

function getUsersById({ signal, idUser }) {

  const { appId } = environment;
  const method = 'GET';
  return tenantRequest(`/user/${idUser}`, {
    signal,
    method,
    headers: {
      'app-id': appId,
    },
  });

}

function createUser({ signal, body }) {

  const { appId } = environment;
  const method = 'POST';
  return tenantRequest('/user/create', {
    signal,
    method,
    headers: {
      'Content-Type': 'application/json',
      'app-id': appId,
    },
    body,
  });

}

function updateUser({ signal, idUser, body }) {

  const { appId } = environment;
  const method = 'PUT';
  return tenantRequest(`/user/${idUser}`, {
    signal,
    method,
    headers: {
      'Content-Type': 'application/json',
      'app-id': appId,
    },
    body,
  });

}

function deleteUser({ signal, idUser }) {

  const { appId } = environment;
  const method = 'DELETE';
  return tenantRequest(`/user/${idUser}`, {
    signal,
    method,
    headers: {
      'app-id': appId,
    },
  });

}

export default {
  getUsers, getUsersById, createUser, updateUser, deleteUser,
};
