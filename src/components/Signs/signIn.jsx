import React, {useState}from 'react';
//import background from './img/logo.png';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        ACTFUN
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

// const loginError = this.props.

// const loginError = true;
// console.log(loginError);
// if(loginError)
// {
//   alert("Wrong email or password !");
// }
const useStyles = makeStyles(theme => ({

  '@global': {
    body: {
        background: 'linear-gradient(45deg, #009688 30%, #b2ff59 90%)',
        //backgroundColor: theme.palette.common.white,
    },
},

  root: {
    height: '80vh',
    width:'85%',
    margin: theme.spacing(10,25),
    // height: '100vh',
    // margin: theme.spacing(10, 15),

    //borderRadius: 10,
    //border: 0,
    
  },
  paperout:{
    background: '#a5d6a7',
  },

  image: {
    //backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundImage: 'url(./img/logot.png)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 
      theme.palette.type === 'dark' ? theme.palette.grey[500] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(5, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white',
    background: '#a5d6a7',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



export default function SignInSide() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  let url = window.location.href
  if(url.endsWith("true"))
  {
    return (
    
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={5} md={5} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className={classes.paperout}>
        <div><Snackbar  open={open} autoHideDuration={3500} onClose={handleClose}>
              <Alert onClose={handleClose} severity="warning">
                帳號或密碼錯誤！
              </Alert>
              </Snackbar></div>
          <div className={classes.paper}>
            
            <Typography component="h1" variant="h5">
              登入
              
          </Typography>
            <form className={classes.form} noValidate action = "/login" method = "post">
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="帳號"
                name="username"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="密碼"
                type="password"
                id="password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="記住我"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                登入
            </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="forgot1" variant="body2">
                    忘記密碼？
                </Link>
                </Grid>
                <Grid item>
                  <Link href="signup" variant="body2">
                    {"尚未有帳號？註冊"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
   
  );
    
  }
  else
  {
  return (
    
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={5} md={5} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className={classes.paperout}>
        
          <div className={classes.paper}>
            {/* <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar> */}
            
            
            <Typography component="h1" variant="h5">
              登入
              
          </Typography>
            <form className={classes.form} noValidate action = "/login" method = "post">
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="帳號"
                name="username"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="密碼"
                type="password"
                id="password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="記住我"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                登入
            </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="forgot1" variant="body2">
                    忘記密碼？
                </Link>
                </Grid>
                <Grid item>
                  <Link href="signup" variant="body2">
                    {"尚未有帳號？註冊"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    
  );
          }
         
}