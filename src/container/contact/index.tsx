import { Grid } from '@mui/material'
import React from 'react'
import ContactOption from '../../component/ContactOption'
import ContactUsForm from '../../component/ContactUsForm'
import MotionHeaderSection from '../../component/MotionHeaderSection'

const Contact = () => {
  return (
    <>
     <MotionHeaderSection id={"contact"} subTitle={"Get in Touch"} title={"Contact Me"}/>
        <Grid container>
            <Grid item xs={12} md={6}>
                <ContactOption />
            </Grid>
            <Grid item xs={12} p={["20px", "0px"]} md={6}>
                <ContactUsForm />
            </Grid>
        </Grid>
    </>
  )
}

export default Contact