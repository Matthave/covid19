import React, { Component } from 'react'

class Poland extends Component {
  state = {
    activePoland: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activePoland: true
      })
    }, 200);
  }

  render() {
    return (
      <div className={this.state.activePoland ? "poland poland--active" : "poland"}>
        <h1 className={this.props.darkMode ? "title title--darkMode" : "title"} >covid-19 coronavirus <span>Poland Stats</span></h1>
        <h3 className={this.props.darkMode ? "title title--darkMode temporary" : "title temporary"} >poland Tab in progress...</h3>
      </div>
    )
  }
}
export default Poland
