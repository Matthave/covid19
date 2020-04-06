import React from 'react';

class EachCountry extends React.Component {
  state = {
    index: 1,
  }

  render() {
    const { darkMode, countryFlag } = this.props;
    const { country, cases, todayCases, deaths, todayDeaths, recovered, critical } = this.props.countriesDetails

    const deathRatio = (deaths / cases) * 100;
    return (
      <>
        <div className={darkMode ? 'eachCountry eachCountry--darkMode' : 'eachCountry'}>
          <div className='eachCountry__header'>
            <h2 className={darkMode ? 'eachCountry__country eachCountry__country--darkMode' : 'eachCountry__country'}>{country}</h2>
            <img className='eachCountry__flag' src={countryFlag} alt="" />
          </div>



          <h3 className={darkMode ? 'eachCountry__text eachCountry__text--darkMode' : 'eachCountry__text'}>Cases: {cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} <span className={darkMode ? 'eachCountry__textSpan eachCountry__textSpan--darkMode' : 'eachCountry__textSpan'}> Today: {todayCases}</span></h3>

          <h3 className={darkMode ? 'eachCountry__text eachCountry__text--darkMode' : 'eachCountry__text'}>Deaths: {deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} <span className={darkMode ? 'eachCountry__textSpan eachCountry__textSpan--darkMode' : 'eachCountry__textSpan'}> Today: {todayDeaths}</span></h3>

          <h3 className={darkMode ? 'eachCountry__text eachCountry__text--darkMode' : 'eachCountry__text'}>Recovered: {recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} <span className={darkMode ? 'eachCountry__textSpan eachCountry__textSpan--darkMode' : 'eachCountry__textSpan'}> Critical: {critical}</span></h3>

          <h3 className={darkMode ? 'eachCountry__text eachCountry__text--darkMode' : 'eachCountry__text'}>Death Rate: {`${(deathRatio).toFixed(2)}%`}</h3>
        </div>
      </>
    )
  }
}

export default EachCountry