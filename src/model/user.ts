import { Connection } from "../infra/Connection";

export type User = {
    id?: number;
    nome: string;
    email: string;
    senha: string;
   
}


export async function insert(user: User) {
    await Connection.query(
        'INSERT INTO usuario (nome, email, senha) VALUES ($1, $2, $3);',
        [
            user.nome,
            user.email,
            user.senha,
        ]
    );
}

export async function getAll() {
    const { rows } = await Connection.query('SELECT * FROM usuario;');
    return rows;
}

export async function deleteById(id: string){
   await Connection.query('DELETE FROM usuario WHERE id=$1', [id]);
}

export async function updateById(user: User) {
    await Connection.query(
        'UPDATE usuario SET name=$1, password=$2, email=$3 WHERE id=$4;',
        [
            user.nome,
            user.senha,
            user.email,
            user.id
        ]
    )
}

export async function getById(id: string) {
    const {rows} = await Connection.query(
        'SELECT * FROM usuario WHERE id =$1',
        [id]
    );
    return rows[0];
}

export async function getByEmail(email: string) {
    const {rows} = await Connection.query(
        'SELECT * FROM usuario WHERE email = $1',
        [email]
    );
    return rows[0]; 
}

export async function getByEmailandPassword(email: string, senha: string) {
    const {rows} = await Connection.query(
        'SELECT * FROM usuario WHERE email = $1 AND senha = $2',
        [email, senha]
    );
    return rows[0]; 
}