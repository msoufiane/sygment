export default (state = { menuOpen: true }, action: any) => {
  switch (action.type) {
    case 'APP_MENU_OPEN':
      return Object.assign({}, state, { menuOpen: true });
    case 'APP_MENU_CLOSE':
      return Object.assign({}, state, { menuOpen: false });
    default:
      return state;
  }
};
