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
    }, 200);
  }

  componentWillUnmount() {
    this.props.clearInput()
  }

  render() {
    const { darkMode, valueInput, onChangeInput, confirmed, dayCases, deaths, dayDeaths, recovered, active, critical, country, clickHandleSort } = this.props;

    return (
      <div className={this.state.activeTable ? "tableWrap tableWrap--active" : "tableWrap"}>
        <h1 className={darkMode ? "title title--darkMode" : "title"}>covid-19 coronavirus <span className='table__span'>Table</span></h1>
        <form className="table__form">
          <input type="text" className={darkMode ? "table__input table__input--darkMode" : "table__input"} value={valueInput} name='valueInput'
            onChange={(event) => onChangeInput(event)} placeholder="Type few letters of country" autoComplete="off"
          />
        </form>
        <table className={darkMode ? "table table--darkMode" : "table"}>
          <thead className={darkMode ? "thead thead--darkMode" : "thead"}>
            <tr className='thead__tr'>
              <th className='thead__th thead__thCountry'>Country</th>
              <th className='thead__th' onClick={() => clickHandleSort('confirmedCases')}>Confirmed Cases<i className="fas fa-exchange-alt"></i></th>
              <th className='thead__th' onClick={() => clickHandleSort('newCases')}>New Cases<i className="fas fa-exchange-alt"></i></th>
              <th className='thead__th' onClick={() => clickHandleSort('deaths')}>Total Deaths<i className="fas fa-exchange-alt"></i></th>
              <th className='thead__th' onClick={() => clickHandleSort('newDeaths')}>New Deaths<i className="fas fa-exchange-alt"></i></th>
              <th className='thead__th' onClick={() => clickHandleSort('recovered')}>Total Revocered<i className="fas fa-exchange-alt"></i></th>
              <th className='thead__th' onClick={() => clickHandleSort('active')}>Active Cases<i className="fas fa-exchange-alt"></i></th>
              <th className='thead__th' onClick={() => clickHandleSort('critical')}>Critical<i className="fas fa-exchange-alt"></i></th>
              <th className='thead__th' onClick={() => clickHandleSort('casesPerM')}>Total Cases/ 1M<i className="fas fa-exchange-alt"></i></th>
              <th className='thead__th' onClick={() => clickHandleSort('deathsPerM')}>Deaths/ 1M<i className="fas fa-exchange-alt"></i></th>
              <th className='thead__th'>Death Rate</th>
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
              <th>{(confirmed / 7774).toFixed(2)}</th>
              <th>{(deaths / 7774).toFixed(2)}</th>
              <th>-</th>
            </tr>
            {country}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table
