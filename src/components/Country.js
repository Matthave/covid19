import React from 'react'

class Country extends React.Component {
  state = {
    confirmedCases: '',
    newCases: '',
    deaths: '',
    newDeaths: '',
    recovered: '',
    active: '',
    critical: '',
    casesPerM: '',
    deathsPerM: '',
    deathRatio: (this.props.deaths / this.props.cases) * 100
  }

  componentDidMount() {
    const { cases, todayCases, deaths, todayDeaths, recovered, active, critical, casesPerOneMillion, deathsPerOneMillion } = this.props;

    this.comma(cases, todayCases, deaths, todayDeaths, recovered, active, critical, casesPerOneMillion, deathsPerOneMillion)
  }


  comma = (confirmedCases, newCases, deaths, newDeaths, recovered, active, critical, casesPerM, deathsPerM) => {
    this.setState({
      confirmedCases: confirmedCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      newCases: newCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      deaths: deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      newDeaths: newDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      recovered: recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      active: active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      critical: critical.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      casesPerM: casesPerM.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      deathsPerM: deathsPerM.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    })
  }

  clickHandle = (e) => {
    e.target.parentNode.classList.toggle('tbody__tr--activeMode')
  }

  render() {

    const { country, darkMode } = this.props;
    const { confirmedCases, newCases, deaths, newDeaths, recovered, active, critical, casesPerM, deathsPerM } = this.state;

    return (
      <tr onClick={(e) => this.clickHandle(e)} className={darkMode ? "tbody__tr tbody__tr--darkMode" : "tbody__tr"}>
        <th className="tbody__th">{country}</th>
        <th className="tbody__th">{confirmedCases}</th>
        <th className="tbody__th todayCases" style={newCases !== '0' ? { backgroundColor: 'rgb(233, 203, 121)', color: '#000' } : {}}>{newCases !== '0' ? `+${newCases}` : null}</th>
        <th className="tbody__th">{deaths}</th>
        <th className="tbody__th todayDeaths" style={newDeaths !== '0' ? { backgroundColor: 'rgb(231, 46, 46)', color: 'white' } : {}}>{newDeaths !== '0' ? `+${newDeaths}` : null}</th>
        <th className="tbody__th">{recovered}</th>
        <th className="tbody__th">{active}</th>
        <th className="tbody__th">{critical}</th>
        <th className="tbody__th">{casesPerM}</th>
        <th className="tbody__th">{deathsPerM}</th>
        <th className="tbody__th">{this.state.deathRatio.toFixed(2)}%</th>
      </tr>
    )
  }
}

export default Country


// .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")