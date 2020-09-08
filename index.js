const BUY_CAKE = "BUY_CAKE"

function buyCake () {
  return {
    type: BUY_CAKE,
    payload: 'First redux action'
  }
}

const initialState = {
  numberOfCakes: 10
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: numberOfCakes - 1
      }
    default: return state
  }
}