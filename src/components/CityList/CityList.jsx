import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Alert from '@material-ui/lab/Alert'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import CityInfo from '../CityInfo'
import Weather from '../Weather'
import convertUnits from 'convert-units'

const getCityCode = (city, countryCode) => (
    `${city}-${countryCode}`
)


// RenderCityandCountry se va a convertir en una funcion que retorna otra funcion
const renderCityandCountry = (eventOnClickCity) => {
    const renderCityAndCountryInternal = (cityAndCountry, weather) => {
        const { city, country, countryCode } = cityAndCountry
        //const { temperature, state } = weather
        return (
            <ListItem 
                button
                key={getCityCode(city, countryCode)} 
                onClick={() => {
                    return eventOnClickCity(city, countryCode)
                }}
            >
                <Grid 
                    container
                    justify='center'
                    alignItems='center'
                >
                    <Grid item md={8}
                    xs={12}
                    >
                        <CityInfo city={city} country={country} />
                    </Grid>
                    <Grid item md={4}
                    xs={12}
                    >
                        
                    <Weather 
                        temperature={weather && weather.temperature} 
                        state={weather && weather.state} 
                    />
                        
                    </Grid>
                </Grid>
            </ListItem>   
        )
    }
    return renderCityAndCountryInternal
}

const CityList = ({ cities, onClickCity }) => {

    const [allWeather, setallWeather] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => {
        const setWeather = async (city, countryCode) => {
            const appid = 'c25e9e87baa08d4bb293df078d3fa47a'
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`
            
            try {
                const response = await axios.get(url)

                const { data } = response
                const temperature = Number(convertUnits(data.main.temp).from('K').to('C').toFixed(0))
                const state = data.weather[0].main
                
                const propName = getCityCode(city, countryCode)
                const propValue = { temperature, state }

                setallWeather( allWeather =>( { ...allWeather, [propName] : propValue } ))
                
            } catch (error) {
                // Errores que responde el servidor
                if(error.response) {
                    setError('Error en el servidor')
                } 
                //Errores que suceden por no llegar al servidor
                else if (error.request) {
                    setError('Verifique la conexión a internet')
                }
                // Errores imprevistos
                else {
                    setError('Uops! ha ocurrido un error inesperado')
                }
            }
            
            /*
            .then(response => {
                const { data } = response
                const temperature = Number(convertUnits(data.main.temp).from('K').to('C').toFixed(0))
                const state = data.weather[0].main
                
                const propName = `${city}-${country}`
                const propValue = { temperature, state }

                setallWeather( allWeather =>( { ...allWeather, [propName] : propValue } ))
            })
            .catch(error => {
                // Errores que responde el servidor
                if(error.response) {
                    setError('Error en el servidor')
                } 
                //Errores que suceden por no llegar al servidor
                else if (error.request) {
                    setError('Verifique la conexión a internet')
                }
                // Errores imprevistos
                else {
                    setError('Uops! ha ocurrido un error inesperado')
                }
            })
            */
        }

        cities.forEach(({ city, countryCode }) => {
            setWeather(city, countryCode)
        })

    }, [cities])

    const funcAux = renderCityandCountry(onClickCity)
    return (  
        <div>
            {
                error && <Alert onClose={ () => setError(null) } severity='error'>{error}</Alert>
            }
            <List>
                {
                    cities.map(cityAndCountry =>
                            funcAux(cityAndCountry, 
                                allWeather[getCityCode(cityAndCountry.city, cityAndCountry.countryCode)])
                        )
                }      
            </List>
        </div>
    )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            city: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
            countryCode: PropTypes.string.isRequired,
        })
    ).isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default CityList
