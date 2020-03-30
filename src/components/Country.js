import React from 'react'

function Country(props) {

  const { country, cases, todayCases, deaths, todayDeaths, recovered, active, critical, casesPerOneMillion, deathsPerOneMillion, firstCase } = props;

  return (
    <tr className='tbody__tr'>
      <th className="tbody__th">{country}</th>
      <th className="tbody__th">{cases}</th>
      <th className="tbody__th todayCases" style={todayCases ? { backgroundColor: 'rgb(233, 203, 121' } : {}}>{todayCases ? `+${todayCases}` : null}</th>
      <th className="tbody__th">{deaths}</th>
      <th className="tbody__th todayDeaths" style={todayDeaths ? { backgroundColor: 'rgb(231, 46, 46)', color: 'white' } : {}}>{todayDeaths ? `+${todayDeaths}` : null}</th>
      <th className="tbody__th">{recovered}</th>
      <th className="tbody__th">{active}</th>
      <th className="tbody__th">{critical}</th>
      <th className="tbody__th">{casesPerOneMillion}</th>
      <th className="tbody__th">{deathsPerOneMillion}</th>
      <th className="tbody__th">{firstCase}</th>
    </tr>
  )
}

export default Country
