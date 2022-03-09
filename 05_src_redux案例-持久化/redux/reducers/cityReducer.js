const cityReducer = (prevState={
  city: '北京'
}, action) => {
  const newState = {...prevState}
  switch (action.type) {
    case "change-city":
     newState.city = action.payload;
     console.log(newState.city, 'newState.city')
     return newState
    default:
      return prevState;
  }
};

export default cityReducer;
