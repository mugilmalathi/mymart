import { combineReducers } from "redux";

import
      { 
        addressReducer,
        cartCountReducer,
        categoryReducer, 
        displayReducer, 
        fashionReducer, 
        groceryReducer, 
        mobileReducer, 
        selectedfashionReducer, 
        selectedgroceryReducer, 
        selectedmobileReducer, 
        selecteduserReducer, 
        shopReducer, 
        totalReducer, 
        usersReducer 
      } from "./reducer";
        

const rootReducer = combineReducers({
  shop: shopReducer,

  groceries: groceryReducer,
  groceryitem: selectedgroceryReducer,

  mobiles: mobileReducer,
  mobileitem: selectedmobileReducer,

  fashion: fashionReducer,
  fashionitem: selectedfashionReducer,
  
  users: usersReducer,
  userdetail: selecteduserReducer,
  displayuser: displayReducer,

  total: totalReducer,
  categories: categoryReducer,
  address: addressReducer,
  cartcount: cartCountReducer
});

export default rootReducer;