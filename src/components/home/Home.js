import React from 'react'
import { Container, Grid, Typography } from '@mui/material'
import Authors from './Authors'
import Blogs from './Blogs'


const Home = () => {
  return (
    <Container maxWidth="lg">
        <Grid container spacing={3} mt={5} mr={3}>
            <Grid item xs={12} md={3}>
                <Typography component="h3" variant="h5">نویسنده ها</Typography>
                <Authors />
            </Grid>
            <Grid item xs={12} md={9}>
                <Typography component="h3" variant="h5">مقالات</Typography>
                <Blogs />
            </Grid>
        </Grid>
    </Container>
  )
}

export default Home