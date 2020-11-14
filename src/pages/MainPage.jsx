import React from 'react'
import { useHistory } from 'react-router-dom'
import AppFrame from './../components/AppFrame'
import CityList from './../components/CityList'

const cities = [
    {city: 'Calafell', country: 'España', countryCode: 'ES'}, 
    {city: 'Valencia', country: 'España', countryCode: 'ES'}
]

const MainPage = () => {

    const history = useHistory()

    const onClickHandler = (city, countryCode) => {
        // Nos permite cambiar la url por programacion
        history.push(`/city/${countryCode}/${city}`)
    }

    return (
        <AppFrame>
            <h2>Lista de ciudades</h2>
            <CityList 
            cities={cities} 
            onClickCity={onClickHandler}>
                
            </CityList>
        </AppFrame>
    )
}

export default MainPage
