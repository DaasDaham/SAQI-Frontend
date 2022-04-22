import React from 'react'
import { Box, Button } from '@mui/material'
import style from "./styles.module.css"

const HomePageQuestionCard = () => {
  return (
    <Box className={style.mainContainer}>
        <Box className={style.primaryText}>Know about AQI</Box>
        <Box className={style.secondaryText}>Dummy Data</Box>
        <Button variant="contained" className={style.ctaBtn}>Button</Button>
    </Box>
  )
}

export default HomePageQuestionCard;