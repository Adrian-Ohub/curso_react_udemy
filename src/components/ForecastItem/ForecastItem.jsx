import React from 'react'
import PropTypes from 'prop-types'
import IconState, { validValues } from './../IconState'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { IconContext } from 'react-icons'

const ForecastItem = ({ weekDay, hour, state, temperature }) => {
    return (
        <Grid 
        container
        direction='column'
        justify='center'
        alignItems='center'
        >
            <Grid item>
                <Typography variant="h5" color="initial">
                    {weekDay}
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h5" color="initial">
                    {hour} h.
                </Typography>
            </Grid>
            <Grid item>
                <IconContext.Provider value={{size:'5em'}}>
                    <IconState state={state} />
                </IconContext.Provider>
            </Grid>
            <Grid item>
                <Typography variant="h4" color="initial">
                    {temperature} º
                </Typography>
            </Grid>

        </Grid>
        )
}

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired,
    temperature: PropTypes.number.isRequired,
}

export default ForecastItem
