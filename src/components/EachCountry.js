import React from 'react'

function EachCountry(props) {

  const { darkMode } = props;
  const { country, cases, todayCases, deaths, todayDeaths, recovered, critical } = props.countriesDetails
  return (
    <>
      <div className={darkMode ? 'eachCountry eachCountry--darkMode' : 'eachCountry'}>
        <h2 className={darkMode ? 'eachCountry__country eachCountry__country--darkMode' : 'eachCountry__country'}>{country}</h2>

        <h3 className={darkMode ? 'eachCountry__text eachCountry__text--darkMode' : 'eachCountry__text'}>Cases: {cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} <span className={darkMode ? 'eachCountry__textSpan eachCountry__textSpan--darkMode' : 'eachCountry__textSpan'}> Today: {todayCases}</span></h3>

        <h3 className={props.darkMode ? 'eachCountry__text eachCountry__text--darkMode' : 'eachCountry__text'}>Deaths: {deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} <span className={darkMode ? 'eachCountry__textSpan eachCountry__textSpan--darkMode' : 'eachCountry__textSpan'}> Today: {todayDeaths}</span></h3>

        <h3 className={props.darkMode ? 'eachCountry__text eachCountry__text--darkMode' : 'eachCountry__text'}>Recovered: {recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} <span className={darkMode ? 'eachCountry__textSpan eachCountry__textSpan--darkMode' : 'eachCountry__textSpan'}> Critical: {critical}</span></h3>
      </div>
    </>
  )
}

export default EachCountry
