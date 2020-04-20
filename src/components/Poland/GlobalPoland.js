import React from 'react'

function GlobalPoland(props) {
  const { darkMode, polandAllStats } = props;
  return (
    <>
      <h1 className={darkMode ? "title title--darkMode" : "title"} >covid-19 coronavirus <span className='poland__span'>Poland Stats</span></h1>
      <section className="globalPoland">
        <div className={darkMode ? 'globalPoland__section globalPoland__section--darkMode' : 'globalPoland__section'}>
          <div className='globalPoland__wrap'>
            <h2 className='globalPoland__text'>Confirmed Cases </h2>
            <span className="globalPoland__span">{(polandAllStats[0].cases).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
          </div>
          <div className='globalPoland__wrap'>
            <h2 className='globalPoland__text'>Deaths </h2>
            <span className="globalPoland__span globalPoland__spanDeaths">{polandAllStats[0].deaths}</span>
          </div>
          <div className='globalPoland__wrap'>
            <h2 className='globalPoland__text'>Recovered </h2>
            <span className="globalPoland__span globalPoland__spanRecovered">{(polandAllStats[0].recovered).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
          </div>

          <div className='globalPoland__wrap'>
            <h2 className='globalPoland__text'>Death Rate</h2>
            <span className="globalPoland__span globalPoland__spanMortality">{((polandAllStats[0].deaths / polandAllStats[0].cases) * 100).toFixed(2)}%</span>
          </div>
        </div>

        <div className={darkMode ? 'globalPoland__section globalPoland__section--darkMode' : 'globalPoland__section'}>
          <div className='globalPoland__wrap'>
            <h2 className='globalPoland__text'>New Cases </h2>
            <span className="globalPoland__span globalPoland__spanNewCases">+{polandAllStats[0].todayCases}</span>
          </div>

          <div className='globalPoland__wrap'>
            <h2 className='globalPoland__text'>New Deaths </h2>
            <span className="globalPoland__span globalPoland__spanNewDeaths">+{polandAllStats[0].todayDeaths}</span>
          </div>
        </div>

        <div className={darkMode ? 'globalPoland__section globalPoland__section--darkMode' : 'globalPoland__section'}>
          <div className='globalPoland__wrap'>
            <h2 className='globalPoland__text'>Active </h2>
            <span className="globalPoland__span globalPoland__spanActive">{(polandAllStats[0].active).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
          </div>
          <div className='globalPoland__wrap'>
            <h2 className='globalPoland__text'>Critical </h2>
            <span className="globalPoland__span globalPoland__spanCritical">{polandAllStats[0].critical}</span>
          </div>
        </div>

        <div className={darkMode ? 'globalPoland__section globalPoland__section--darkMode' : 'globalPoland__section'}>
          <div className='globalPoland__wrap'>
            <h2 className='globalPoland__text'>Tests Performed </h2>
            <span className="globalPoland__span globalPoland__spanTest">{(polandAllStats[0].tests).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
          </div>
          <div className='globalPoland__wrap'>
            <h2 className='globalPoland__text'>Tests Performed / 1 million</h2>
            <span className="globalPoland__span globalPoland__spanTest">{(polandAllStats[0].testsPerOneMillion).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
          </div>
        </div>

        <div className={darkMode ? 'globalPoland__section globalPoland__section--darkMode' : 'globalPoland__section'}>
          <div className='globalPoland__wrap'>
            <h2 className='globalPoland__text'>Active Cases / 1 million </h2>
            <span className="globalPoland__span">{polandAllStats[0].casesPerOneMillion}</span>
          </div>
          <div className='globalPoland__wrap'>
            <h2 className='globalPoland__text'>Deaths / 1 million</h2>
            <span className="globalPoland__span">{polandAllStats[0].deathsPerOneMillion}</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default GlobalPoland
