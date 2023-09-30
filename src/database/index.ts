import mongoose, { set, connect } from 'mongoose';
import { NODE_ENV, DB_DATABASE, DB_PASSWORD, DB_CLUSTER, DB_USERNAME } from '@config';

export const dbConnection = async () => {
  if (NODE_ENV !== 'production') {
    set('debug', true);
  }

  connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER}.mongodb.net/${DB_DATABASE}?retryWrites=true&w=majority`);

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error: '));
  db.once('open', function () {
    console.log('Connected successfully');
  });
};
