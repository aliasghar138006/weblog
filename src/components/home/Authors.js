import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_AUTHORS } from '../../graphql/queries'
import {
  Avatar,
  Card,
  Container,
  Divider,
  Grid,
  Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { TailSpin } from 'react-loader-spinner'

const Authors = () => {
  const { loading, data, errors } = useQuery(GET_AUTHORS)
  console.log(data)
  if (loading) return <TailSpin height="500px" wrapperStyle={{justifyContent:"center"}}/>
  if (errors) return <h3>Error...</h3>
  return (
    <Container maxWidth="lg">
      <Card sx={{ marginTop: '40px' }}>
        {data.authors.map((author, index) => (
          <React.Fragment key={author.id}>
            <Link to={`/authors/${author.slug}`} style={{textDecoration:"none" , color:"black"}}>
              <Grid container sx={{ alignItems: 'center', padding: '5px' }}>
                <Grid item xs={4}>
                  <Avatar src={author.picture.url} sx={{ marginTop: '5px' }} />
                </Grid>
                <Grid item xs={8}>
                  <Typography component="h5" variant="p">
                    {author.name}
                  </Typography>
                </Grid>
              </Grid>
            </Link>
            {index !== data.authors.length - 1 && (
              <Divider variant="middle" sx={{}} />
            )}
          </React.Fragment>
        ))}
      </Card>
    </Container>
  )
}

export default Authors
