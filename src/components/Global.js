import React from 'react'

class Global extends React.Component {
  state = {
    activeGlobal: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeGlobal: true
      })
    }, 200);
  }

  render() {
    const { darkMode, confirmed, deaths, recovered, todayCases, todayDeaths, active, critical } = this.props;
    const closedCases = confirmed - active;
    return (
      <div className={this.state.activeGlobal ? "global global--active" : "global"}>
        <h1 className={darkMode ? "title title--darkMode" : "title"}>covid-19 coronavirus <span>Global</span></h1>
        <div className="global__sections">
          <section className={darkMode ? "global__section global__section--darkMode  " : "global__section"}>
            <div className='global__statsRow'>
              <h2 className={darkMode ? "global__title global__title--darkMode" : "global__title"}>CoronaVirus Confirmed Cases</h2>
              <h2 className="global__result global__confirmed">{confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
            </div>
            <div className='global__statsRow'>
              <h2 className={darkMode ? "global__title global__title--darkMode" : "global__title"}>CoronaVirus Active Cases</h2>
              <h2 className="global__result global__confirmed activeGlobal">{active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
            </div>
            <div className='global__statsRow'>
              <h2 className={darkMode ? "global__title global__title--darkMode" : "global__title"}>CoronaVirus Closed Cases</h2>
              <h2 className="global__result global__confirmed activeGlobal">{(closedCases).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
            </div>


          </section>

          <section className={darkMode ? "global__section global__section--darkMode  " : "global__section"}>
            <div className='global__statsRow'>
              <h2 className={darkMode ? "global__title global__title--darkMode" : "global__title"}>CoronaVirus Deaths</h2>
              <h2 className="global__result global__deaths">{deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} <span className={darkMode ? 'global__span global__span--darkMode' : 'global__span'}>({Math.floor((deaths / closedCases) * 100)}%)</span> </h2>
            </div>
            <div className='global__statsRow'>
              <h2 className={darkMode ? "global__title global__title--darkMode" : "global__title"}>CoronaVirus Critical</h2>
              <h2 className="global__result global__deaths critical">{critical.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}<span className={darkMode ? 'global__span global__span--darkMode' : 'global__span'}>({Math.floor((critical / active) * 100)}%)</span></h2>
            </div>
          </section>

          <section className={darkMode ? "global__section global__section--darkMode  " : "global__section"}>
            <h2 className={darkMode ? "global__title global__title--darkMode" : "global__title"}>CoronaVirus Recovered</h2>
            <h2 className="global__result global__recovered">{recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}<span className={darkMode ? 'global__span global__span--darkMode' : 'global__span'}>({Math.floor((recovered / closedCases) * 100)}%)</span></h2>
          </section>


          <h1 className={darkMode ? "title title--darkMode" : "title"}>covid-19 coronavirus <span>Today Global</span></h1>
          <section className={darkMode ? "global__section global__section--darkMode  " : "global__section"}>
            <h2 className={darkMode ? "global__title global__title--darkMode" : "global__title"}>CoronaVirus Today Cases</h2>
            <h2 className="global__result global__confirmed todayCases">+{todayCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
          </section>

          <section className={darkMode ? "global__section global__section--darkMode  " : "global__section"}>
            <h2 className={darkMode ? "global__title global__title--darkMode" : "global__title"}>CoronaVirus Today Deaths</h2>
            <h2 className="global__result global__deaths todayDeaths">+{todayDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
          </section>
        </div>

      </div>
    )
  }
}

export default Global
