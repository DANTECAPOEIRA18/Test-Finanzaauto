import constants from './constants';

const initState = {
  logged: {
    state: false,
    name: '',
    imageUrl: '',
    email: '',
  },
  myUser: {},
  listUsers: [],
  editUser: false,
  userToEdit: {},
};

function userReducer(state = initState, { type, payload }) {

  switch (type) {

    case constants.LOGGED:
      return {
        ...state,
        logged: payload,
      };

    case constants.MYUSER:
      return {
        ...state,
        myUser: payload,
      };

    case constants.LISTUSERS:
      return {
        ...state,
        listUsers: payload,
      };

    case constants.EDITUSER:
      return {
        ...state,
        editUser: payload,
      };

    case constants.USERTOEDIT:
      return {
        ...state,
        userToEdit: payload,
      };
    default:
      return state;

  }

}

export default userReducer;
