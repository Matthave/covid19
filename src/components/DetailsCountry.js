import React from 'react'
import EachCountry from './EachCountry';


class DetailsCountry extends React.Component {
    componentWillUnmount() {
        this.props.clearInput()
    }

    render() {
        const eachCountry = this.props.newCountries.map((country) => (
            <EachCountry key={country.country} countriesDetails={country} darkMode={this.props.darkMode} />
        ))

        return (
            <div className='detailsCountry'>
                <h1 className={this.props.darkMode ? "title title--darkMode" : "title"}>covid-19 coronavirus <span className='detailsCountry__span'>Statistic for each country</span></h1>
                <form className="detailsCountry__form">
                    <input className={this.props.darkMode ? 'detailsCountry__input detailsCountry__input--darkMode' : 'detailsCountry__input'} type="text" onChange={(event) => this.props.onChangeInput(event)} value={this.props.valueInput} name='valueInput' placeholder="Type few letter's of country" autoComplete="off" />
                </form>
                {eachCountry}
            </div>
        )
    }
}

export default DetailsCountry
