import { createStore } from 'redux'

function reducer (state, action) {

  if(action.type === 'STOCK_FIND') {
    return {
      stocks: action.payload,
      show: state.show,
    }
  }

  else if (action.type === 'SELECT') {
    for(let i = 0; i < state.show.length; i++) {
      if (state.show[i].name === action.payload.name) {
        return state
      }
    }
    return {
      stocks: state.stocks,
      show: state.show.concat([action.payload])
    }
  }

  else if (action.type === 'CLEAR') {
    return {
      stocks: [],
      show: state.show,
    }
  }

  return state
}

export const store = createStore(reducer, {
  stocks: [],
  show: [],
})
