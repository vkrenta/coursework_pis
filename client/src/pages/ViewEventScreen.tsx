import React from 'react';
import { useDispatch } from 'react-redux';
import { setPageName } from '../app/actions';
import { Container, Card } from '@material-ui/core';

export default function ViewEventScreen() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setPageName({ name: 'Події', path: '/events' }));
  });
  return (
    <>
      <Container maxWidth="md">
        <Card>Hi</Card>
      </Container>
    </>
  );
}
