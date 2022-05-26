import { combineReducers } from "redux";

import
      { 
        addressReducer,
        cartCountReducer,
        categoryReducer, 
        displayReducer, 
        electronicReducer, 
        fashionReducer, 
        groceryReducer, 
        mobileReducer, 
        selectedelectronicReducer, 
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

  electronic:electronicReducer,
  electronicitem: selectedelectronicReducer,
  
  users: usersReducer,
  userdetail: selecteduserReducer,
  displayuser: displayReducer,

  total: totalReducer,
  categories: categoryReducer,
  address: addressReducer,
  cartcount: cartCountReducer
});

export default rootReducer;