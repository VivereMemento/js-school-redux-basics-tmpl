import { action } from './actions';
import { createReducer } from './reducers';

export const onNameChanged = action('USER::INPUT_NAME');
export const onAgeChanged = action('USER::INPUT_AGE');
export const onIsStudentChanged = action('USER::ISSTUDENT');

const initialState = {
	name: 'Vasya',
	age: 17,
	isStudent: true,
};

const user = createReducer(initialState, {
  [onNameChanged.type]: (state, { payload }) => {
    return {...state, ...payload};
  },
  [onAgeChanged.type]: (state, { payload }) => {
    return {...state, ...payload};
  },
  [onIsStudentChanged.type]: (state, { payload }) => {
    return {...state, ...payload};
  },
});

export default user;