import {SIGN_IN} from './types';

const INITIAL_STATE = {
  error: '',
  isAuth: false,
  user: {},
};

export default function (state = INITIAL_STATE, action: any) {
  switch (action.type) {
    default:
      return {...state};
  }
}
