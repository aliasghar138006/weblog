import { useQuery } from '@apollo/client'
import { Avatar, Grid, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import { GET_AUTHOR } from '../../graphql/queries'
import sanitizeHtml from 'sanitize-html'
import CardEL from '../shared/CardEL'
import { TailSpin } from 'react-loader-spinner'

const Author = () => {
  const { slug } = useParams()
  const { loading, data, errors } = useQuery(GET_AUTHOR, {
    variables: { slug },
  })
  console.log(data)
  if (loading) return <TailSpin height="500px" wrapperStyle={{justifyContent:"center"}}/>
  if (errors) return <h3>Error...</h3>
  return (
    <Grid container mt={5}>
      <Grid item xs={12} sx={{textAlign:"center" ,display:"flex" , flexDirection:"column" ,  alignItems:"center"}}>
        <Avatar src={data.author.picture.url} sx={{width:"250px" , height:"250px"}}/>
        <Typography component="h3" variant="h4" mt={5} color="text.secondary">{data.author.name}</Typography>
      </Grid>
      <Grid item xs={12} mt={10} m={2}>
        <div dangerouslySetInnerHTML={{__html:data.author.about.html}}/>

        
      </Grid>
      <Grid item xs={12} sm={6} md={4} mt={10}>
        {
          data.author.posts.map(post => (
            <CardEL title={post.title} slug={post.slug} coverFile={post.coverFile} key={post.id} />
          ))
        }
      </Grid>
    </Grid>
  )
}

export default Author
