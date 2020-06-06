import React, { useState, useRef } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import validator from 'validator';
import { useDispatch } from 'react-redux';
import { signUp } from '../app/actions';

function Copyright() {
  return null;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const checkName = (name: string) =>
  /^([А-ЯІA-ZÀ-ÿ][-,а-яіa-z.']+[ ]*)+/gm.test(name) &&
  !validator.contains(name, ' ');

export default function SignUp() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const firstNameInput = useRef<HTMLInputElement>(null);
  const lastNameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const phoneInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);
  const confirmPasswordInput = useRef<HTMLInputElement>(null);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Реєстрація
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={1}>
            <Grid container direction="row" spacing={2} justify="center">
              <Grid item xs={12} sm={6}>
                <TextField
                  inputRef={firstNameInput}
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  onKeyPress={(e: React.KeyboardEvent) => {
                    if (e.key === 'Enter') lastNameInput.current?.focus();
                  }}
                  onChange={(event) => {
                    setFirstName(`${event.target.value}`);
                  }}
                  id="firstName"
                  label="Ім'я"
                  autoFocus
                  helperText={firstNameError ? 'Невірний формат' : ' '}
                  error={firstNameError}
                  onBlur={() =>
                    setFirstNameError(
                      !!firstName ? !checkName(firstName) : true
                    )
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  inputRef={lastNameInput}
                  variant="outlined"
                  required
                  fullWidth
                  onKeyPress={(e: React.KeyboardEvent) => {
                    if (e.key === 'Enter') emailInput.current?.focus();
                  }}
                  onChange={(event) => {
                    setLastName(`${event.target.value}`);
                  }}
                  id="lastName"
                  label="Прізвище"
                  name="lastName"
                  autoComplete="lname"
                  helperText={lastNameError ? 'Невірний формат' : ' '}
                  error={lastNameError}
                  onBlur={() =>
                    setLastNameError(!!firstName ? !checkName(lastName) : true)
                  }
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <TextField
                  inputRef={emailInput}
                  variant="outlined"
                  required
                  fullWidth
                  onKeyPress={(e: React.KeyboardEvent) => {
                    if (e.key === 'Enter') phoneInput.current?.focus();
                  }}
                  onChange={(event) => {
                    setEmail(`${event.target.value}`);
                  }}
                  id="email"
                  label="Email-адреса"
                  name="email"
                  autoComplete="email"
                  helperText={emailError ? 'Введіть існуючий email' : ' '}
                  error={emailError}
                  onBlur={() =>
                    setEmailError(!!email ? !validator.isEmail(email) : true)
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  inputRef={phoneInput}
                  variant="outlined"
                  required
                  fullWidth
                  onKeyPress={(e: React.KeyboardEvent) => {
                    if (e.key === 'Enter') passwordInput.current?.focus();
                  }}
                  onChange={(event) => {
                    setPhone(`${event.target.value}`);
                  }}
                  id="phone"
                  label="Моб. телефон"
                  name="phone"
                  autoComplete="phone"
                  helperText={phoneError ? 'Введіть існуючий телефон' : ' '}
                  error={phoneError}
                  onBlur={() =>
                    setPhoneError(
                      !!phone ? !validator.isMobilePhone(phone) : true
                    )
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  inputRef={passwordInput}
                  variant="outlined"
                  required
                  fullWidth
                  onKeyPress={(e: React.KeyboardEvent) => {
                    if (e.key === 'Enter')
                      confirmPasswordInput.current?.focus();
                  }}
                  onChange={(event) => {
                    setPassword(`${event.target.value}`);
                  }}
                  name="password"
                  label="Пароль"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  helperText={
                    passwordError
                      ? 'Пароль повинен містити більше 8 символів'
                      : ' '
                  }
                  error={passwordError}
                  onBlur={() => setPasswordError(!(password.length >= 8))}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  inputRef={confirmPasswordInput}
                  variant="outlined"
                  required
                  fullWidth
                  onChange={(event) => {
                    setConfirmPassword(`${event.target.value}`);
                  }}
                  name="confirm-password"
                  label="Повторіть пароль"
                  type="password"
                  id="confirm-password"
                  autoComplete="current-password"
                  helperText={
                    confirmPasswordError ? 'Повторіть введений пароль' : ' '
                  }
                  error={confirmPasswordError}
                  onBlur={() =>
                    setConfirmPasswordError(confirmPassword !== password)
                  }
                />
              </Grid>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={
              !(
                firstName &&
                lastName &&
                password &&
                email &&
                phone &&
                checkName(firstName) &&
                checkName(lastName) &&
                validator.isEmail(email) &&
                validator.isMobilePhone(phone) &&
                password.length >= 8 &&
                confirmPassword === password
              )
            }
            onClick={(e: React.MouseEvent) => {
              dispatch(signUp({ firstName, lastName, email, password, phone }));
              e.preventDefault();
            }}
          >
            Зареєструватись
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Вже зареєстровані? Увійти
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
