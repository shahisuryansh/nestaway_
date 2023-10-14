// actions.js
export const setProperties = (properties) => {
    return {
      type: 'SET_PROPERTIES',
      properties,
    };
  };
  
  export const removeProperty = (propertyId) => {
    return {
      type: 'REMOVE_PROPERTY',
      propertyId,
    };
  };
  