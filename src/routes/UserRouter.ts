import { Router } from 'express';
import { LoginSalvo, carregarLogin} from '../controller/user_controller';

const UserRouter = Router();

UserRouter.get('/cadastro', carregarLogin);
UserRouter.post('/cadastro', carregarLogin);
UserRouter.post('/user/login', LoginSalvo);

export {
    UserRouter
};



