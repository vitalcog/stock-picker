import React, { Component } from 'react';
import './css_folder/layout.css'
import AutoSearch from './components/AutoSearch'
import DisplayChoices from './components/DisplayChoices'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AutoSearch />
        <DisplayChoices />
      </div>
    )
  }
}

export default App;
