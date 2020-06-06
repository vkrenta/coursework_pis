import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPageName, getAllEventsAction, setOrderEvent } from '../app/actions';
import {
  Container,
  Card,
  CardHeader,
  Typography,
  CardContent,
  Grid,
  Paper,
  Button,
} from '@material-ui/core';
import { Event } from '../app/actions/types';
import { RootState } from '../app/redux';
import { useHistory } from 'react-router-dom';

const EventItem: React.FC<Event> = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    event_id,
    event_name,
    begins_at,
    stadium_name,
    stadium_id,
    free_places,
  } = props;
  return (
    <Grid item xs={12}>
      <Paper>
        <Grid container spacing={0} alignItems="center">
          <Grid item xs={2} style={{ paddingLeft: 20 }}>
            <Typography>Назва:</Typography>
            <Typography>Коли:</Typography>
            <Typography>Де:</Typography>
            <Typography>Вільних місць:</Typography>
          </Grid>
          <Grid item xs={8} style={{ padding: 20 }}>
            <Typography>{props.event_name}</Typography>
            <Typography>{props.begins_at}</Typography>
            <Typography>{props.stadium_name}</Typography>
            <Typography>{props.free_places}</Typography>
          </Grid>
          <Grid item xs={2} style={{ paddingRight: 40 }}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => {
                history.push('/buyticket');
                dispatch(
                  setOrderEvent({
                    event_id,
                    event_name,
                    begins_at,
                    stadium_name,
                    stadium_id,
                    free_places,
                  })
                );
              }}
            >
              Придбати
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default function EventsScreen() {
  const dispatch = useDispatch();
  const events: Event[] = useSelector((state: RootState) => state.events);

  React.useEffect(() => {
    dispatch(setPageName({ name: 'Події', path: '/events' }));
    dispatch(getAllEventsAction());
  }, [dispatch]);

  return (
    <>
      <Container maxWidth="md">
        <Card>
          <CardHeader
            title={<Typography variant="h4">Події, які відбудуться</Typography>}
          />
          <CardContent>
            <Grid container spacing={2} alignItems="center">
              {events.map((event) => (
                <EventItem
                  key={event?.event_id!}
                  event_id={event?.event_id!}
                  event_name={event?.event_name!}
                  begins_at={new Date(event?.begins_at!).toLocaleString()}
                  stadium_id={event?.stadium_id!}
                  stadium_name={event?.stadium_name!}
                  free_places={event?.free_places!}
                />
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
