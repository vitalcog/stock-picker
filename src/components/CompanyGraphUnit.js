import React, { Component } from 'react'
import '../css_folder/layout.css'
import { connect } from 'react-redux'
import { Sparklines, SparklinesLine } from 'react-sparklines';


class CompanyGraphUnit extends Component {
  render() {
    return(
      <div>
        {this.props.name}
        {this.props.ticker}
        <Sparklines data={this.props.prices} width={140} height={40} margin={5}>
          <SparklinesLine color="green" />
        </Sparklines>
      </div>
    )
  }
}

export default CompanyGraphUnit
