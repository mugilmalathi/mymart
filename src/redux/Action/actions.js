import * as actionTypes from "./actionTypes";

export const SetGrocery = (grocery)=>{

  return{
      type: actionTypes.SET_GROCERY,
      payload: grocery
  }
}

export const SelectedGrocery = (gro)=>{

  return{
      type: actionTypes.SELECTED_GROCERY,
      payload: gro
  }
}

export const SetMobile = (mobile)=>{

  return{
      type: actionTypes.SET_MOBILE,
      payload: mobile
  }
}

export const SelectedMobile = (mob)=>{

  return{
      type: actionTypes.SELECTED_MOBILE,
      payload: mob
  }
}

export const SetFashion = (fashion)=>{

  return{
      type: actionTypes.SET_FASHION,
      payload: fashion
  }
}

export const SelectedFashion = (fas)=>{

  return{
      type: actionTypes.SELECTED_FASHION,
      payload: fas
  }
}

export const SetElectronic = (electronic)=>{

  return{
      type: actionTypes.SET_ELECTRONIC,
      payload: electronic
  }
}

export const SelectedElectronic = (ele)=>{

  return{
      type: actionTypes.SELECTED_ELECTRONIC,
      payload: ele
  }
}










export const SetCategory = (category)=>{

  return{
      type: actionTypes.SET_CATEGORY,
      payload: category
  }
}

export const SetUsers = (users)=>{

  return{
      type: actionTypes.SET_USERS,
      payload: users
  }
}

export const SelectedUser = (us)=>{

  return{
      type: actionTypes.SELECTED_USERS,
      payload: us
  }
}

export const DisplayUser = (us)=>{

  return{
      type: actionTypes.DISPLAY_USERS,
      payload: us
  }
}


export const addToCart = (product) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload:product
  };
};

export const removeCart = (id) => {
  return {
    type: actionTypes.REMOVE_CART,
    payload:id
  };
};

export const addQty = (qty) => {
  return {
    type: actionTypes.ADD_QTY,
    payload:qty
  };
};
export const subQty = (qty) => {
  return {
    type: actionTypes.SUB_QTY,
    payload:qty
  };
};


export const SetTotal = (total)=>{

  return{
      type: actionTypes.SET_TOTAL,
      payload: total
  }
}

export const SubTotal = (total)=>{

  return{
      type: actionTypes.SUB_TOTAL,
      payload: total
  }
}
export const AddTotal = (total)=>{

  return{
      type: actionTypes.ADD_TOTAL,
      payload: total
  }
}


export const SetAddress = (address)=>{

  return{
      type: actionTypes.SET_ADDRESS,
      payload: address
  }
}

export const addCount = (count)=>({
  type: actionTypes.ADD_COUNT,
  payload: count,
})

export const subCount = (count)=>({
  type: actionTypes.SUB_COUNT,
  payload: count,
})
 