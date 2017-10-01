import React, { Component } from 'react'
import '../css_folder/layout.css'
import { connect } from 'react-redux'
import CompanyGraphUnit from './CompanyGraphUnit'


class DisplayChoices extends Component {

  render() {

    console.log(this.props.show)
    const infoBlocks = this.props.show.map(unit => {
      return(
        <CompanyGraphUnit
          key={unit.ticker}
          name={unit.name}
          ticker={unit.ticker}
          prices={unit.prices}
        />
      )
    })
    return(
      <div>
        {infoBlocks}
      </div>
    )
  }
}


function state2props(state){
  return {
    show: state.show,
  }
}

function dispatch2props(dispatch) {
  return {}
}

export default connect (state2props, dispatch2props ) (DisplayChoices)
