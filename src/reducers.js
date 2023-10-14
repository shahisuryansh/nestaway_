// reducers.js
const initialState = {
    properties: [],
  };
  
  export const propertiesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PROPERTIES':
        return {
          ...state,
          properties: action.properties,
        };
      case 'REMOVE_PROPERTY':
        return {
          ...state,
          properties: state.properties.filter(property => property.id !== action.propertyId),
        };
      default:
        return state;
    }
  };
  