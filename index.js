const redux = require('redux')

const createStore = redux.createStore

const BUY_CAKE = "BUY_CAKE"
const BUY_ICE_CREME = "BUY_ICE_CREME"

function buyCake () {
  return {
    type: BUY_CAKE,
    payload: 'First redux action'
  }
}

function buyIceCreme () {
  return {
    type: BUY_ICE_CREME,
    payload: 'First redux action'
  }
}

const initialCakeState = {
  numberOfCakes: 10
}

const initialIceCremeState = {
  numberOfIceCreme: 20
}

const reducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1
      }
    default: return state
  }
}

const reducer = (state = initialIceCremeState, action) => {
  switch (action.type) {
    case BUY_ICE_CREME:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1
      }
    default: return state
  }
}

const store = createStore(reducer)
console.log('initial state', store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()