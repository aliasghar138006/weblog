import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_BLOGS } from '../../graphql/queries'
import CardEL from '../shared/CardEL'
import { Grid } from '@mui/material'
import { TailSpin } from 'react-loader-spinner'

const Blogs = () => {
  const { loading, data } = useQuery(GET_BLOGS)
  console.log(data)
  if(loading) return <TailSpin height="500px" wrapperStyle={{justifyContent:"center"}}/>
  return (
    <Grid container spacing={2} mt={3}>
        {data.posts.map(post => (
            <Grid item xs={12} md={6} lg={4} key={post.slug}>
                <CardEL {...post} />
            </Grid>
        ))}
    </Grid>
  )
}

export default Blogs
