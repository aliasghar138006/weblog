import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import BookIcon from '@mui/icons-material/Book'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar style={{display:"flex" , justifyContent:"space-between"}}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <Typography component="h1" variant="h6" flex={1}>
              وبلاگ برنامه نویسان
            </Typography>
          </Link>
          <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
            <BookIcon></BookIcon>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
