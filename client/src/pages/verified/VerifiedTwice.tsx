import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Container,
  makeStyles,
  CardActions,
  Button,
  Theme,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    top: 100,
  },
  card: {
    backgroundColor: '#4caf50',
  },
}));

export default function VerifiedSuccess() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <Container maxWidth="sm" className={classes.root}>
        <Card className={classes.card}>
          <CardHeader title="Помилка!" />
          <CardContent>
            <Typography>Ви вже зареєстровані в нашій системі</Typography>
          </CardContent>
          <CardActions>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => history.push('/login')}
            >
              Увійти
            </Button>
          </CardActions>
        </Card>
      </Container>
    </>
  );
}
