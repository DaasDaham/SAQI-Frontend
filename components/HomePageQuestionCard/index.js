import React from 'react'
import { Box } from '@mui/material'
import style from "./styles.module.css"

const HomePageQuestionCard = () => {
  return (
    <Box className={style.mainContainer}>
        <Box className={style.primaryText}>Know about AQI</Box>
        <Box className={style.secondaryText}>Dummy Data</Box>
        <Box className={style.secondaryText}>Dummy Data</Box>
        <Box className={style.secondaryText}>Dummy Data</Box>
    </Box>
  )
}

export default HomePageQuestionCard;