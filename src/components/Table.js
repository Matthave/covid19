import React from 'react'

class Table extends React.Component {

  componentWillUnmount() {
    this.props.clearInput()
  }

  render() {
    return (
      <>
        <h1 className={this.props.darkMode ? "title title--darkMode" : "title"}>covid-19 coronavirus <span className='table__span'>Table</span></h1>
        <form className="table__form">
          <input type="text" className={this.props.darkMode ? "table__input table__input--darkMode" : "table__input"} value={this.props.valueInput} name='valueInput'
            onChange={(event) => this.props.onChangeInput(event)} placeholder="Type few letter's of country" autoComplete="off"
          />
        </form>
        <table className='table'>
          <thead className={this.props.darkMode ? "thead thead--darkMode" : "thead"}>
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
              <th>{this.props.confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</th>
              <th>{`+${this.props.dayCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</th>
              <th>{this.props.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</th>
              <th>{`+${this.props.dayDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</th>
              <th>{this.props.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</th>
              <th>{this.props.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</th>
              <th>{this.props.critical.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</th>
              <th>{Math.floor(this.props.confirmed / 7774).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</th>
              <th>{Math.floor(this.props.deaths / 7774).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</th>
              <th>Jan 10</th>
            </tr>
            {this.props.country}
          </tbody>
        </table>
      </>
    )
  }
}

export default Table
