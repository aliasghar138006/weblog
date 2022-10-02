import { Grid, TextField, Typography, Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import rtlPlugin from 'stylis-plugin-rtl'
import { prefixer } from 'stylis'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { useMutation } from '@apollo/client'
import { SEND_COMMENT } from '../../graphql/mutations'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CommentForm = ({ slug }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')

  const [theme, setTheme] = useState({})
  const [cacheRtl, setCacheRtl] = useState({})

  const [sendComment, { loading, data, errors }] = useMutation(SEND_COMMENT, {
    variables: { name, email, comment: text, slug },
  })

  

  useEffect(() => {
    setTheme(
      createTheme({
        direction: 'rtl', // Both here and <body dir="rtl">
      }),
    )

    // Create rtl cache
    setCacheRtl(
      createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
      }),
    )
  }, [])

  const sendHandler = () => {
    
    if(!name && !email && !text) {
      toast.warn("فیلد ها را پر کنید" , {
        position:"top-center"
      })
    }else {
      sendComment()
      toast.success("پیام با موفقیت ارسال شد و در انتظار تایید می باشد" , {
        position:"top-center"
      })
    }
  }


  

  if (!Object.keys(theme).length) return console.log('blank')
  if (!Object.keys(cacheRtl).length) return console.log('blank')
  return (
    <Grid
      container
      sx={{ boxShadow: 'rgba(0,0,0,0.1) 0px 4px 12px ', borderRadius: '15px' }}
    >
      <Grid item xs={12} m={3}>
        <Typography component="h5" variant="h6" color="primary">
          فرم ارسال کامنت
        </Typography>
      </Grid>
      <Grid item xs={12} m={3} dir="rtl">
        <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={theme}>
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              label="نام کاربری"
              fullWidth
              variant="outlined"
            />
          </ThemeProvider>
        </CacheProvider>
      </Grid>
      <Grid item xs={12} m={3} dir="rtl">
        <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={theme}>
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="ایمیل"
              fullWidth
              variant="outlined"
            />
          </ThemeProvider>
        </CacheProvider>
      </Grid>
      <Grid item xs={12} m={3} dir="rtl">
        <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={theme}>
            <TextField
              value={text}
              onChange={(e) => setText(e.target.value)}
              label="متن"
              fullWidth
              variant="outlined"
              multiline
              minRows={4}
            />
          </ThemeProvider>
        </CacheProvider>
      </Grid>
      <Grid item m={3} xs={12}>
        {loading ? <Button variant="contained" disabled>در حال ارسال...</Button> :

        <Button variant="contained" onClick={sendHandler}>
          ارسال
        </Button>
        }
      </Grid>
      <ToastContainer />
    </Grid>
  )
}

export default CommentForm
