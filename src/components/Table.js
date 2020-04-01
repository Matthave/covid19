import React from 'react'

class Table extends React.Component {

  state = {
    activeTable: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeTable: true,
      })
    }, 100);
  }

  componentWillUnmount() {
    this.props.clearInput()
  }

  render() {
    const { darkMode, valueInput, onChangeInput, confirmed, dayCases, deaths, dayDeaths, recovered, active, critical, country } = this.props;

    return (
      <div className={this.state.activeTable ? "tableWrap tableWrap--active" : "tableWrap"}>
        <h1 className={darkMode ? "title title--darkMode" : "title"}>covid-19 coronavirus <span className='table__span'>Table</span></h1>
        <form className="table__form">
          <input type="text" className={darkMode ? "table__input table__input--darkMode" : "table__input"} value={valueInput} name='valueInput'
            onChange={(event) => onChangeInput(event)} placeholder="Type few letters of country" autoComplete="off"
          />
        </form>
        <table className='table'>
          <thead className={darkMode ? "thead thead--darkMode" : "thead"}>
            <tr className='thead__tr'>
              <th className='thead__th thead__thCountry'>Country</th>
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
              <th>{confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</th>
              <th>{`+${dayCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</th>
              <th>{deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</th>
              <th>{`+${dayDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</th>
              <th>{recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</th>
              <th>{active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</th>
              <th>{critical.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</th>
              <th>{Math.floor(confirmed / 7774).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</th>
              <th>{Math.floor(deaths / 7774).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</th>
              <th>Jan 10</th>
            </tr>
            {country}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table
