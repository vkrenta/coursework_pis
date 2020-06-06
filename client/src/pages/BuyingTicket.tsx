import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPageName } from '../app/actions';
import { Container, Card } from '@material-ui/core';
import { RootState } from '../app/redux';

export default function BuyingTicketScreen() {
  const dispatch = useDispatch();
  const event = useSelector((state: RootState) => state.orderEvent);
  React.useEffect(() => {
    dispatch(setPageName({ name: 'Замовлення квитка', path: '/buyticket' }));
  }, [dispatch]);
  return (
    <>
      <Container maxWidth="md">
        <Card>{JSON.stringify(event)}</Card>
      </Container>
    </>
  );
}
