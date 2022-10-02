import { useQuery } from '@apollo/client'
import { Avatar, Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { TailSpin } from 'react-loader-spinner'
import { GET_COMMENTS } from '../../graphql/queries'

const Comments = ({ slug }) => {
  const { loading, data, errors } = useQuery(GET_COMMENTS, {
    variables: { slug },
  })

  console.log(data)

  if (loading)
    return (
      <TailSpin height="500px" wrapperStyle={{ justifyContent: 'center' }} />
    )

  return (
    <Grid container sx={{ boxShadow: 'rgba(0,0,0,0.1) 0px 4px 12px' }}>
      <Grid item xs={12}>
        <Typography color="primary" component="h5" variant="h6" m={2}>
          کامنت ها
        </Typography>
      </Grid>
      {data.comments.map((comment) => (
        <Grid
          item
          key={comment.id}
          xs={12}
          m={2}
          sx={{ border: '1px solid silver', borderRadius: '7px' }}
          p={1}
        >
          <Grid item xs={12} display="flex" alignItems="center">
            <Avatar>{comment.name[0]}</Avatar>
            <Typography component="h5" variant="p" m={1}>
              {comment.name}
            </Typography>
          </Grid>
          <Grid item xs={12} m={2}>
            <Typography component="h5" variant="h8" color="black" fontWeight="bold">
              {comment.comment}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </Grid>
  )
}

export default Comments
