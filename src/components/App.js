import React from 'react';
import Country from './Country';
import Navigation from './Navigation';
import Global from './Global';
import DetailsCountry from './DetailsCountry';
import Table from './Table';
import Chart from './Chart';
import Poland from './Poland';
import { Route, Switch, HashRouter, } from 'react-router-dom';
import '../css/style.css';

class App extends React.Component {

  state = {
    confirmed: '',
    recovered: '',
    deaths: '',
    todayCases: '',
    todayDeaths: '',
    active: '',
    critical: '',
    countries: '',
    darkMode: false,
    valueInput: '',
    sort: 'confirmedCases',
  }

  dayCases = 0;
  dayDeaths = 0;
  active = 0;
  critical = 0;

  componentDidMount() {
    fetch("https://corona.lmao.ninja/all")
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw Error(res.status)
        }
      })
      .then(data => {
        this.setState({
          confirmed: data.cases,
          recovered: data.recovered,
          deaths: data.deaths,
          todayCases: data.todayCases,
          todayDeaths: data.todayDeaths,
          active: data.active,
          critical: data.critical,
        })
      })
      .catch(err => {
        console.log(err);
      });

    fetch("https://corona.lmao.ninja/countries?sort=country", {
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
      [event.target.name]: event.target.value
    })
  }

  clearInput = () => {
    this.setState({
      valueInput: ''
    })
  }

  toggleDarkMode = () => {
    this.setState({
      darkMode: !this.state.darkMode
    })
  }

  clickHandleSort = (sortBy) => {
    console.log(sortBy)
    this.setState({
      sort: sortBy,
    })
  }

  render() {
    const { countries, valueInput, confirmed, deaths, recovered, todayCases, todayDeaths, active, critical, darkMode, sort } = this.state;

    const countriesArr = [...countries];

    if (sort === 'deaths') {
      countriesArr.sort(function (a, b) { return b.deaths - a.deaths })
    } else if (sort === 'confirmedCases') {
      countriesArr.sort(function (a, b) { return b.cases - a.cases })
    } else if (sort === 'newCases') {
      countriesArr.sort(function (a, b) { return b.todayCases - a.todayCases })
    } else if (sort === 'newDeaths') {
      countriesArr.sort(function (a, b) { return b.todayDeaths - a.todayDeaths })
    } else if (sort === 'recovered') {
      countriesArr.sort(function (a, b) { return b.recovered - a.recovered })
    } else if (sort === 'active') {
      countriesArr.sort(function (a, b) { return b.active - a.active })
    } else if (sort === 'critical') {
      countriesArr.sort(function (a, b) { return b.critical - a.critical })
    } else if (sort === 'casesPerM') {
      countriesArr.sort(function (a, b) { return b.casesPerOneMillion - a.casesPerOneMillion })
    } else if (sort === 'deathsPerM') {
      countriesArr.sort(function (a, b) { return b.deathsPerOneMillion - a.deathsPerOneMillion })
    }


    const newCountries = countriesArr.filter((country) => (
      (country.country.toUpperCase()).includes(valueInput.toUpperCase())
    ))

    darkMode ? document.body.style.backgroundColor = "#000" : document.body.style.backgroundColor = "#fff"

    const country = newCountries.map((country) => (
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
        darkMode={darkMode}
      />
    ))
    return (
      <HashRouter>
        <div className="App">
          <Navigation darkMode={darkMode} toggleDarkMode={this.toggleDarkMode} />
          <Switch>
            <Route exact path='/' render={() => <Global
              confirmed={confirmed}
              deaths={deaths}
              recovered={recovered}
              todayCases={todayCases}
              todayDeaths={todayDeaths}
              active={active}
              critical={critical}
              darkMode={darkMode}
            />}>
            </Route>

            <Route path='/countries' render={() => <DetailsCountry
              countries={countries}
              newCountries={newCountries}
              onChangeInput={this.onChangeInput}
              valueInput={valueInput}
              clearInput={this.clearInput}
              darkMode={darkMode}
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
              critical={this.critical}
              valueInput={valueInput}
              onChangeInput={this.onChangeInput}
              clearInput={this.clearInput}
              clickHandleSort={this.clickHandleSort}
              darkMode={darkMode}
            />}
            >
            </Route>
            <Route path='/chart' render={() => <Chart darkMode={darkMode} />}></Route>
            <Route path='/poland' render={() => <Poland darkMode={darkMode} />}></Route>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
