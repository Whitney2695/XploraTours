// src/database/db.ts
import sql from 'mssql';
import { sqlConfig } from '../config/sql.config';

const poolPromise = new sql.ConnectionPool(sqlConfig)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL');
    return pool;
  })
  .catch(err => {
    console.error('Database Connection Failed! Bad Config:', err);
    throw err;
  });

export { sql, poolPromise };
