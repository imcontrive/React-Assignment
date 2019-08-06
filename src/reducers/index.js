import info from './../products.json';

const initState = {
	products: info.products,
	priceInfo: info.pricingInfo
}

export default function productsReducer(state=initState,action){
  switch(action.type) {
    case 'EDIT_PRODUCT' : {
      const localProducts = state.products.map((product, index) => {
        if (index === Number(action.data.id)) {
          return action.data
        } else {
          return product
        }
      })
      return {
        ...state,
        products: localProducts
      }
    }
    default : 
      return state;
  }
}
