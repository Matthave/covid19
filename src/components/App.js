import React from 'react';
import Country from './Country';
import logo from '../IMG/NewLogoSmallTransparent.png';
import '../css/style.css';

class App extends React.Component {

  state = {
    confirmed: '',
    recovered: '',
    deaths: '',
    todayCases: '',
    countries: '',
    foooterOnBottom: false,
  }

  dayCases = 0;
  dayDeaths = 0;
  active = 0;
  critical = 0;
  casasPerMillion = 0;
  deathsPerMillion = 0;

  componentDidMount() {
    fetch("https://covid-19-data.p.rapidapi.com/totals", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "ea797f220emshe356f29af1f15a8p10f7d6jsnf5ebb6e4ec59"
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw Error(res.status)
        }
      })
      .then(data => {
        this.setState({
          confirmed: data[0].confirmed,
          recovered: data[0].recovered,
          deaths: data[0].deaths,
        })
      })
      .catch(err => {
        console.log(err);
      });

    fetch("https://coronavirus-19-api.herokuapp.com/countries", {
      "method": "GET",
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          countries: [...data]
        })

        this.todayCases(data)
      })
      .catch(err => {
        console.log(err);
      });

    window.addEventListener('scroll', this.scroll)
  }

  todayCases = (data) => {
    const countires = [...data]

    countires.forEach((country) => {
      this.dayCases += country.todayCases
    })

    countires.forEach((country) => {
      this.dayDeaths += country.todayDeaths
    })

    countires.forEach((country) => {
      this.active += country.active
    })

    countires.forEach((country) => {
      this.critical += country.critical
    })

    // countires.forEach((country) => {
    //   this.casasPerMillion += country.casesPerOneMillion
    // })

    // countires.forEach((country) => {
    //   this.deathsPerMillion += country.deathsPerOneMillion
    // })
  }

  scroll = () => {
    const scrollHeight = window.scrollY;

    if (scrollHeight + window.innerHeight > document.body.clientHeight) {

      this.setState({
        foooterOnBottom: true,
      })
    } else {
      this.setState({
        foooterOnBottom: false,
      })
    }
  }


  render() {
    const countries = [...this.state.countries]
    const country = countries.map((country) => (
      < Country
        key={country.country}
        country={country.country}
        cases={country.cases}
        todayCases={country.todayCases}
        deaths={country.deaths}
        todayDeaths={country.todayDeaths}
        recovered={country.recovered}
        active={country.active}
        critical={country.critical}
        casesPerOneMillion={country.casesPerOneMillion}
        deathsPerOneMillion={country.deathsPerOneMillion}
        firstCase={country.firstCase}
      />
    ))
    return (
      <div className="App">
        <h1 className='title'>covid-19 coronavirus pandemic statistics</h1>
        <table className='table'>
          <thead className='thead'>
            <tr className='thead__tr'>
              <th className='thead__th'>Country</th>
              <th className='thead__th'>Confirmed Cases</th>
              <th className='thead__th'>New Cases</th>
              <th className='thead__th'>Total Deaths</th>
              <th className='thead__th'>New Deaths</th>
              <th className='thead__th'>Total Revocered</th>
              <th className='thead__th'>Active Cases</th>
              <th className='thead__th'>Critical</th>
              <th className='thead__th'>Total Cases/ 1M</th>
              <th className='thead__th'>Deaths/ 1M</th>
              <th className='thead__th'>First Case</th>
            </tr>
          </thead>

          <tbody>
            <tr className='wolrdTr'>
              <th>World</th>
              <th>{this.state.confirmed}</th>
              <th>{this.dayCases}</th>
              <th>{this.state.deaths}</th>
              <th>{this.dayDeaths}</th>
              <th>{this.state.recovered}</th>
              <th>{this.active}</th>
              <th>{this.critical}</th>
              <th>{Math.floor(this.state.confirmed / 7774)}</th>
              <th>{Math.floor(this.state.deaths / 7774)}</th>
              <th>Jan 10</th>
            </tr>
            {country}
          </tbody>

        </table>
        <footer className='footer' style={this.state.foooterOnBottom ? { backgroundColor: 'black', color: 'white' } : {}}>
          <h2 className='footer__name'>Created by MattHave</h2>
          <img src={logo} alt="MattHave's Logo" className="footer__logo" />
        </footer>
      </div>
    );
  }
}

export default App;
