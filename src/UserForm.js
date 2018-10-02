import React from 'react';
import { connect } from 'react-redux';

import { onNameChanged, onAgeChanged, onIsStudentChanged } from './store/action-types';

const UserForm = ({ name, age, isStudent, onNameChanged, onAgeChanged, onIsStudentChanged }) => (
  <form>
    <div className="form-group row">
      <label className="col-sm-2 col-form-label" htmlFor="name">User Name</label>
      <div className="col-sm-4">
        <input
          id="name"
          type="text"
          className="form-control"
          value={name}
          onChange={({ target }) => onNameChanged({name: target.value})}
        />
      </div>
    </div>
    <div className="form-group row">
      <label className="col-sm-2 col-form-label" htmlFor="age">User Name</label>
      <div className="col-sm-3">
        <input
          id="age"
          type="number"
          className="form-control"
          value={age}
          onChange={({ target }) => onAgeChanged({age: target.value})}
        />
      </div>
    </div>
    <div className="form-group row">
      <div className="col-sm-2 col-form-label">&nbsp;</div>
      <div className="col-sm-3">
        <div className="form-check">
          <input
            id="is-student"
            type="checkbox"
            className="form-check-input"
            checked={isStudent}
            onChange={({ target }) => onIsStudentChanged({isStudent: target.checked})}
          />
          <label htmlFor="is-student" className="form-check-label">Student</label>
        </div>
      </div>
    </div>
  </form>
);

export default connect(
  state => ({ ...state.user }), 
  { onNameChanged, onAgeChanged, onIsStudentChanged }
)(UserForm);