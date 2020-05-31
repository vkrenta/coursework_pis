import React from 'react';
import { useDispatch } from 'react-redux';
import { setPageName } from '../app/actions';
import { Container, Card } from '@material-ui/core';

export default function BuyingTicketScreen() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setPageName({ name: 'Замовлення квитка', path: '/buyticket' }));
  });
  return (
    <>
      <Container maxWidth="md">
        <Card>Hi</Card>
      </Container>
    </>
  );
}
