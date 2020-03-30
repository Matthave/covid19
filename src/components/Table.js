import React from 'react'

function Table(props) {
  return (
    <>
      <h1 className='title'>covid-19 coronavirus <span className='table__span'>Table</span></h1>
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
            <th>{props.confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</th>
            <th>{`+${props.dayCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</th>
            <th>{props.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</th>
            <th>{`+${props.dayDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</th>
            <th>{props.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</th>
            <th>{props.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</th>
            <th>{props.critical.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</th>
            <th>{Math.floor(props.confirmed / 7774).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</th>
            <th>{Math.floor(props.deaths / 7774).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</th>
            <th>Jan 10</th>
          </tr>
          {props.country}
        </tbody>
      </table>
    </>
  )
}

export default Table
