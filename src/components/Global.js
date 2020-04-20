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

    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  render() {
    const { darkMode, updated, confirmed, deaths, recovered, todayCases, todayDeaths, active, critical, tests, testsPerMillion } = this.props;
    const closedCases = confirmed - active;
    const currentUpdate = (new Date(updated)).toString();

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
              <h2 className="global__result global__deaths">{deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} <span className={darkMode ? 'global__span global__span--darkMode' : 'global__span'}>({((deaths / closedCases) * 100).toFixed(2)}%)</span> </h2>
            </div>
            <div className='global__statsRow'>
              <h2 className={darkMode ? "global__title global__title--darkMode" : "global__title"}>CoronaVirus Critical</h2>
              <h2 className="global__result global__deaths critical">{critical.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}<span className={darkMode ? 'global__span global__span--darkMode' : 'global__span'}>({((critical / active) * 100).toFixed(2)}%)</span></h2>
            </div>
          </section>

          <section className={darkMode ? "global__section global__section--darkMode  " : "global__section"}>
            <h2 className={darkMode ? "global__title global__title--darkMode" : "global__title"}>CoronaVirus Recovered</h2>
            <h2 className="global__result global__recovered">{recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}<span className={darkMode ? 'global__span global__span--darkMode' : 'global__span'}>({((recovered / closedCases) * 100).toFixed(2)}%)</span></h2>
          </section>

          <section className={darkMode ? "global__section global__section--darkMode  " : "global__section"}>
            <h2 className={darkMode ? "global__title global__title--darkMode" : "global__title"}>CoronaVirus Tests Performed</h2>
            <h2 className="global__result global__tests">{tests.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>

            <h2 className={darkMode ? "global__title global__title--darkMode" : "global__title"}>CoronaVirus Tests Performed / 1 million</h2>
            <h2 className="global__result global__tests">{Math.floor(testsPerMillion).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
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

          <footer className={darkMode ? "global__footer global__footer--darkMode" : "global__footer"}><h3>{currentUpdate}</h3></footer>
        </div>

      </div>
    )
  }
}

export default Global
