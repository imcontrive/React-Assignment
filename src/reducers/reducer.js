import info from './../products.json';

const initState = {
	products: info.products,
	priceInfo: info.pricingInfo
}

export default function productsReducer(state=initState,action){
  console.log(state, 'in state')
  switch(action.type) {
    // case "ALL_PRODUCTS": {
    //   return {
    //     ...state,
    //     products: action.payload.products,
    //     priceInfo: action.payload.pricingInfo
    //   }
    // }
    case 'EDIT_PRODUCT' : {
      const localProducts = state.products.map((product, index) => {
        if (index === Number(action.data.id)) {
          // console.log(action.data,"action.data")
          return action.data
        } else {
          return product
        }
      })
      // console.log(localProducts);
      return {
        ...state,
        products: localProducts
      }
    }
    default : 
      return state;
  }
}
