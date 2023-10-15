// reducers.js
const initialState = {
    properties: [],
    removedProperties: []
  };
  
  export const propertiesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PROPERTIES':
        return {
          ...state,
          properties: action.properties,
        };
      case 'REMOVE_PROPERTY':
        const removedProperty = state.properties.find(
          (property) => property.id === action.propertyId
        );
        if (removedProperty) {
          return {
            properties: state.properties.filter(
              (property) => property.id !== action.propertyId
            ),
            removedProperties: [...state.removedProperties, removedProperty],
          };
        }
        return state; // Property not found in activeProperties
      default:
        return state;
        
    }
  };
  