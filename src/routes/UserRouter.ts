import { Router } from 'express';
import { carregarLogin} from '../controller/user_controller';

const UserRouter = Router();

UserRouter.get('/cadastro', carregarLogin);
UserRouter.post('/cadastro', carregarLogin);

export {
    UserRouter
};



