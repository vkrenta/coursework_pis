import { config } from 'dotenv';

const configure = () => {
  config();
  process.env.DB_HOST = process.env[`DB_HOST_${process.env.ENV}`];
  process.env.LINK_ROUTE = process.env[`LINK_ROUTE_${process.env.ENV}`];
};

export default configure();
