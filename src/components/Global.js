import React from 'react'

function Global(props) {
    return (
        <div className='global' >
            <h1 className='title'>covid-19 coronavirus <span>Global</span></h1>
            <div className="global__sections">
                <section className="global__section global__cases">
                    <h2 className="global__title">CoronaVirus Confirmed Cases</h2>
                    <h2 className="global__result global__confirmed">{props.confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
                </section>
                <section className="global__section global__deaths">
                    <h2 className="global__title">CoronaVirus Deaths</h2>
                    <h2 className="global__result global__deaths">{props.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
                </section>
                <section className="global__section global__recovered">
                    <h2 className="global__title">CoronaVirus Recovered</h2>
                    <h2 className="global__result global__recovered">{props.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
                </section>
            </div>

        </div>
    )
}

export default Global
