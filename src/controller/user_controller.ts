import { Request, Response} from "express";
import { User, getByEmail, insert } from "../model/user";

export async function carregarLogin(req: Request, res: Response){
    res.render('login', {response: null});
    const {nome, email, senha} = req.body;

if(!nome || !email || !senha){
    return res.render('login', {
        response: {
            type: 'error',
            value: 'Preencha os campos corretamente'
        }
    })
}

 const userFound = await getByEmail(email);
 if(userFound){
    return res.render('login', {
        response: {
            type: 'error',
            value: 'E-mail já cadastrado'
        }
    })
}
  const user: User = {
    nome,
    email,
    senha
  }

  await insert(user);

    return res.render('login', {
        response: {
            type: 'success',
            value: 'Usuário cadastrado com sucesso!'
        }
    })

}