import React, { Component } from 'react'
var Chart = require("chart.js");

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

  componentDidUpdate() {
    if (this.props.polandStats) {
      this.renderChart()
    }
  }

  renderChart = () => {
    const polandStats = this.props.polandStats
    const provinces = [];
    const confirmedProvinces = [];
    const deathsProvinces = [];

    polandStats.forEach(element => {
      provinces.push((element.attributes.jpt_nazwa_).toUpperCase())
    });

    polandStats.forEach(element => {
      confirmedProvinces.push(element.attributes.SUM_Confirmed)
    });

    polandStats.forEach(element => {
      deathsProvinces.push(element.attributes.SUM_Deaths)
    });

    if (provinces) {
      const data = {
        labels: [`${provinces[0]}`, `${provinces[1]}`, `${provinces[2]}`, `${provinces[3]}`, `${provinces[4]}`, `${provinces[5]}`, `${provinces[6]}`, `${provinces[7]}`, `${provinces[8]}`, `${provinces[9]}`, `${provinces[10]}`, `${provinces[11]}`, `${provinces[12]}`, `${provinces[13]}`, `${provinces[14]}`, `${provinces[15]}`],
        datasets: [{
          label: "Confirmed",
          backgroundColor: "rgba(55, 55, 55, 0.85)",
          borderColor: 'rgba(10, 10, 10, 0.85)',
          borderWidth: 2,
          hoverBackgroundColor: "rgba(0, 0, 0, 1)",
          data: [`${confirmedProvinces[0]}`, `${confirmedProvinces[1]}`, `${confirmedProvinces[2]}`, `${confirmedProvinces[3]}`, `${confirmedProvinces[4]}`, `${confirmedProvinces[5]}`, `${confirmedProvinces[6]}`, `${confirmedProvinces[7]}`, `${confirmedProvinces[8]}`, `${confirmedProvinces[9]}`, `${confirmedProvinces[10]}`, `${confirmedProvinces[11]}`, `${confirmedProvinces[12]}`, `${confirmedProvinces[13]}`, `${confirmedProvinces[14]}`, `${confirmedProvinces[15]}`],
        }]
      };

      const options = {
        title: {
          display: true,
          text: 'Poland Provinces - Confirmed Cases',
          fontSize: 25,
          fontColor: '#666'
        },
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            stacked: true,
            gridLines: {
              display: true,
              color: "rgba(255,99,132,0.5)"
            }
          }],
          xAxes: [{
            gridLines: {
              display: false
            }
          }]
        },
      };

      Chart.Line('canvas', {
        options: options,
        data: data,
      });
    }

    if (provinces) {
      const data = {
        labels: [`${provinces[0]}`, `${provinces[1]}`, `${provinces[2]}`, `${provinces[3]}`, `${provinces[4]}`, `${provinces[5]}`, `${provinces[6]}`, `${provinces[7]}`, `${provinces[8]}`, `${provinces[9]}`, `${provinces[10]}`, `${provinces[11]}`, `${provinces[12]}`, `${provinces[13]}`, `${provinces[14]}`, `${provinces[15]}`],
        datasets: [{
          label: "Deaths",
          backgroundColor: "rgba(170, 0, 0, 0.85)",
          borderColor: 'rgba(45,0,0,0.85)',
          borderWidth: 2,
          hoverBackgroundColor: "rgba(0, 0, 0, 1)",
          data: [`${deathsProvinces[0]}`, `${deathsProvinces[1]}`, `${deathsProvinces[2]}`, `${deathsProvinces[3]}`, `${deathsProvinces[4]}`, `${deathsProvinces[5]}`, `${deathsProvinces[6]}`, `${deathsProvinces[7]}`, `${deathsProvinces[8]}`, `${deathsProvinces[9]}`, `${deathsProvinces[10]}`, `${deathsProvinces[11]}`, `${deathsProvinces[12]}`, `${deathsProvinces[13]}`, `${deathsProvinces[14]}`, `${deathsProvinces[15]}`],
        }]
      };

      const options = {
        title: {
          display: true,
          text: 'Poland Provinces - Deaths',
          fontSize: 25,
          fontColor: '#666'
        },
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            stacked: true,
            gridLines: {
              display: true,
              color: "rgba(255,99,132,0.5)"
            }
          }],
          xAxes: [{
            gridLines: {
              display: false
            }
          }]
        },
      };

      Chart.Line('canvas1', {
        options: options,
        data: data,
      });
    }

  }

  render() {
    const { polandStats, darkMode } = this.props;
    const polandStatistics = [...polandStats]
    const polandStatisticMap = polandStatistics.map((stat) => (
      <div className={darkMode ? 'province province--darkMode' : 'province'} key={stat.attributes.OBJECTID}>
        <h2 className={darkMode ? 'province__name province__name--darkMode' : 'province__name'}>{stat.attributes.jpt_nazwa_}</h2>
        <h3 className='province__confirmed'> Confirmed <span className={darkMode ? 'province__span province__span--darkMode' : 'province__span'}>{(stat.attributes.SUM_Confirmed).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></h3>
        <h3 className='province__deaths'>Deaths <span className={darkMode ? 'province__span province__span--darkMode' : 'province__span'}>{stat.attributes.SUM_Deaths}</span></h3>
      </div>
    ))
    return (
      <div className={this.state.activePoland ? "poland poland--active" : "poland"}>
        <h1 className={darkMode ? "title title--darkMode" : "title"} >covid-19 coronavirus <span className='poland__span'>Poland Provinces Stats</span></h1>
        <div className="polandWrap">
          <div className="statisticWrap">
            {polandStatisticMap}
          </div>

          <div className="canvasWrap">
            <div className="container">
              <canvas id='canvas' className='canvasPoland'></canvas>
            </div>
            <div className="container">
              <canvas id='canvas1' className='canvasPoland'></canvas>
            </div>

          </div>

        </div>

      </div>
    )
  }
}
export default Poland
