import React from 'react'

function EachCountry(props) {
  return (
    <>
      <div className='eachCountry'>
        <h2 className='eachCountry__country'>{props.countriesDetails.country}</h2>
        <h3 className='eachCountry__text'>Cases: {props.countriesDetails.cases}</h3>
        <h3 className='eachCountry__text'>Deaths: {props.countriesDetails.deaths}</h3>
        <h3 className='eachCountry__text'>Recovered: {props.countriesDetails.recovered}</h3>
      </div>
    </>
  )
}

export default EachCountry
