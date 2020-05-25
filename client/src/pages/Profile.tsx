import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPageName } from '../app/actions';
import { Container, Card, CardHeader, Typography } from '@material-ui/core';

export default function Profile() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageName('Профіль'));
  }, [dispatch]);
  return (
    <>
      <Container maxWidth="md">
        <Card>
          <CardHeader
            title={<Typography variant="h4">Ваш профіль</Typography>}
          />
        </Card>
      </Container>
    </>
  );
}
