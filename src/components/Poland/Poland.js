import React, { Component } from 'react'
import GlobalPoland from './GlobalPoland'
import PolandMap from './PolandMap'
import Chart from 'chart.js'

class Poland extends Component {
  state = {
    activePoland: false,
    provinceVisibility: false,
    provinceName: '-',
    provinceCases: '-',
    provinceDeaths: '-',
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activePoland: true,
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
          backgroundColor: "rgba(100, 100, 100, 0.85)",
          borderColor: 'rgba(30, 30, 30, 0.85)',
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

      Chart.Bar('canvas', {
        options: options,
        data: data,
      });
    }

    if (provinces) {
      const data = {
        labels: [`${provinces[0]}`, `${provinces[1]}`, `${provinces[2]}`, `${provinces[3]}`, `${provinces[4]}`, `${provinces[5]}`, `${provinces[6]}`, `${provinces[7]}`, `${provinces[8]}`, `${provinces[9]}`, `${provinces[10]}`, `${provinces[11]}`, `${provinces[12]}`, `${provinces[13]}`, `${provinces[14]}`, `${provinces[15]}`],
        datasets: [{
          label: "Deaths",
          backgroundColor: "rgba(200, 0, 0, 0.85)",
          borderColor: 'rgba(100,0,0,0.85)',
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

      Chart.Bar('canvas1', {
        options: options,
        data: data,
      });
    }
  }

  clickHandleDot = (province, stats) => {
    const currentProvince = stats.filter(stat => stat.attributes.jpt_nazwa_ === province)
    this.setState({
      provinceName: province,
      provinceCases: currentProvince[0].attributes.SUM_Confirmed,
      provinceDeaths: currentProvince[0].attributes.SUM_Deaths,
      provinceVisibility: true,
    })
  }

  onMouseOut = () => {
    this.setState({
      provinceVisibility: false,
    })
  }

  render() {
    const { polandStats, darkMode, countries } = this.props;
    const { provinceName, provinceCases, provinceDeaths, provinceVisibility, activePoland } = this.state;

    const globalStats = [...countries];
    const polandAllStats = globalStats.filter(stat => stat.country === 'Poland')

    const polandStatistics = [...polandStats]
    const polandStatisticMap = polandStatistics.map((stat) => (
      <div className={darkMode ? 'province province--darkMode' : 'province'} key={stat.attributes.OBJECTID}>
        <h2 className={darkMode ? 'province__name province__name--darkMode' : 'province__name'}>{stat.attributes.jpt_nazwa_}</h2>

        <h3 className='province__confirmed'> Confirmed
          <span className={darkMode ? 'province__span province__span--darkMode' : 'province__span'}>{(stat.attributes.SUM_Confirmed).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
          <span className={darkMode ? 'province__span province__span--darkMode' : 'province__span'}>
            {((stat.attributes.SUM_Confirmed / polandAllStats[0].cases) * 100).toFixed(2)}%</span>
        </h3>

        <h3 className='province__deaths'>Deaths
          <span className={darkMode ? 'province__span province__span--darkMode' : 'province__span'}>{stat.attributes.SUM_Deaths}</span>
          <span className={darkMode ? 'province__span province__span--darkMode' : 'province__span'}>{((stat.attributes.SUM_Deaths / polandAllStats[0].deaths) * 100).toFixed(2)}%</span></h3>
      </div>


    ))
    return (
      <div className={activePoland ? "poland poland--active" : "poland"}>

        <GlobalPoland
          darkMode={darkMode}
          polandAllStats={polandAllStats}
        />

        <h2 className={darkMode ? "title title--darkMode" : "title"} >Poland Provinces Statistic</h2>
        <section className="polandWrap">
          <div className="statisticWrap">
            {polandStatisticMap}
          </div>

          <PolandMap
            darkMode={darkMode}
            polandStatistics={polandStatistics}
            provinceName={provinceName}
            provinceCases={provinceCases}
            provinceDeaths={provinceDeaths}
            provinceVisibility={provinceVisibility}
            clickHandleDot={this.clickHandleDot}
            onMouseOut={this.onMouseOut}
          />

          <h2 className={darkMode ? "title title--darkMode" : "title"} >Poland Provinces Chart</h2>
          <div className="canvasWrap">
            <div className="container">
              <canvas id='canvas' className='canvasPoland'></canvas>
            </div>
            <div className="container">
              <canvas id='canvas1' className='canvasPoland'></canvas>
            </div>
          </div>

        </section>

      </div>
    )
  }
}
export default Poland
