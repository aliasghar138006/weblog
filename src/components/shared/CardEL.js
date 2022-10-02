import React from 'react'
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Avatar,
  Typography,
  Divider,
  Button,
} from '@mui/material'
import { Link } from 'react-router-dom'

const CardEL = ({ title, author, slug, coverFile }) => {
  return (
    <Card>
      {author && (
        <CardHeader
          avatar={
            <Avatar src={author.picture.url} sx={{ textAlign: 'center' }} />
          }
          title={
            <Typography
              component="p"
              variant="p"
              color="black"
              fontWeight="bold"
              mr={2}
            >
              {author.name}
            </Typography>
          }
        />
      )}
      <CardMedia component="img" height="194" src={coverFile.url} alt={slug} />
      <CardContent>
        <Typography component="h4" variant="p" color="black">
          {title}
        </Typography>
      </CardContent>
      <Divider variant="middle" sx={{ margin: '10px', height: '10px' }} />
      <CardActions>
        <Button
          variant="outlined"
          sx={{ width: '100%', fontWeght: 'bolder', borderRadius: 3 }}
        >
          <Link to={`/blogs/${slug}`} style={{textDecoration:"none"}}>
            <Typography component="p" variant="p" fontWeight="bold">
              مطالعه مقاله
            </Typography>
          </Link>
        </Button>
      </CardActions>
    </Card>
  )
}

export default CardEL
