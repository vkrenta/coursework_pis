import { format, createLogger, transports } from 'winston';

const mFormat = format.printf(({ level, message, timestamp, label }) => {
  if (!label)
    return `[${timestamp
      .replace('T', ' ')
      .replace('Z', '')}] [${level.toUpperCase()}]: ${message}`;
  return `[${timestamp
    .replace('T', ' ')
    .replace('Z', '')}] [${level.toUpperCase()}] [${label}]: ${message}`;
});

const log = createLogger({
  format: format.combine(format.timestamp(), mFormat),
});

if (process.env.ENV !== 'STAGE') {
  log.add(new transports.Console());
}

export default log;
