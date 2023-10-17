import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import userActions from '../../state/users/actions';
import apiUser from '../../api/apiUser';

const useMenu = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const [imageUser, setImageUser] = useState('');
  const [nameUser, setNameUser] = useState('');
  const userInfo = useSelector(({ userReducer }) => userReducer.logged);
  const abortC = new AbortController();
  const { signal } = abortC;

  useEffect(() => {

    setImageUser(userInfo.imageUrl);
    setNameUser(userInfo.name);

  }, []);

  const usersView = async () => {

    const users = await apiUser.getUsers({ signal });
    dispatch(userActions.setListUsers(users.data));
    history.push('/users');

  };

  const exitApp = () => {

    const userLogged = {
      state: false,
      name: '',
      imageUrl: '',
      email: '',
    };
    dispatch(userActions.setLogged(userLogged));
    history.push('/');

  };

  return {
    imageUser,
    nameUser,
    usersView,
    exitApp,
  };

};

export default useMenu;
