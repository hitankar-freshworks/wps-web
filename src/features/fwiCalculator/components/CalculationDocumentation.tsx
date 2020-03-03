import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    marginTop: 15,
    marginBottom: 15,
    width: 600
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    color: '#000000'
  },
  bodyText: {
    color: '#333333',
    fontSize: 14
  }
})

export const CalculationDocumentation = () => {
  const classes = useStyles()

  return (
    <Card
      className={classes.root}
      id="documentation-card"
      data-testid="documentation-card"
    >
      <CardContent>
        <Typography className={classes.title}>
          How Are These Values Calculated?
        </Typography>
        <Typography className={classes.bodyText}>
          Daily weather data (collected at noon local time) for the core fire
          seasons in the selected time range is collected for each of the
          selected weather stations.
          <br />
          <br />
          The value reported for each of the FFMC, BUI, and ISI indexes
          represents the 90th percentile of those index values for each
          individual weather station over the time range. When more than one
          weather station is selected, the mean for the indexes of each 90th
          percentile is also calculated.
          <br />
          <br />
          The 90th percentile indicates the 1080th largest value for each daily
          index value at the weather station (30 days * 4 months * 10 years *
          0.9 = 1080).
        </Typography>
      </CardContent>
    </Card>
  )
}
