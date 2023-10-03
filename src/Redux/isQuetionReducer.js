
// src/someReducer.js
const initialState = {
    isQuetionComponent: false,
  };
  
  const isQuetionReducer = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type) {
      
      case 'TOGGLE':
        return {
          ...state,
          isQuetionComponent: action.payload, // Toggle the value
        };
      default:
        return state;
    }
  };
  
  export default isQuetionReducer;
  
  