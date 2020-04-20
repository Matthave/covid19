import React, { Component } from 'react'
import pol from '../IMG/pol.svg'
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
      <div className={this.state.activePoland ? "poland poland--active" : "poland"}>
        <h1 className={darkMode ? "title title--darkMode" : "title"} >covid-19 coronavirus <span className='poland__span'>Poland Stats</span></h1>

        <section className="globalPoland">

          <div className={darkMode ? 'globalPoland__section globalPoland__section--darkMode' : 'globalPoland__section'}>
            <div className='globalPoland__wrap'>
              <h2 className='globalPoland__text'>Confirmed Cases </h2>
              <span className="globalPoland__span">{(polandAllStats[0].cases).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
            </div>
            <div className='globalPoland__wrap'>
              <h2 className='globalPoland__text'>Deaths </h2>
              <span className="globalPoland__span globalPoland__spanDeaths">{polandAllStats[0].deaths}</span>
            </div>
            <div className='globalPoland__wrap'>
              <h2 className='globalPoland__text'>Recovered </h2>
              <span className="globalPoland__span globalPoland__spanRecovered">{(polandAllStats[0].recovered).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
            </div>

            <div className='globalPoland__wrap'>
              <h2 className='globalPoland__text'>Death Rate</h2>
              <span className="globalPoland__span globalPoland__spanMortality">{((polandAllStats[0].deaths / polandAllStats[0].cases) * 100).toFixed(2)}%</span>
            </div>
          </div>

          <div className={darkMode ? 'globalPoland__section globalPoland__section--darkMode' : 'globalPoland__section'}>
            <div className='globalPoland__wrap'>
              <h2 className='globalPoland__text'>New Cases </h2>
              <span className="globalPoland__span globalPoland__spanNewCases">+{polandAllStats[0].todayCases}</span>
            </div>

            <div className='globalPoland__wrap'>
              <h2 className='globalPoland__text'>New Deaths </h2>
              <span className="globalPoland__span globalPoland__spanNewDeaths">+{polandAllStats[0].todayDeaths}</span>
            </div>
          </div>

          <div className={darkMode ? 'globalPoland__section globalPoland__section--darkMode' : 'globalPoland__section'}>
            <div className='globalPoland__wrap'>
              <h2 className='globalPoland__text'>Active </h2>
              <span className="globalPoland__span globalPoland__spanActive">{(polandAllStats[0].active).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
            </div>
            <div className='globalPoland__wrap'>
              <h2 className='globalPoland__text'>Critical </h2>
              <span className="globalPoland__span globalPoland__spanCritical">{polandAllStats[0].critical}</span>
            </div>
          </div>

          <div className={darkMode ? 'globalPoland__section globalPoland__section--darkMode' : 'globalPoland__section'}>
            <div className='globalPoland__wrap'>
              <h2 className='globalPoland__text'>Tests Performed </h2>
              <span className="globalPoland__span globalPoland__spanTest">{(polandAllStats[0].tests).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
            </div>
            <div className='globalPoland__wrap'>
              <h2 className='globalPoland__text'>Tests Performed / 1 million</h2>
              <span className="globalPoland__span globalPoland__spanTest">{(polandAllStats[0].testsPerOneMillion).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
            </div>
          </div>

          <div className={darkMode ? 'globalPoland__section globalPoland__section--darkMode' : 'globalPoland__section'}>
            <div className='globalPoland__wrap'>
              <h2 className='globalPoland__text'>Active Cases / 1 million </h2>
              <span className="globalPoland__span">{polandAllStats[0].casesPerOneMillion}</span>
            </div>
            <div className='globalPoland__wrap'>
              <h2 className='globalPoland__text'>Deaths / 1 million</h2>
              <span className="globalPoland__span">{polandAllStats[0].deathsPerOneMillion}</span>
            </div>
          </div>
        </section>

        <h2 className={darkMode ? "title title--darkMode" : "title"} >Poland Provinces Statistic</h2>

        <section className="polandWrap">
          <div className="statisticWrap">
            {polandStatisticMap}
          </div>

          <h2 className={darkMode ? "title title--darkMode" : "title"} >Poland Provinces Map</h2>
          <div className="polandMapWrap">
            <section className="polandMap">
              <img src={pol} alt="" className='polandMap__img' />
              <div
                className="mazowieckie dot"
                onClick={() => this.clickHandleDot('mazowieckie', polandStatistics)}
                onMouseOver={() => this.clickHandleDot
                  ('mazowieckie', polandStatistics)}
                onMouseOut={() => this.onMouseOut()}>
              </div>

              <div
                className="wielkopolskie dot"
                onClick={() => this.clickHandleDot('wielkopolskie', polandStatistics)}
                onMouseOver={() => this.clickHandleDot('wielkopolskie', polandStatistics)}
                onMouseOut={() => this.onMouseOut()}>
              </div>

              <div
                className="lubuskie dot"
                onClick={() => this.clickHandleDot('lubuskie', polandStatistics)}
                onMouseOver={() => this.clickHandleDot('lubuskie', polandStatistics)}
                onMouseOut={() => this.onMouseOut()}>
              </div>

              <div
                className="zachPomorskie dot"
                onClick={() => this.clickHandleDot('zachodniopomorskie', polandStatistics)}
                onMouseOver={() => this.clickHandleDot('zachodniopomorskie', polandStatistics)}
                onMouseOut={() => this.onMouseOut()}>
              </div>

              <div
                className="pomorskie dot"
                onClick={() => this.clickHandleDot('pomorskie', polandStatistics)}
                onMouseOver={() => this.clickHandleDot('pomorskie', polandStatistics)}
                onMouseOut={() => this.onMouseOut()}>
              </div>

              <div
                className="kujPomorskie dot"
                onClick={() => this.clickHandleDot('kujawsko-pomorskie', polandStatistics)}
                onMouseOver={() => this.clickHandleDot('kujawsko-pomorskie', polandStatistics)}
                onMouseOut={() => this.onMouseOut()}>
              </div>

              <div
                className="mazurskie dot"
                onClick={() => this.clickHandleDot('warmińsko-mazurskie', polandStatistics)}
                onMouseOver={() => this.clickHandleDot('warmińsko-mazurskie', polandStatistics)}
                onMouseOut={() => this.onMouseOut()}>
              </div>

              <div
                className="podlaskie dot"
                onClick={() => this.clickHandleDot('podlaskie', polandStatistics)}
                onMouseOver={() => this.clickHandleDot('podlaskie', polandStatistics)}
                onMouseOut={() => this.onMouseOut()}>
              </div>

              <div
                className="lubelskie dot"
                onClick={() => this.clickHandleDot('lubelskie', polandStatistics)}
                onMouseOver={() => this.clickHandleDot('lubelskie', polandStatistics)}
                onMouseOut={() => this.onMouseOut()}>
              </div>

              <div
                className="podkarpackie dot"
                onClick={() => this.clickHandleDot('podkarpackie', polandStatistics)}
                onMouseOver={() => this.clickHandleDot('podkarpackie', polandStatistics)}
                onMouseOut={() => this.onMouseOut()}>
              </div>

              <div
                className="swietokrzyskie dot"
                onClick={() => this.clickHandleDot('świętokrzyskie', polandStatistics)}
                onMouseOver={() => this.clickHandleDot('świętokrzyskie', polandStatistics)}
                onMouseOut={() => this.onMouseOut()}>
              </div>

              <div
                className="lodzkie dot"
                onClick={() => this.clickHandleDot('łódzkie', polandStatistics)}
                onMouseOver={() => this.clickHandleDot('łódzkie', polandStatistics)}
                onMouseOut={() => this.onMouseOut()}>
              </div>

              <div
                className="slaskie dot"
                onClick={() => this.clickHandleDot('śląskie', polandStatistics)} onMouseOver={() => this.clickHandleDot('śląskie', polandStatistics)}
                onMouseOut={() => this.onMouseOut()}>
              </div>

              <div
                className="opolskie dot"
                onClick={() => this.clickHandleDot('opolskie', polandStatistics)}
                onMouseOver={() => this.clickHandleDot('opolskie', polandStatistics)}
                onMouseOut={() => this.onMouseOut()}>
              </div>

              <div
                className="dolnoslaskie dot"
                onClick={() => this.clickHandleDot('dolnośląskie', polandStatistics)}
                onMouseOver={() => this.clickHandleDot('dolnośląskie', polandStatistics)}
                onMouseOut={() => this.onMouseOut()}>
              </div>

              <div
                className="malopolskie dot"
                onClick={() => this.clickHandleDot('małopolskie', polandStatistics)}
                onMouseOver={() => this.clickHandleDot('małopolskie', polandStatistics)}
                onMouseOut={() => this.onMouseOut()}>
              </div>

            </section>

            <section className={darkMode ? "currentProvince currentProvince--darkMode" : "currentProvince"}>
              <h2 className='currentProvince__data'>Province <span className={this.state.provinceVisibility ? 'currentProvince__span currentProvince__span--show mapSpanName ' : 'currentProvince__span mapSpanName'}>{this.state.provinceName}</span></h2>

              <h2 className='currentProvince__data'>Cases <span className={this.state.provinceVisibility ? 'currentProvince__span currentProvince__span--show mapSpanCases ' : 'currentProvince__span mapSpanCases'}>{this.state.provinceCases}</span></h2>

              <h2 className='currentProvince__data'>Deaths <span className={this.state.provinceVisibility ? 'currentProvince__span currentProvince__span--show mapSpanDeaths ' : 'currentProvince__span mapSpanDeaths'}>{this.state.provinceDeaths}</span></h2>
            </section>
          </div>

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
