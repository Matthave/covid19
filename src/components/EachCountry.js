import React from 'react'

function EachCountry(props) {

  return (
    <>
      <div className={props.darkMode ? 'eachCountry eachCountry--darkMode' : 'eachCountry'}>
        <h2 className={props.darkMode ? 'eachCountry__country eachCountry__country--darkMode' : 'eachCountry__country'}>{props.countriesDetails.country}</h2>

        <h3 className={props.darkMode ? 'eachCountry__text eachCountry__text--darkMode' : 'eachCountry__text'}>Cases: {props.countriesDetails.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} <span className={props.darkMode ? 'eachCountry__textSpan eachCountry__textSpan--darkMode' : 'eachCountry__textSpan'}> Today: {props.countriesDetails.todayCases}</span></h3>

        <h3 className={props.darkMode ? 'eachCountry__text eachCountry__text--darkMode' : 'eachCountry__text'}>Deaths: {props.countriesDetails.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} <span className={props.darkMode ? 'eachCountry__textSpan eachCountry__textSpan--darkMode' : 'eachCountry__textSpan'}> Today: {props.countriesDetails.todayDeaths}</span></h3>

        <h3 className={props.darkMode ? 'eachCountry__text eachCountry__text--darkMode' : 'eachCountry__text'}>Recovered: {props.countriesDetails.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} <span className={props.darkMode ? 'eachCountry__textSpan eachCountry__textSpan--darkMode' : 'eachCountry__textSpan'}> Critical: {props.countriesDetails.critical}</span></h3>
      </div>
    </>
  )
}

export default EachCountry
