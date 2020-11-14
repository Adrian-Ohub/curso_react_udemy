import React from 'react'
import Grid from '@material-ui/core/Grid'
import CityInfo from './../components/CityInfo'
import Weather from './../components/Weather'
import WeatherDetails from './../components/WeatherDetails'
import ForecastChart from './../components/ForecastChart'
import Forecast from './../components/Forecast'
import AppFrame from '../components/AppFrame'

const dataExample = [
    {
        "dayHour": "Jue 18",
        "min": 14,
        "max": 22,
    },
    {
        "dayHour": "Vie 19",
        "min": 18,
        "max": 27,
    },
    {
        "dayHour": "Sab 20",
        "min": 18,
        "max": 28,
    },
    {
        "dayHour": "Dom 21",
        "min": 18,
        "max": 25,
    }   
]
const forecastItemsExample = [
    {   weekDay: 'Jueves',
        hour: 10,
        state: 'Clear', 
        temperature: 20
    },
    {   weekDay: 'Viernes',
        hour: 10,
        state: 'Clouds', 
        temperature: 20
    },
    {   weekDay: 'Sabado',
        hour: 10,
        state: 'Thunderstorm', 
        temperature: 20
    },
    {   weekDay: 'Domingo',
        hour: 10,
        state: 'Rain', 
        temperature: 20
    }  
]


const CityPage = () => {

    const city = 'Calafell'
    const country = 'España'
    const state = 'Clear'
    const temperature = 10
    const humidity = 45
    const wind = 20
    const data = dataExample
    const forecastItemList = forecastItemsExample

    return (
        <AppFrame>
            <Grid container
                        justify='space-around'
                        direction='column'
                        spacing={2}
            >
                <Grid container item 
                    xs={12}
                    justify='center'
                    display='flex'
                    alignItems='center'
                >
                <CityInfo city={city} country={country}></CityInfo>
                </Grid>
                
                <Grid container item 
                    justify='center'
                >
                        <Weather state={state} temperature={temperature}></Weather>
                        <WeatherDetails humidity={humidity} wind={wind}></WeatherDetails>
                </Grid >

                <Grid item>
                <ForecastChart data={data}></ForecastChart>
                </Grid>
                
                <Grid item>
                <Forecast forecastItemList={forecastItemList}></Forecast>
                </Grid>
            </Grid>
        </AppFrame>
        
    )
}

export default CityPage
