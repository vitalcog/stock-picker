import React, { Component } from 'react'
import '../css_folder/layout.css'
import '../css_folder/colors_borders_images.css'
import { connect } from 'react-redux'
import { findStock } from '../redux/actions'
import { selectStock } from '../redux/actions'
import { clearStock } from '../redux/actions'


class AutoSearch extends Component {

  render() {

    const dListOptions = this.props.stocks.map(stock => {
      return(
        <p
          onClick={() => this.props.select(stock.ticker.toLowerCase() )} 
          // onClick={() => this.props.clear()}
          key={stock.name}>
          {stock.name + " " + stock.ticker}
       </p>
      )
    })

    return(
      <section>
        <input
          className="search-width"
          list="searchParam"
          placeholder="Company Name"
          onChange= {event => this.props.search(event.target.value)}
        />
        <div id="results">
          {dListOptions}
        </div>
      </section>
    )
  }
}

// connecting to the redux store below this point

function state2props(state){
  return {
    stocks: state.stocks,
  }
}

function dispatch2props(dispatch) {
  return {
    search: param => {
      fetch(`https://young-plains-68972.herokuapp.com/api/autocomplete?q=${param}`)
      .then( res => res.json() )
      .then( res => {
        const action = findStock(res)
        dispatch(action)
      })
    },
    select: param => {
      fetch(`https://young-plains-68972.herokuapp.com/api/companies/${param}`)
      .then( res => res.json() )
      .then( res => {
        const action = selectStock(res)
        dispatch(action)
      })
    },
    // clear: () => dispatch(clearStock() )
  }
}

export default connect (state2props, dispatch2props ) (AutoSearch)
