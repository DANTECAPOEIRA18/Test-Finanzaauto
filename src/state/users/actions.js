import constants from './constants';

const setLogged = (values) => (dispatch) => {

  dispatch({
    type: constants.LOGGED,
    payload: values,
  });

};

const setMyUser = (values) => (dispatch) => {

  dispatch({
    type: constants.MYUSER,
    payload: values,
  });

};

const setListUsers = (values) => (dispatch) => {

  dispatch({
    type: constants.LISTUSERS,
    payload: values,
  });

};

const setEditUser = (values) => (dispatch) => {

  dispatch({
    type: constants.EDITUSER,
    payload: values,
  });

};

const setUserToEdit = (values) => (dispatch) => {

  dispatch({
    type: constants.USERTOEDIT,
    payload: values,
  });

};

export default {
  setLogged, setMyUser, setListUsers, setEditUser, setUserToEdit,
};
