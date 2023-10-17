import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import userActions from '../../state/users/actions';
import apiUser from '../../api/apiUser';

const useUsers = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const [imageUser, setImageUser] = useState('');
  const [nameUser, setNameUser] = useState('');
  const [listUsers, setListUsers] = useState([]);
  const [formData, setFormData] = useState({
    search: '',
  });
  const userInfo = useSelector(({ userReducer }) => userReducer.logged);
  const UsersList = useSelector(({ userReducer }) => userReducer.listUsers);
  const abortC = new AbortController();
  const { signal } = abortC;

  useEffect(() => {

    setImageUser(userInfo.imageUrl);
    setNameUser(userInfo.name);
    setListUsers(UsersList);

  }, []);

  useEffect(() => {

    console.log('form: ', formData);

  }, [formData]);
  const returnMenu = () => {

    history.push('/menu');

  };

  const handleChange = (e) => {

    const { name, value } = e.target;
    setFormData({
      [name]: value,
    });

  };

  const handleCreateUser = () => {

    dispatch(userActions.setEditUser(false));
    history.push('/create');

  };

  const handleDeleteUser = async (idUser) => {

    const response = await apiUser.deleteUser({ signal, idUser });
    console.log(idUser, response);

  };

  const handleEditUser = (user) => {

    dispatch(userActions.setEditUser(true));
    dispatch(userActions.setUserToEdit(user));
    history.push('/create');

  };

  return {
    imageUser,
    nameUser,
    listUsers,
    returnMenu,
    handleDeleteUser,
    handleCreateUser,
    handleEditUser,
    formData,
    handleChange,
  };

};

export default useUsers;
