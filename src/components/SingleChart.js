import React, { Component } from 'react'
var Chart = require("chart.js");


class SingleChart extends Component {

  state = {
    countryHistory: [],
    chartInput: '',
    chartType: 'deaths',
  }

  componentDidMount() {

    fetch("https://corona.lmao.ninja/v2/historical")
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw Error(res.status)
        }
      })
      .then(data => {
        const filteredData = data.filter(element => element.province === null)
        this.setState({
          countryHistory: filteredData,
        })
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidUpdate() {
    if (this.state.countryHistory && this.state.chartInput !== '') {
      const countries = [...this.state.countryHistory]
      const countryNew = countries.filter((country) => (
        (country.country.toUpperCase()).includes(this.state.chartInput.toUpperCase())
      ))
      countryNew.forEach(country => this.renderChart(country))
    }
  }

  renderChart = (country) => {
    if (this.state.chartType === 'deaths') {
      const historicalDataObj = country.timeline.deaths
      const historicalDataArray = Object.keys(historicalDataObj).map(function (key) {
        return [String(key), historicalDataObj[key]];
      });

      const last7Days = historicalDataArray.slice(-15)
      let deathsPerDay = 0;
      const deathsPerDayArr = [];

      last7Days.forEach((day) => {
        let pair = day[1] - deathsPerDay;
        deathsPerDayArr.push(pair)
        deathsPerDay = day[1];
      })

      const data = {
        labels: [`${last7Days[1][0]}`, `${last7Days[2][0]}`, `${last7Days[3][0]}`, `${last7Days[4][0]}`, `${last7Days[5][0]}`, `${last7Days[6][0]}`, `${last7Days[7][0]}`, `${last7Days[8][0]}`, `${last7Days[9][0]}`, `${last7Days[10][0]}`, `${last7Days[11][0]}`, `${last7Days[12][0]}`, `${last7Days[13][0]}`, `${last7Days[14][0]}`],
        datasets: [{
          label: "Deaths per day",
          backgroundColor: "rgba(240,50,50,0.85)",
          borderColor: `${this.props.darkMode ? "rgba(255,255,255,1)" : "rgba(0,0,0,1)"}`,
          borderWidth: 2,
          hoverBackgroundColor: "rgba(240,50,50,1)",
          data: [deathsPerDayArr[1], deathsPerDayArr[2], deathsPerDayArr[3], deathsPerDayArr[4], deathsPerDayArr[5], deathsPerDayArr[6], deathsPerDayArr[7], deathsPerDayArr[8], deathsPerDayArr[9], deathsPerDayArr[10], deathsPerDayArr[11], deathsPerDayArr[12], deathsPerDayArr[13], deathsPerDayArr[14]],
        }]
      };

      const options = {
        title: {
          display: true,
          text: country.country,
          fontSize: 30
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

      Chart.Bar(country.country, {
        options: options,
        data: data,
      });
    } else if (this.state.chartType === 'cases') {
      const historicalDataObj = country.timeline.cases
      const historicalDataArray = Object.keys(historicalDataObj).map(function (key) {
        return [String(key), historicalDataObj[key]];
      });

      const last7Days = historicalDataArray.slice(-15)
      let casesPerDay = 0;
      const casesPerDayArr = [];

      last7Days.forEach((day) => {
        let pair = day[1] - casesPerDay;
        casesPerDayArr.push(pair)
        casesPerDay = day[1];
      })

      const data = {
        labels: [`${last7Days[1][0]}`, `${last7Days[2][0]}`, `${last7Days[3][0]}`, `${last7Days[4][0]}`, `${last7Days[5][0]}`, `${last7Days[6][0]}`, `${last7Days[7][0]}`, `${last7Days[8][0]}`, `${last7Days[9][0]}`, `${last7Days[10][0]}`, `${last7Days[11][0]}`, `${last7Days[12][0]}`, `${last7Days[13][0]}`, `${last7Days[14][0]}`],
        datasets: [{
          label: "Cases per day",
          backgroundColor: "rgba(231, 94, 44, 0.85)",
          borderColor: `${this.props.darkMode ? "rgba(255,255,255,1)" : "rgba(0,0,0,1)"}`,
          borderWidth: 2,
          hoverBackgroundColor: "rgba(231, 94, 44,1)",
          data: [casesPerDayArr[1], casesPerDayArr[2], casesPerDayArr[3], casesPerDayArr[4], casesPerDayArr[5], casesPerDayArr[6], casesPerDayArr[7], casesPerDayArr[8], casesPerDayArr[9], casesPerDayArr[10], casesPerDayArr[11], casesPerDayArr[12], casesPerDayArr[13], casesPerDayArr[14]],
        }]
      };

      const options = {
        title: {
          display: true,
          text: country.country,
          fontSize: 30
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

      Chart.Bar(country.country, {
        options: options,
        data: data,
      });
    } else if (this.state.chartType === 'recovered') {
      const historicalDataObj = country.timeline.recovered
      const historicalDataArray = Object.keys(historicalDataObj).map(function (key) {
        return [String(key), historicalDataObj[key]];
      });

      const last7Days = historicalDataArray.slice(-15)
      let recoPerDay = 0;
      const recoPerDayArr = [];

      last7Days.forEach((day) => {
        let pair = day[1] - recoPerDay;
        recoPerDayArr.push(pair)
        recoPerDay = day[1];
      })

      const data = {
        labels: [`${last7Days[1][0]}`, `${last7Days[2][0]}`, `${last7Days[3][0]}`, `${last7Days[4][0]}`, `${last7Days[5][0]}`, `${last7Days[6][0]}`, `${last7Days[7][0]}`, `${last7Days[8][0]}`, `${last7Days[9][0]}`, `${last7Days[10][0]}`, `${last7Days[11][0]}`, `${last7Days[12][0]}`, `${last7Days[13][0]}`, `${last7Days[14][0]}`],
        datasets: [{
          label: "New Recovered",
          backgroundColor: "rgba(44, 180, 44, 0.85)",
          borderColor: `${this.props.darkMode ? "rgba(255,255,255,1)" : "rgba(0,0,0,1)"}`,
          borderWidth: 2,
          hoverBackgroundColor: "rgba(44, 180, 44, 1)",
          data: [recoPerDayArr[1], recoPerDayArr[2], recoPerDayArr[3], recoPerDayArr[4], recoPerDayArr[5], recoPerDayArr[6], recoPerDayArr[7], recoPerDayArr[8], recoPerDayArr[9], recoPerDayArr[10], recoPerDayArr[11], recoPerDayArr[12], recoPerDayArr[13], recoPerDayArr[14]],
        }]
      };

      const options = {
        title: {
          display: true,
          text: country.country,
          fontSize: 30
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

      Chart.Bar(country.country, {
        options: options,
        data: data,
      });
    }
  }

  changeChartInput = (e) => {
    this.setState({
      chartInput: e.target.value
    })
  }

  changeTypeChartInput = (e) => {
    this.setState({
      chartType: e.target.value,
      chartInput: ''
    })
  }

  render() {
    const { countryHistory, chartInput } = this.state;
    const { darkMode } = this.props;

    const countryCopy = [...countryHistory]
    const countryNew = countryCopy.filter((country) => (
      (country.country.toUpperCase()).includes(chartInput.toUpperCase())
    ))

    const createCanvas = countryNew.map((canv) => (
      <div key={canv.country} className="container">
        <canvas id={canv.country} className='canvas'></canvas>
      </div>
    ))

    return (
      <>
        <input onChange={(e) => this.changeChartInput(e)} type="text" className={darkMode ? 'chart__input chart__input--darkMode' : 'chart__input'} value={chartInput} placeholder='Type few letters of country' />

        <form onChange={(e) => this.changeTypeChartInput(e)}>
          <label className={darkMode ? 'chart__radio chart__radio--darkMode' : 'chart__radio'}>
            <input type="radio" name="chart" value='deaths' defaultChecked />Deaths
          </label>

          <label className={darkMode ? 'chart__radio chart__radio--darkMode' : 'chart__radio'}>
            <input type="radio" name="chart" value='cases' />Cases
            </label>

          <label className={darkMode ? 'chart__radio chart__radio--darkMode' : 'chart__radio'}>
            <input type="radio" name="chart" value='recovered' />Recovered
            </label>
        </form>

        {countryNew.length <= 90 ? createCanvas : <h2 className={darkMode ? "title chart__title title--darkMode" : "title chart__title"}>Please write name of any country...</h2>}
      </>
    )
  }
}
export default SingleChart
