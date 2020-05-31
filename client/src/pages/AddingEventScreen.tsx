import React from 'react';
import { useDispatch } from 'react-redux';
import { setPageName } from '../app/actions';
import {
  Container,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  TextField,
} from '@material-ui/core';

export default function AddingEventScreen() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setPageName({ name: 'Додавання події', path: '/addevent' }));
  });
  return (
    <>
      <Container maxWidth="sm">
        <Card>
          <CardHeader
            title={<Typography variant="h4">Додавання події</Typography>}
          />
          <CardContent>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12}>
                <TextField fullWidth label="Назва події" variant="outlined" />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
