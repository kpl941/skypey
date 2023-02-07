import { contacts } from "../static-data";
import { DELETE_USER_ID } from "../constants/action-types";

export default (state = contacts, action) => {
  switch(action.type){
    case DELETE_USER_ID:
      const contactId  = action.payload;
      const {[contactId]:deleted , ...newState} = state;
      return newState
    
    default:
      return state;
  }
  
};