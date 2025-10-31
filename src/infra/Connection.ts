import { Pool } from 'pg';

const conn = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '1234',
    database: 'catalogo-bd'
});

export {
    conn
}