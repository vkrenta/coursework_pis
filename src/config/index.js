import { config } from 'dotenv';

const configure = () => {
  config();
  process.env.ENV = process.env.NODE_ENV;
  process.env.DB_HOST = process.env[`DB_HOST_${process.env.ENV}`];
  process.env.LINK_ROUTE = process.env[`LINK_ROUTE_${process.env.ENV}`];
  process.env.CLIENT_LINK = process.env[`CLIENT_LINK_${process.env.ENV}`];
};

export default configure();
