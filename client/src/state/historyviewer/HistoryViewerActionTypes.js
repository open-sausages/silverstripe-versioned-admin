// Action type constants, of the form
// HISTORY_VIEWER.SET_CURRENT_VERSION === 'HISTORY_VIEWER.SET_CURRENT_VERSION'

export default [
  'SHOW_VERSION',
  'SHOW_LIST',
  'SET_CURRENT_PAGE',
  'ADD_MESSAGE',
  'CLEAR_MESSAGES',
].reduce((obj, item) => Object.assign(obj, { [item]: `HISTORY_VIEWER.${item}` }), {});
