import React from 'react'
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    marginTop: 15,
    width: 600
  }
})

export const CalculationDocumentation = () => {
  const classes = useStyles()

  return (
    <TextField
      id="documentation-textfield"
      className={classes.root}
      data-testid="documentation-textfield"
      multiline
      disabled
      variant="outlined"
      InputProps={{
        readOnly: true,
      }}
      label="How Are These Values Calculated?"
      defaultValue="Daily weather data for the fire season (May 1 - August 31) for the years 2010-2019 is collected for each of the selected weather stations. 
      The value reported for each of the FFMC, BUI, and ISI indexes represents the 90th percentile of those index values for each individual weather station for the 
      selected time range. When more than one weather station is selected, the mean for the indexes of each 90th percentile is also calculated.
      
      The 90th percentile indicates the 1080th largest value for each daily index value at the weather station. (30 days * 4 months * 10 years * 0.9 = 1080)"
    />
  )
}