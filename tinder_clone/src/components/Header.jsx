import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import '../css/header.css'


const Header = () => {
  return (
    <>
        <div className="header">
        <IconButton>
        <PersonIcon fontSize='large' className='header_icon'/>
        </IconButton>
        <IconButton>
        <img src="images/tinder_logo.png" alt="" className='header_logo'/>
        </IconButton>
        <IconButton>
        <QuestionAnswerIcon fontSize='large'/>
        </IconButton>
        </div>
    </>
  )
}

export default Header