import React from 'react'
import EachCountry from './EachCountry';


class DetailsCountry extends React.Component {
    state = {
        activeDetailsCountry: false,
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                activeDetailsCountry: true
            })
        }, 100);
    }

    componentWillUnmount() {
        this.props.clearInput()
    }

    render() {
        const eachCountry = this.props.newCountries.map((country) => (
            <EachCountry key={country.country} countriesDetails={country} darkMode={this.props.darkMode} />
        ))

        return (
            <div className={this.state.activeDetailsCountry ? "detailsCountry detailsCountry--active" : "detailsCountry"}>
                <h1 className={this.props.darkMode ? "title title--darkMode" : "title"}>covid-19 coronavirus <span className='detailsCountry__span'>Statistic for each country</span></h1>
                <form className="detailsCountry__form">
                    <input className={this.props.darkMode ? 'detailsCountry__input detailsCountry__input--darkMode' : 'detailsCountry__input'} type="text" onChange={(event) => this.props.onChangeInput(event)} value={this.props.valueInput} name='valueInput' placeholder="Type few letters of country" autoComplete="off" />
                </form>
                {eachCountry}
            </div>
        )
    }
}

export default DetailsCountry
