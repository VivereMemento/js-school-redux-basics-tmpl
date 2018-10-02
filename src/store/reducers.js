const callReducer = (reducer, state, action) => (
  typeof reducer === 'function'
    ? reducer(state, action)
    : state
);

export const createReducer = (initialState, reducers) => (
  (state = initialState, action) => callReducer(
    reducers[action.type], state, action
  )
);
