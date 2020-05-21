import React, { useState, useRef } from 'react';
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
import { makeStyles } from '@material-ui/core/styles';
import validator from 'validator';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();
  const [loginError, setLoginError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const loginInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Вхід
          </Typography>
          <form className={classes.form} noValidate={false}>
            <TextField
              inputRef={loginInput}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="login"
              label="Логін"
              name="login"
              onKeyPress={(e: React.KeyboardEvent) => {
                if (e.key === 'Enter') passwordInput.current?.focus();
                setLogin(`${loginInput.current?.value}`);
              }}
              helperText={
                loginError ? 'Введіть свій email або номер телефону' : ' '
              }
              autoFocus
              error={loginError}
              onBlur={() => {
                loginInput.current?.blur();
                setLoginError(
                  !!login
                    ? !validator.isEmail(login) &&
                        !validator.isMobilePhone(login)
                    : true
                );
              }}
            />
            <TextField
              inputRef={passwordInput}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Пароль"
              type="password"
              id="password"
              onKeyPress={(e: React.KeyboardEvent) => {
                setPassword(`${passwordInput.current?.value}`);
              }}
              helperText={
                passwordError
                  ? 'Пароль повинен складатися з 8 символів і більше'
                  : ' '
              }
              autoComplete="current-password"
              error={passwordError}
              onBlur={() =>
                setPasswordError(!!password ? password.length! < 8 : true)
              }
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Запам'ятати мене"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={
                !password ||
                !login ||
                password.length! < 8 ||
                (!validator.isEmail(login) && !validator.isMobilePhone(login))
              }
            >
              Увійти
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  href="#"
                  variant="body2"
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                  }}
                >
                  Забули пароль?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {'Не маєте облікового запису? Зареєструватись'}
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
