const cinemaListReducer = (
  prevState = {
    cinemaList: [],
  },
  action
) => {
  const newState = { ...prevState };
  switch (action.type) {
    case "change-cinemaList":
      newState.cinemaList = action.payload
      return newState;
    default:
      return prevState;
  }
};

export default cinemaListReducer;
