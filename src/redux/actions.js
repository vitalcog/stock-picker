
export function findStock(response) {
  return {
    type: 'STOCK_FIND',
    payload: response,
  }
}

export function selectStock(ticker) {
  return {
    type: 'SELECT',
    payload: ticker,
  }
}

export function clearStock() {
  return {
    type: 'CLEAR',
  }
}
