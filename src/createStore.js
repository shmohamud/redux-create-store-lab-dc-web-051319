export default function createStore(reducer) {

  let state;

  let getState = () => {
    return state
  }
  
  let dispatch = (action) => {
    state = reducer(state, action)
  }

let INIT = {type:"INTIALIZE"}

dispatch(INIT)

  return {getState, dispatch}
}

function render() {
  const container = document.getElementById('container');
}


