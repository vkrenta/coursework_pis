import { config } from 'dotenv';

const configure = () => {
  config();
  process.env.DB_HOST = process.env[`DB_HOST_${process.env.ENV}`];
};

export default configure();
