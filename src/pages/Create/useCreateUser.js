/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment/moment';
import { useHistory } from 'react-router-dom';
import apiUser from '../../api/apiUser';

const useCreateData = () => {

  const history = useHistory();
  //   const dispatch = useDispatch();
  const [imageUser, setImageUser] = useState('');
  const [nameUser, setNameUser] = useState('');
  const userInfo = useSelector(({ userReducer }) => userReducer.logged);
  const isEdit = useSelector(({ userReducer }) => userReducer.editUser);
  const userToEdit = useSelector(({ userReducer }) => userReducer.userToEdit);
  const [formData, setFormData] = useState({
    primerNombre: '',
    segundoNombre: '',
    email: '',
  });

  const [title, setTitle] = useState('');
  const [titleButton, setTitleButton] = useState('');

  useEffect(() => {

    setImageUser(userInfo.imageUrl);
    setNameUser(userInfo.name);
    setTitle(isEdit ? 'Editar Usuario' : 'Formulario de Registro');
    setTitleButton(isEdit ? 'Editar Usuario' : 'Crear Usuario');
    if (isEdit) {

      setFormData({
        primerNombre: userToEdit.firstName,
        segundoNombre: userToEdit.lastName,
        email: '',
      });

    }

  }, []);

  const abortC = new AbortController();
  const { signal } = abortC;

  const handleChange = (e) => {

    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

  };

  const validarLetras = (valor) =>
    // Utilizamos una expresión regular para validar que solo contenga letras.
    /^[A-Za-z]+$/.test(valor);
  const validarCorreo = (correo) =>
    // Utilizamos una expresión regular para validar el formato de correo electrónico.
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(correo);

  const handleSubmit = async (e) => {

    e.preventDefault();

    // Validar el primer nombre
    if (!validarLetras(formData.primerNombre)) {

      alert('El Primer Nombre debe contener solo letras.');
      return;

    }

    // Validar el correo electrónico
    if (!validarCorreo(formData.email)) {

      alert('El Correo Electrónico no es válido.');
      return;

    }

    const body = {
      title: 'dr',
      firstName: formData.primerNombre,
      lastName: formData.segundoNombre,
      gender: 'other',
      email: formData.email,
      registerDate: moment().format('YYYY-MM-DD'),
      phone: '3126547878',
      picture: 'https://th.bing.com/th/id/R.b1d0538957c3812ae0f0db2320dd92e9?rik=070Ovpzs%2flKwSg&pid=ImgRaw&r=0',
    };

    let response;

    if (isEdit) {

      response = await apiUser.updateUser({ signal, idUser: userToEdit.id, body });

    } else {

      response = await apiUser.createUser({ signal, body });

    }
    // Aquí puedes agregar la lógica para enviar los datos a un servidor o realizar otras acciones con los datos.

    const getError = Object.keys(response);
    if (getError.includes('error')) {

      alert('Error creando usaurio');

    } else {

      alert('Usuario creado con exito');
      history.push('/users');

    }
    console.log(response);

  };

  const handleCancel = () => {

    history.push('/menu');

  };

  return {
    imageUser,
    nameUser,
    formData,
    handleChange,
    handleSubmit,
    validarCorreo,
    validarLetras,
    title,
    titleButton,
    handleCancel,
  };

};

export default useCreateData;
