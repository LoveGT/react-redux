const showTabbarReducer = (
  prevState = {
    show: true,
  },
  action
) => {
  console.log(prevState, "prevState");
  console.log(action, "action");
  let newState = { ...prevState };
  switch (action.type) {
    case "hide-tabbar":
      newState.show = false;
      return newState;
    case "show-tabbar":
      newState.show = true;
      return newState;
    default:
      console.log('defalut')
      return prevState;
  }
};

export default showTabbarReducer;
