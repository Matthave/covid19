import React, { Component } from 'react'
import SingleChart from './SingleChart'

class Chart extends Component {

  state = {
    activeChart: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeChart: true
      })
    }, 200);

    fetch("https://corona.lmao.ninja/v2/historical")
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw Error(res.status)
        }
      })
      .then(data => {
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {

    return (
      <div className={this.state.activeChart ? "chart chart--active" : "chart"}>
        <h1 className={this.props.darkMode ? "title title--darkMode" : "title"} >covid-19 coronavirus <span>Charts</span></h1>
        <SingleChart darkMode={this.props.darkMode} />
      </div>
    )
  }
}
export default Chart