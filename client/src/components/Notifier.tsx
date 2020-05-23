import { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';
import { RootState } from '../app/redux';
import parse from 'html-react-parser';

export default function Notifier() {
  const { enqueueSnackbar } = useSnackbar();
  const notification = useSelector((state: RootState) => state.notification);

  useEffect(() => {
    if (notification)
      enqueueSnackbar(parse(notification.message), {
        key: notification.id,
        variant: notification.variant,
        autoHideDuration: 5000,
      });
  });

  return null;
}
