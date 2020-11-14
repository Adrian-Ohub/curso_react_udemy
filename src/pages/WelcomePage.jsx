import React from 'react'
import WelcomeScreen from './../components/WelcomeScreen'
import Grid from '@material-ui/core/Grid'

const WelcomePage = (props) => {
    return (
        <div>
            
            <WelcomeScreen>
                <Grid container 
                direction='column'
                justify='center'
                className='full'
                spacing={1}>
                  <div className="highlight">
                      Weather App
                  </div>
                </Grid>
            </WelcomeScreen>
            
        </div>
    )
}

export default WelcomePage
