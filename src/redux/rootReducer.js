import { combineReducers } from "redux";

import  shopReducer, 
        { 
          addressReducer,
          cartCountReducer,
          categoryReducer, 
          fashionReducer, 
          groceryReducer, 
          mobileReducer, 
          selectedfashionReducer, 
          selectedgroceryReducer, 
          selectedmobileReducer, 
          selecteduserReducer, 
          totalReducer, 
          usersReducer 
        } from "./Shopping/shopping-reducer";
        

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

  total: totalReducer,
  categories: categoryReducer,
  address: addressReducer,
  cartcount: cartCountReducer
});

export default rootReducer;