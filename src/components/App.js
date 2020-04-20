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
    updated: '',
    confirmed: '',
    recovered: '',
    deaths: '',
    todayCases: '',
    todayDeaths: '',
    active: '',
    critical: '',
    countries: '',
    tests: '',
    testsPerMillion: '',
    polandStats: '',
    darkMode: false,
    valueInput: '',
    sort: 'confirmedCases',
    coverVisibility: true,
  }

  dayCases = 0;
  dayDeaths = 0;
  active = 0;
  critical = 0;
  sortFlag = true;

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        coverVisibility: false,
      })
    }, 500);
    fetch("https://corona.lmao.ninja/v2/all")
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw Error(res.status)
        }
      })
      .then(data => {
        this.setState({
          updated: data.updated,
          confirmed: data.cases,
          recovered: data.recovered,
          deaths: data.deaths,
          todayCases: data.todayCases,
          todayDeaths: data.todayDeaths,
          active: data.active,
          critical: data.critical,
          tests: data.tests,
          testsPerMillion: data.testsPerOneMillion,
        })
      })
      .catch(err => {
        console.log(err);
      });

    fetch("https://corona.lmao.ninja/v2/countries", {
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

    fetch("https://services1.arcgis.com/YmCK8KfESHdxUQgm/arcgis/rest/services/wojewodztwa_corona_widok/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=SUM_Confirmed%20desc&resultOffset=0&resultRecordCount=25&cacheHint=true")
      .then(res => res.json())
      .then(data => this.setState({
        polandStats: data.features
      }))
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
    this.setState({
      sort: sortBy,
    })
    this.sortFlag = !this.sortFlag
  }

  render() {
    const { updated, countries, valueInput, confirmed, deaths, recovered, todayCases, todayDeaths, active, critical, tests, testsPerMillion, darkMode, sort, coverVisibility } = this.state;
    const countriesArr = [...countries];


    if (sort === 'deaths') {
      if (sort === 'deaths' && this.sortFlag) {
        countriesArr.sort(function (a, b) { return b.deaths - a.deaths })
      } else if (sort === 'deaths' && !this.sortFlag) {
        countriesArr.sort(function (a, b) { return a.deaths - b.deaths })
      }
    }

    if (sort === 'confirmedCases') {
      if (sort === 'confirmedCases' && this.sortFlag) {
        countriesArr.sort(function (a, b) { return b.cases - a.cases })
      } else if (sort === 'confirmedCases' && !this.sortFlag) {
        countriesArr.sort(function (a, b) { return a.cases - b.cases })
      }
    }

    if (sort === 'newCases') {
      if (sort === 'newCases' && this.sortFlag) {
        countriesArr.sort(function (a, b) { return b.todayCases - a.todayCases })
      } else if (sort === 'newCases' && !this.sortFlag) {
        countriesArr.sort(function (a, b) { return a.todayCases - b.todayCases })
      }
    }

    if (sort === 'newDeaths') {
      if (sort === 'newDeaths' && this.sortFlag) {
        countriesArr.sort(function (a, b) { return b.todayDeaths - a.todayDeaths })
      } else if (sort === 'newDeaths' && !this.sortFlag) {
        countriesArr.sort(function (a, b) { return a.todayDeaths - b.todayDeaths })
      }
    }

    if (sort === 'recovered') {
      if (sort === 'recovered' && this.sortFlag) {
        countriesArr.sort(function (a, b) { return b.recovered - a.recovered })
      } else if (sort === 'recovered' && !this.sortFlag) {
        countriesArr.sort(function (a, b) { return a.recovered - b.recovered })
      }
    }

    if (sort === 'active') {
      if (sort === 'active' && this.sortFlag) {
        countriesArr.sort(function (a, b) { return b.active - a.active })
      } else if (sort === 'active' && !this.sortFlag) {
        countriesArr.sort(function (a, b) { return a.active - b.active })
      }
    }

    if (sort === 'critical') {
      if (sort === 'critical' && this.sortFlag) {
        countriesArr.sort(function (a, b) { return b.critical - a.critical })
      } else if (sort === 'critical' && !this.sortFlag) {
        countriesArr.sort(function (a, b) { return a.critical - b.critical })
      }
    }

    if (sort === 'casesPerM') {
      if (sort === 'casesPerM' && this.sortFlag) {
        countriesArr.sort(function (a, b) { return b.casesPerOneMillion - a.casesPerOneMillion })
      } else if (sort === 'casesPerM' && !this.sortFlag) {
        countriesArr.sort(function (a, b) { return a.casesPerOneMillion - b.casesPerOneMillion })
      }
    }

    if (sort === 'deathsPerM') {
      if (sort === 'deathsPerM' && this.sortFlag) {
        countriesArr.sort(function (a, b) { return b.deathsPerOneMillion - a.deathsPerOneMillion })
      } else if (sort === 'deathsPerM' && !this.sortFlag) {
        countriesArr.sort(function (a, b) { return a.deathsPerOneMillion - b.deathsPerOneMillion })
      }
    }

    if (sort === 'country') {
      if (sort === 'country' && this.sortFlag) {
        countriesArr.reverse()
      } else if (sort === 'country' && !this.sortFlag) {
        countriesArr.sort()
      }
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
          {this.state.countries ? <Switch>
            <Route exact path='/' render={() => <Global
              updated={updated}
              confirmed={confirmed}
              deaths={deaths}
              recovered={recovered}
              todayCases={todayCases}
              todayDeaths={todayDeaths}
              active={active}
              critical={critical}
              tests={tests}
              testsPerMillion={testsPerMillion}
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
            <Route path='/poland' render={() => <Poland
              darkMode={darkMode}
              polandStats={this.state.polandStats}
              countries={countries}
            />}></Route>
          </Switch> : 'Loading'}

          <div className={coverVisibility ? "cover" : "cover cover--hide"}></div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
