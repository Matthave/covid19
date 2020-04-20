import React from 'react'
import pol from '../../IMG/pol.svg'

function PolandMap(props) {
  const { darkMode, polandStatistics, clickHandleDot, onMouseOut, provinceName, provinceCases, provinceDeaths, provinceVisibility } = props;
  return (
    <>
      <h2 className={darkMode ? "title title--darkMode" : "title"} >Poland Provinces Map</h2>
      <div className="polandMapWrap">
        <section className="polandMap">
          <img src={pol} alt="" className='polandMap__img' />
          <div
            className="mazowieckie dot"
            onClick={() => clickHandleDot('mazowieckie', polandStatistics)}
            onMouseOver={() => clickHandleDot
              ('mazowieckie', polandStatistics)}
            onMouseOut={() => onMouseOut()}>
          </div>

          <div
            className="wielkopolskie dot"
            onClick={() => clickHandleDot('wielkopolskie', polandStatistics)}
            onMouseOver={() => clickHandleDot('wielkopolskie', polandStatistics)}
            onMouseOut={() => onMouseOut()}>
          </div>

          <div
            className="lubuskie dot"
            onClick={() => clickHandleDot('lubuskie', polandStatistics)}
            onMouseOver={() => clickHandleDot('lubuskie', polandStatistics)}
            onMouseOut={() => onMouseOut()}>
          </div>

          <div
            className="zachPomorskie dot"
            onClick={() => clickHandleDot('zachodniopomorskie', polandStatistics)}
            onMouseOver={() => clickHandleDot('zachodniopomorskie', polandStatistics)}
            onMouseOut={() => onMouseOut()}>
          </div>

          <div
            className="pomorskie dot"
            onClick={() => clickHandleDot('pomorskie', polandStatistics)}
            onMouseOver={() => clickHandleDot('pomorskie', polandStatistics)}
            onMouseOut={() => onMouseOut()}>
          </div>

          <div
            className="kujPomorskie dot"
            onClick={() => clickHandleDot('kujawsko-pomorskie', polandStatistics)}
            onMouseOver={() => clickHandleDot('kujawsko-pomorskie', polandStatistics)}
            onMouseOut={() => onMouseOut()}>
          </div>

          <div
            className="mazurskie dot"
            onClick={() => clickHandleDot('warmińsko-mazurskie', polandStatistics)}
            onMouseOver={() => clickHandleDot('warmińsko-mazurskie', polandStatistics)}
            onMouseOut={() => onMouseOut()}>
          </div>

          <div
            className="podlaskie dot"
            onClick={() => clickHandleDot('podlaskie', polandStatistics)}
            onMouseOver={() => clickHandleDot('podlaskie', polandStatistics)}
            onMouseOut={() => onMouseOut()}>
          </div>

          <div
            className="lubelskie dot"
            onClick={() => clickHandleDot('lubelskie', polandStatistics)}
            onMouseOver={() => clickHandleDot('lubelskie', polandStatistics)}
            onMouseOut={() => onMouseOut()}>
          </div>

          <div
            className="podkarpackie dot"
            onClick={() => clickHandleDot('podkarpackie', polandStatistics)}
            onMouseOver={() => clickHandleDot('podkarpackie', polandStatistics)}
            onMouseOut={() => onMouseOut()}>
          </div>

          <div
            className="swietokrzyskie dot"
            onClick={() => clickHandleDot('świętokrzyskie', polandStatistics)}
            onMouseOver={() => clickHandleDot('świętokrzyskie', polandStatistics)}
            onMouseOut={() => onMouseOut()}>
          </div>

          <div
            className="lodzkie dot"
            onClick={() => clickHandleDot('łódzkie', polandStatistics)}
            onMouseOver={() => clickHandleDot('łódzkie', polandStatistics)}
            onMouseOut={() => onMouseOut()}>
          </div>

          <div
            className="slaskie dot"
            onClick={() => clickHandleDot('śląskie', polandStatistics)} onMouseOver={() => clickHandleDot('śląskie', polandStatistics)}
            onMouseOut={() => onMouseOut()}>
          </div>

          <div
            className="opolskie dot"
            onClick={() => clickHandleDot('opolskie', polandStatistics)}
            onMouseOver={() => clickHandleDot('opolskie', polandStatistics)}
            onMouseOut={() => onMouseOut()}>
          </div>

          <div
            className="dolnoslaskie dot"
            onClick={() => clickHandleDot('dolnośląskie', polandStatistics)}
            onMouseOver={() => clickHandleDot('dolnośląskie', polandStatistics)}
            onMouseOut={() => onMouseOut()}>
          </div>

          <div
            className="malopolskie dot"
            onClick={() => clickHandleDot('małopolskie', polandStatistics)}
            onMouseOver={() => clickHandleDot('małopolskie', polandStatistics)}
            onMouseOut={() => onMouseOut()}>
          </div>

        </section>

        <section className={darkMode ? "currentProvince currentProvince--darkMode" : "currentProvince"}>
          <h2 className='currentProvince__data'>Province <span className={provinceVisibility ? 'currentProvince__span currentProvince__span--show mapSpanName ' : 'currentProvince__span mapSpanName'}>{provinceName}</span></h2>

          <h2 className='currentProvince__data'>Cases <span className={provinceVisibility ? 'currentProvince__span currentProvince__span--show mapSpanCases ' : 'currentProvince__span mapSpanCases'}>{provinceCases}</span></h2>

          <h2 className='currentProvince__data'>Deaths <span className={provinceVisibility ? 'currentProvince__span currentProvince__span--show mapSpanDeaths ' : 'currentProvince__span mapSpanDeaths'}>{provinceDeaths}</span></h2>
        </section>
      </div>
    </>
  )
}

export default PolandMap
