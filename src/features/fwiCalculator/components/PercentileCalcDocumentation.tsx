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
    fontSize: 14,
    marginBottom: 10
  }
})

export const PercentileCalcDocumentation = () => {
  const classes = useStyles()

  return (
    <Card className={classes.root} data-testid="percentile-documentation-card">
      <CardContent>
        <Typography className={classes.title}>
          How Are These Values Calculated?
        </Typography>
        <Typography>
          <div className={classes.bodyText}>
            Daily weather data (collected at noon local time) for the core fire
            seasons in the selected time range is collected for each of the
            selected weather stations.
          </div>
          <div className={classes.bodyText}>
            The value reported for each of the FFMC, BUI, and ISI indexes
            represents the 90th percentile of those index values for each
            individual weather station over the time range. When more than one
            weather station is selected, the mean for the indexes of each 90th
            percentile is also calculated.
          </div>
          <div className={classes.bodyText}>
            For example, when looking at a weather station over 10 years for a
            4-month long core fire season, the 90th percentile indicates the
            1080th largest value for each daily index value at the weather
            station (30 days * 4 months * 10 years * 0.9 = 1080).
          </div>
        </Typography>
      </CardContent>
    </Card>
  )
}
