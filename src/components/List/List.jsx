import React, { useState } from 'react' 
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core'

import useStyles from './styles'

const List = () => {
    const classes = useStyles()
    const [type, setType] = useState('restaurants')

    return (
        <div className={classes.container}>
            <Typography variant="h4">Resaurants, Hotels, & Attractions around you</Typography>
            <FormControl className={classes.fromControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}> 
                    <MenuItem value="resaurants">Resaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default List