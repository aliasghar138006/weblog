import { useQuery } from '@apollo/client'
import { Grid, Typography  , Container, Avatar} from '@mui/material'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GET_BLOG } from '../../graphql/queries'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { TailSpin } from 'react-loader-spinner'
import CommentForm from '../comments/CommentForm'
import Comments from '../comments/Comments'

const Detailblog = () => {
    const {slug} = useParams()
    const {loading , data , errors} = useQuery(GET_BLOG , {
        variables : {slug}
    })

    const navigate = useNavigate()

    if(loading) return <TailSpin height="500px" wrapperStyle={{justifyContent:"center"}}/>
    if(errors) return <h3>Error...</h3>
  return (
    <Container maxWidth="lg">
        <Grid container mt={2} spacing={10}>
            <Grid item xs={12} display="flex" alignItems="center" justifyContent="space-between">
                <Typography component="h3" variant="h5" color="primary" fontWeight="bold">{data.post.title}</Typography>
                <ArrowBackIcon onClick={() => navigate(-1)}></ArrowBackIcon>

            </Grid>
            <Grid item xs={12}>
                <img src={data.post.coverFile.url} alt={data.post.slug} style={{width:"100%" , borderRadius:15}}/>
            </Grid>
            <Grid item xs={12} display="flex" alignItems="center">
                <Avatar src={data.post.author.picture.url} sx={{width:"80px" , height:"80px" , marginLeft:"15px"}} />
                <Typography component="h5" variant="p">{data.post.author.name}</Typography>
            </Grid>
            <Grid item xs={12} m={2}>
                <div dangerouslySetInnerHTML={{__html:data.post.descriptionPost.html}} style={{width:"100%"}}>

                </div>
            </Grid>

            <Grid item xs={12} mt={3}>
                <CommentForm slug={slug}/>
            </Grid>
            <Grid item xs={12} mt={3}>
                <Comments slug={slug}/>
            </Grid>
        </Grid>
    </Container>
  )
}

export default Detailblog