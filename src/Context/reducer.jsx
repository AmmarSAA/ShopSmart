export const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART": {
        const itemExist = state.cart.find(item => item.id === action.payload.id);
        if (itemExist) {
          // Item already exists in the cart, increase the quantity
          return {
            ...state,
            cart: state.cart.map(item =>
              item.id === action.payload.id
                ? { ...item, count: item.count + 1 }
                : item
            )
          };
        } else {
          // Item doesn't exist in the cart, add it
          return { ...state, cart: [...state.cart, { ...action.payload, count: action.payload.count }] };
        }
      }
  
      case "DELETE_ITEM": {
        return {
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload.id)
        };
      }
  
      default: {
        return state;
      }
    }
  };
  