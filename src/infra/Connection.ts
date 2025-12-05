import { Pool } from 'pg';

const Connection = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '1234',
    database: 'catalogo-bd'
});

export {
    Connection
}