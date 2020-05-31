import React from 'react';
import { useDispatch } from 'react-redux';
import { setPageName } from '../app/actions';
import { Container, Card } from '@material-ui/core';

export default function PurchasesScreen() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setPageName({ name: 'Мої квитки', path: '/purchases' }));
  });
  return (
    <>
      <Container maxWidth="md">
        <Card>Hi</Card>
      </Container>
    </>
  );
}
