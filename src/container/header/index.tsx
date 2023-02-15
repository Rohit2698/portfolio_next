import React from 'react'
import {motion} from "framer-motion"
import { Grid } from '@mui/material'
import MyInfo from '../../component/MyInfo'
import MyDocument from '../../component/MyDocument'

const Header = () => {
  return (
    <Grid>
        <MyInfo />
    </Grid>
  )
}

export default Header