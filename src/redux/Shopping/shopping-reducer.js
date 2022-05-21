import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  grocery: [],
  mobile: [],
  fashion: [],
  cart: [],
  users: [],
  category: [],
  address: [],
  total: 0,
  cartcount: 0,
  filteredItems: []
};


export const groceryReducer = (state = INITIAL_STATE, { type, payload})=>{

  switch(type){

      case actionTypes.SET_GROCERY:
          return { ...state, grocery: payload};

      default:
          return state;
  }
}

export const selectedgroceryReducer = (state = {}, { type, payload})=>{

  switch(type){

      case actionTypes.SELECTED_GROCERY:
          return { ...state, ...payload};

          // case ActionTypes.REMOVED_SELECTED_GROCERY:
          //     return {};

      default:
          return state;
  }
}

export const mobileReducer = (state = INITIAL_STATE, { type, payload})=>{

  switch(type){

      case actionTypes.SET_MOBILE:
          return { ...state, mobile: payload};

      default:
          return state;
  }
}

export const selectedmobileReducer = (state = {}, { type, payload})=>{

  switch(type){

      case actionTypes.SELECTED_MOBILE:
          return { ...state, ...payload};

          // case ActionTypes.REMOVED_SELECTED_GROCERY:
          //     return {};

      default:
          return state;
  }
}

export const fashionReducer = (state = INITIAL_STATE, { type, payload})=>{

  switch(type){

      case actionTypes.SET_FASHION:
          return { ...state, fashion: payload};

      default:
          return state;
  }
}

export const selectedfashionReducer = (state = {}, { type, payload})=>{

  switch(type){

      case actionTypes.SELECTED_FASHION:
          return { ...state, ...payload};

          // case ActionTypes.REMOVED_SELECTED_GROCERY:
          //     return {};

      default:
          return state;
  }
}

export const addressReducer = (state = INITIAL_STATE, { type, payload})=>{

  switch(type){

      case actionTypes.SET_ADDRESS:
          return { ...state, address: payload};

      default:
          return state;
  }
}

export const categoryReducer = (state = INITIAL_STATE, { type, payload})=>{

  switch(type){

      case actionTypes.SET_CATEGORY:
          return { ...state, category: payload};

      default:
          return state;
  }
}

export const usersReducer = (state = INITIAL_STATE, { type, payload})=>{

  switch(type){

      case actionTypes.SET_USERS:
          return { ...state, users: payload};

      default:
          return state;
  }
}

export const selecteduserReducer = (state = {}, { type, payload})=>{

  switch(type){

      case actionTypes.SELECTED_USERS:
          return { ...state, ...payload};

      default:
          return state;
  }
}

export const shopReducer = (state = INITIAL_STATE, { type, payload})=>{

  switch(type){

      case actionTypes.ADD_TO_CART:
        return {...state, cart: state.cart.concat(payload)}

      case actionTypes.REMOVE_CART:
        let updateCart = state.cart.filter((e)=>{
          if(e.id === payload){
            return false;
          }else{
            return true;
          }
        })
        return {...state, cart:updateCart}

        default:
          return state;
  }
}

export const totalReducer = (state = INITIAL_STATE, { type, payload})=>{

  switch(type){

      case actionTypes.SET_TOTAL:
          return { ...state, total: state.total+payload};

      case actionTypes.SUB_TOTAL:
          return { ...state, total: state.total-payload};

      default:
          return state;
  }
}

export const cartCountReducer = (state = INITIAL_STATE, { type, payload})=>{

  switch(type){

      case actionTypes.ADD_COUNT:
        return {...state, cartcount:state.cartcount + payload}

      case actionTypes.SUB_COUNT:
        return {...state, cartcount:state.cartcount - payload}

      default:
          return state;
  }
}

export const filteredprice = (state = INITIAL_STATE, action)=>{

  switch(action.type){
    case actionTypes.ORDER_PRODUCTS_BY_PRICE:
      return {
        ...state, filteredItems: action.payload.item,
        sort: action.payload.sort
      }
      
    default:
      return state;
  }
}

export default shopReducer;
