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
    const { darkMode, confirmed, deaths, recovered } = this.props;
    return (
      <div className={this.state.activeGlobal ? "global global--active" : "global"}>
        <h1 className={darkMode ? "title title--darkMode" : "title"}>covid-19 coronavirus <span>Global</span></h1>
        <div className="global__sections">
          <section className={darkMode ? "global__section global__section--darkMode  " : "global__section"}>
            <h2 className={darkMode ? "global__title global__title--darkMode" : "global__title"}>CoronaVirus Confirmed Cases</h2>
            <h2 className="global__result global__confirmed">{confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
          </section>
          <section className={darkMode ? "global__section global__section--darkMode  " : "global__section"}>
            <h2 className={darkMode ? "global__title global__title--darkMode" : "global__title"}>CoronaVirus Deaths</h2>
            <h2 className="global__result global__deaths">{deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
          </section>
          <section className={darkMode ? "global__section global__section--darkMode  " : "global__section"}>
            <h2 className={darkMode ? "global__title global__title--darkMode" : "global__title"}>CoronaVirus Recovered</h2>
            <h2 className="global__result global__recovered">{recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
          </section>
        </div>

      </div>
    )
  }
}

export default Global
