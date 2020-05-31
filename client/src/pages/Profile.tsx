import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPageName } from '../app/actions';
import {
  Container,
  Card,
  CardHeader,
  Typography,
  CardContent,
  Grid,
  Paper,
  makeStyles,
  IconButton,
  TextField,
} from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { RootState } from '../app/redux';

const useStyles = makeStyles((theme) => ({
  paper: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

type ProfileItemProps = {
  title: string;
  value: string;
  'no-edit'?: boolean;
};

const ProfileItem: React.FC<ProfileItemProps> = (props) => {
  const classes = useStyles();
  const [editing, setEditing] = React.useState(false);
  const [text, setText] = React.useState(props.value);
  const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={3}>
              <Typography>{props.title}</Typography>
            </Grid>
            {editing ? (
              <>
                <Grid item xs={7}>
                  <TextField
                    variant="standard"
                    label={props.title}
                    fullWidth
                    inputRef={inputRef}
                    value={text}
                    onChange={() => setText(inputRef.current?.value!)}
                  />
                </Grid>
                <Grid item xs={1}>
                  <IconButton key={'check-button'}>
                    <CheckIcon />
                  </IconButton>
                </Grid>
                <Grid item xs={1}>
                  <IconButton>
                    <CloseIcon key={'cancel-button'} />
                  </IconButton>
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={8}>
                  <Typography>{props.value}</Typography>
                </Grid>
                <Grid item xs={1}>
                  {props['no-edit'] ? (
                    <div style={{ height: 48 }} />
                  ) : (
                    <IconButton
                      onClick={() => setEditing(true)}
                      key={'edit-button'}
                    >
                      <CreateIcon />
                    </IconButton>
                  )}
                </Grid>
              </>
            )}
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default function Profile() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageName({ name: 'Профіль', path: '/profile' }));
  }, [dispatch]);

  const { name, phone, email, created_at, orders_count } = useSelector(
    (state: RootState) => state.userInfo!
  );
  const [firstName, lastName] = name.split(' ')!;

  return (
    <>
      <Container maxWidth="md">
        <Card>
          <CardHeader
            title={<Typography variant="h4">Ваш профіль</Typography>}
          />
          <CardContent>
            <Grid container spacing={2}>
              <ProfileItem title="Ім'я" value={firstName} />
              <ProfileItem title="Прізвище" value={lastName} />
              <ProfileItem title="Email" value={email} />
              <ProfileItem title="Моб. телефон" value={phone} />
              <ProfileItem
                title="Дата реєстрації"
                value={new Date(created_at).toLocaleString()}
                no-edit
              />
              <ProfileItem
                title="Всього замовлень"
                value={orders_count.toString()}
                no-edit
              />
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
