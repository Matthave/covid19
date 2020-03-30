import React from 'react';
import Country from './Country';
import Navigation from './Navigation';
import Global from './Global';
import DetailsCountry from './DetailsCountry';
import Table from './Table';
import { Route, Switch, HashRouter, } from 'react-router-dom';
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
    valueInput: '',
  }

  dayCases = 0;
  dayDeaths = 0;
  active = 0;
  critical = 0;

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
  }

  onChangeInput = (event) => {
    this.setState({
      valueInput: event.target.value
    })
  }

  render() {
    const { countries, valueInput, confirmed, deaths, recovered, } = this.state;

    const countriesArr = [...this.state.countries];

    const newCountries = countriesArr.filter((country) => (
      (country.country.toUpperCase()).includes(valueInput.toUpperCase())
    ))

    const country = countriesArr.map((country) => (
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
      <HashRouter>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path='/' render={() => <Global
              confirmed={confirmed}
              deaths={deaths}
              recovered={recovered} />}>
            </Route>

            <Route path='/countries' render={() => <DetailsCountry
              countries={countries}
              newCountries={newCountries}
              onChangeInput={this.onChangeInput}
              valueInput={valueInput}
            />}>
            </Route>

            <Route path='/table' render={() => <Table
              country={country}
              confirmed={confirmed}
              dayCases={this.dayCases}
              deaths={deaths}
              dayDeaths={this.dayDeaths}
              recovered={recovered}
              active={this.active}
              critical={this.critical} />} >
            </Route>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;